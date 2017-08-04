import * as UserC from '../controllers/userController'

const express = require('express');

const router = express.Router();

// login
router.post('/login', async(req, res)=> {
    try {
        console.log(req.body);
        const user = req.body.user;
        const loginResponse = await UserC.login(user);

        res.status(loginResponse.code).json(loginResponse);
    }
    catch (err) {
        console.error(err);
        res.send(err);
    }

});

router.post('/login1', async(req, res)=> {
    console.log(req.body);

    res.send('test');

});


// register
router.post('/', async(req, res)=> {
    try {
        const user = req.body.user;
        const response = await UserC.create(user);
        res.status(response.code).json(response);
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