import { expressConfiguration, listen } from './server.express';
import { serverRegisterApi } from './server.api';
import { configureServer } from './server.configuration'

const express = require('express');
const mongoose = require('mongoose');
const http = require('http');

const app = express();
const server = http.createServer(app);

const routerApi = express.Router();

// config
configureServer().then(async () => {
    mongoose.Promise = global.Promise;

    await mongoose.connect(process.config.mongoUrl);
    console.log('Connected to mongo');

    expressConfiguration(app);

    serverRegisterApi(routerApi);

    app.use('/api', routerApi);

    listen(server);
});

