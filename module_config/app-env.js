'use strict';

const env = require('cfenv').getAppEnv(), LOCAL_ENV_PORT = 3000;

module.exports = {
  app_name : env.name,
  environment : process.env.NODE_ENV,
  port : env.isLocal ? LOCAL_ENV_PORT : env.port,
  url : env.URL || "http://localhost",
  secure : process.env.VCAP_APPLICATION ? true : false
};