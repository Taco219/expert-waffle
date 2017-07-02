const fs = require('fs');
const path = require('path');

export const configureServer = async function () {
    const configPath = path.join(__dirname, '../../config', "config.json");
    const file = fs.readFileSync(configPath);
    process.config = JSON.parse(file);
};