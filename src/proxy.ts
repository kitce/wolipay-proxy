import { middleware as cache } from 'apicache';
import express from 'express';
import httpProxy from 'http-proxy';
import morgan from 'morgan';
import { target } from './config/proxy';

interface IConfig {
  port: number;
}

const proxy = (config: IConfig) => {
  const proxy = httpProxy.createProxyServer({
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

  app.listen(config.port, () => {
    console.info('Proxy server listening on', config.port);
  });

  return app;
};

export default proxy;

