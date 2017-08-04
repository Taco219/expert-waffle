const bcrypt = require('bcrypt-nodejs');

export const hash = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, null, null, (err, hashed) => {
            if (err) reject({err: err, msg:"err hashing pwd"});
            resolve(hashed);
        })
    });
};

export const compare = (pwd, hashedPwd) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(pwd, hashedPwd, (err, correct) => {
            if(err) reject(err);
            resolve(correct);
        });
    });
};