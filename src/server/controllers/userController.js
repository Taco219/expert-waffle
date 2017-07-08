import { userModel as User} from '../models/userModel';

export const register = async (userProperties) => {
    try {

        const nUser = new User(userProperties);

        await nUser.save();

        return { data: nUser, code: 200 };
    }
    catch (err) {
        console.error('User register controller');
        console.error(err);
        throw err;
    }
};

export const getUserById = async (userId) => {
    try {
        const user = await User.findById(userId).exec();

        if(user) {
            return { data: user, code: 200 };
        }
        else {
            return { message: 'User not found', code: 404 };
        }
    }
    catch (err) {
        if(err.name === "CastError"){
            return { message: 'Invalid object id', code: 400 };
        }
        else {
            console.error('User register controller');
            console.error(err);
            throw err;
        }
    }
};