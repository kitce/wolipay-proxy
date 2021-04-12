#!/usr/bin/env node
import proxy from './proxy';
import config from './config/config';

if (require.main === module) {
  proxy(config);
}
