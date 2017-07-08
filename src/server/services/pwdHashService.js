const bcrypt = require('bcrypt-nodejs');

export const hash = async (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, null, null, (err, hashed) => {
            if (err) reject({err: err, msg:"err hashing pwd"});
            resolve(hashed);
        })
    });
};