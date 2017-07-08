import * as UserC from '../controllers/userController'

const express = require('express');

const router = express.Router();

// login
router.post('/login', async(req, res)=> {
    try {
        const user = req.body.user;
        const a = UserC.login(user);
        res.status(a.code).json(a);
    }
    catch (err) {
        console.error(err);
        res.send(err);
    }

});

// register
router.post('/', async(req, res)=> {
    try {
        const user = req.body.user;
        console.log('typeof UserC.create()');
        console.log(UserC);
        const a = await UserC.create(user);
        res.status(a.code).json(a);
    }
    catch (err){
        console.error(err);
        res.send(err);
    }

});

// get by id
router.get('/:id', async(req, res) => {
    try {
        const userResponse = await UserC.getId(req.params.id);
        res.status(userResponse.code).json(userResponse);
    }
    catch (err) {
        res.send(err);
    }
});

export default router;