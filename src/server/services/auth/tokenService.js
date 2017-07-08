const jwt = require('jsonwebtoken');

/**
 * @param userId
 * @returns {Promise<token>}
 */
export const sign = (userId) =>{
    return new Promise((resolve, reject) => {
        jwt.sign({userId: userId}, process.config.secret, function (err, token) {
            if (err) reject(token);
            resolve(token);
        });
    });
};