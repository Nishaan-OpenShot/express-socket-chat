/*
 * Chat application using Angular 7, Nodejs, express, mongodb and Socket.io
 * @author Gurpreet Deol
 */

const expressConfig = require('./express-config');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

class AppConfig {
    constructor(app) {
        dotenv.config();
        this.app = app;
    }

    includeConfig() {
        this.app.use(
            bodyParser.json()
        );
        this.app.use(
            cors()
        );
        new expressConfig(this.app);
    }
}

module.exports = AppConfig;