// services
import * as UserS from '../services/auth/userService';
import * as TokenS from '../services/auth/tokenService';
import * as HashS from '../services/auth/pwdHashService';

// enums
import ErrN from '../enumerators/errorEnum';

export const login = async (user) => {
    try {
        // get user by username
        const dUser = await UserS.getByUsername(user.username);

        // validate password
        if (dUser !== null && HashS.compare(user.password, dUser.password)){
            const token = await TokenS.sign(dUser._id);
            return { token: token, code: 200 };
        }
        else {
            return { message: 'Wrong username or password', code: 400 };
        }
    }
    catch (err){
        throw err;
    }
};

export const create = async (user) => {
    try {
        // todo validation / requirements
        user.password = await HashS.hash(user.password);

        const nUser = await UserS.create(user);
        return { user: nUser, code: 200 };
    }
    catch (err){
        if (err.code === ErrN.duplicateKey){
            return { message: 'Username already exists', code: 409 }
        }
        else{
            throw err;
        }
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