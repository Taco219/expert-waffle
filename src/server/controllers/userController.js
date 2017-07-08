import * as UserS from '../services/auth/userService';
import * as TokenS from '../services/auth/tokenService';

export const login = async (user) => {
    try {
        console.log('login');
        // get user by username
        const dUser = await UserS.getByUsername(user.username);

        // validate password
        if (dUser.password === user.password){
            const token = TokenS.sign(dUser._id);
            return token;
        }
        else {
            return { message: 'Wrong username or password', code: 400 };
        }
    }
};

export const create = async (user) => {
    try {
        // todo validation / requirements
        // todo hashing
        const nUser = await UserS.create(user);
        return nUser;
    }
    catch (err){
        throw err;
    }
};

export const getId = async (userId) => {
    try {
        return await UserS.getById(userId);
    }
    catch (err) {
        throw err;
    }
};

