import { mine } from  '../controllers/mineController';

const express = require('express');

const router = express.Router();

router.get('/mine', async(req, res)=> {
    try {
        const a = await mine();
        res.send(a);
    }
    catch (err){
        res.send(err);
    }
});

router.get('/test', async (req, res) => {

});

export default router;
