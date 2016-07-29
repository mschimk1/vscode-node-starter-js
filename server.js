#! /usr/bin/env node
'use strict';

require('dotenv').config({silent: true});

const logger  = require('winston');
const Environment = require('./module_config/app-env');
let env = new Environment();

// Deployment tracking
require('cf-deployment-tracker-client').track();

const server = require('./app');
const port = process.env.PORT || process.env.VCAP_APP_PORT || env.port;

server.listen(port, () => {
  logger.info('Server listening on %s:%s', env.url, env.port);
});