const express = require('express');
const htest = require('sha256');
const crypto = require('crypto');
const forge = require('node-forge');

const { randomBytes } = require('crypto');
const secp256k1 = require('secp256k1');

const rsa = forge.pki.rsa;

const router = express.Router();

import { hash } from '../services/hashService';

router.get('/test/:test', (req, res)=> {
    let a = htest(req.params.test);

    let start = 0;
    let result = htest(start.toString());

    while (result.slice(-1) !== 'a'){
        result = htest(start.toString());
        // console.log(result);
        // console.log(start);
        start++;
    }

    res.send({hash: a, test: a.slice(-1), b: result});
});

router.get('/1', async (req, res)=> {
    const val = {lol: '124'};

    console.log(typeof val);
    const h1 = await hash(val);
    const h2 = htest('test');

    const h3 = htest(h1 + h2);
    const h4 = htest('test3' + h2);



    res.send({val: hash, h1: h1, h2: h2, h3: h3, h4: h4});
});

router.get('/2/:test', async (req, res)=> {
    // res.send(await stringify(req.params.test))
    // console.log(await stringify(true));
    let obj = {test: 'value', lol: true, random: {test: 'test'}};
    console.log(typeof JSON.stringify(obj));
    // let obj = true;
    // let a = await stringify(obj);
    // let b = JSON.stringify(obj);
    // console.log('b' + typeof b);
    // console.log('b2' + b);

    let c = await hash(obj);

    res.send(c)
    // res.send(true.toString())
});

router.get('/rsa', (req, res) => {
    let msg = randomBytes(64);
    let str = msg.toString('hex');
    let a = new Buffer('random');

    console.log(msg.toString('hex'));
    console.log(new Buffer(str));
    // msg = new Buffer(msg);

    // generate privKey
    let privKey;
    do {
        privKey = randomBytes(64)
    } while (!secp256k1.privateKeyVerify(privKey));

// get the public key in a compressed format
    const pubKey = secp256k1.publicKeyCreate(privKey);
    // console.log(pubKey);

// sign the message
    const sigObj = secp256k1.sign(msg, privKey);
    console.log('s ', sigObj.signature.toString('hex'));
// verify the signature
    console.log(secp256k1.verify(msg, sigObj.signature, pubKey));

    res.send('test');
});





export default router;