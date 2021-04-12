# wolipay-proxy

Wolipay proxy

## Install

```bash
$ yarn add wolipay-proxy
```

## Usage

### Programmatic

`(options: IProxyConfig = {}) => IProxy`
```ts
import proxy from 'wolipay-proxy';
const { app, port } = proxy();
```

#### Types
```ts
interface IProxyConfig {
  port?: number;
}

interface IProxy {
  app: Express;
  port: number;
}
```

### Command Line Interface
```bash
$ yarn global add wolipay-proxy
$ wolipay-proxy
```

#### Environment variables
| Variable | Default | Required |
| -------- | ------- | -------- |
| `PORT`   | `612`   | No       |

## Build

```bash
$ yarn build
```

## License

[The MIT License](https://github.com/kitce/wolipay-proxy/blob/master/LICENSE)
