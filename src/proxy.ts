import { middleware as cache } from 'apicache';
import express, { Express } from 'express';
import { createProxyServer } from 'http-proxy';
import morgan from 'morgan';
import * as config from './config/config';
import { target } from './config/proxy';

interface IProxyConfig {
  port?: number;
}

export interface IProxy {
  app: Express;
  port: number;
}

const proxy = (options: IProxyConfig = {}): IProxy => {
  const _config = {
    ...options,
    ...config
  };

  const proxy = createProxyServer({
    target,
    secure: false,
    changeOrigin: true
  });

  const app = express();

  app.use(morgan('tiny'));
  app.use(cache('1 hour'));

  app.use((req, res) => {
    proxy.web(req, res);
  });

  const { port } = _config;
  app.listen(port, () => {
    console.info('Wolipay proxy server listening on', port);
  });

  return { app, port };
};

export default proxy;

