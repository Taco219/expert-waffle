import { register, getUserById } from '../controllers/userController'

const express = require('express');

const router = express.Router();



router.post('/', async(req, res)=> {
    const user = req.body.user;
    const a = await register(user);
    res.status(a.code).json(a);
});

router.get('/:id', async(req, res) => {
    try {
        const userResponse = await getUserById(req.params.id);
        res.status(userResponse.code).json(userResponse);
    }
    catch (err) {
        res.send(err);
    }
});

export default router;
