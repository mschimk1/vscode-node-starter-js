#! /usr/bin/env node
'use strict';

require('dotenv').config({silent: true});

const logger  = require('winston');
const appEnv = require('./module_config/app-env');

// Deployment tracking
require('cf-deployment-tracker-client').track();

const server = require('./app');
const port = process.env.PORT || process.env.VCAP_APP_PORT || appEnv.port;

server.listen(port, () => {
  logger.info(`Server listening on ${appEnv.url}:${appEnv.port}`);
});