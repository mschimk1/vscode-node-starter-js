'use strict';

class Environment {
    constructor() {
        const env = require('cfenv').getAppEnv(), LOCAL_ENV_PORT = 3000;
        this.app_name = env.app_name;
        this.environment = process.env.NODE_ENV;
        this.port = env.isLocal ? LOCAL_ENV_PORT : env.port;
        this.url = env.URL || "http://localhost";
        this.secure = process.env.VCAP_APPLICATION ? true : false;
    }
    toString() {
        return "TODO";   
    }
}

module.exports = Environment;