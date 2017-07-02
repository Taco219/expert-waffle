export const listen = (server) => {
    const port = process.config.port;
    const url = process.config.serverUrl;

    server.listen(port, () => {
        console.log(`listening on: http://${url}:${port}`);
    })
};

export const expressConfiguration = (app) => {
    const bodyParser = require('body-parser');
    const cors = require('cors');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(cors());
};