import { expressConfiguration, listen } from './server.express';
import { serverRegisterApi } from './server.api';
import { configureServer } from './server.configuration'

const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const Promise = require('bluebird');

const app = express();
const server = http.createServer(app);

const routerApi = express.Router();

// config
configureServer().then(function () {
    mongoose.Promise = Promise;

    mongoose.connect(process.config.mongoUrl, {useMongoClient: true});

    expressConfiguration(app);

    serverRegisterApi(routerApi);

    app.use('/api', routerApi);

    listen(server);
});

