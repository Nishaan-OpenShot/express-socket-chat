/*
 * Chat application using Angular 7, Nodejs, express, mongodb and Socket.io
 * @author Gurpreet Deol
 */

'use strict'

const express = require('express');
const http = require('http');
const socketio = require('socket.io');

// const sicketEvents = require('./web/socket');
// const routes = require('./web/routes');
const appConfig = require('./config/app-config');

class Server {

    constructor() {
        this.app = express();
        this.http = http.Server(this.app);
        this.socketio = socketio(this.app);
    }

    appConfig() {
        new appConfig(this.app).includeConfig();
    }

    /* Including app Routes starts*/
    includeConfig() {
            //new routes(this.app).routesConfig();
            //new socketEvents(this.socket).socketConfig();
        }
        /* Including app Routes ends*/

    appExecute() {
        this.appConfig();
        this.includeRoutes();

        const port = process.env.PORT || 4000;
        const host = process.env.HOST || `localhost`;

        this.http.listen(port, host, () => {
            console.log(`Listening on httl://${host}:${port}`);
        });
    }

}

const app = new Server();
app.appExecute();