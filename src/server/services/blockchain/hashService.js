const crypto = require('crypto');

export const hash = async (value) =>{
    const secret = '';
    value = await JSON.stringify(value);
    return crypto.createHmac('sha512', secret).update(value).digest('hex');
};