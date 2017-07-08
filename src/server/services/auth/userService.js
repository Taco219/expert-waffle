import { userModel as User} from '../../models/userModel';

/**
 * @param userId
 * @returns {Promise.<User>}
 */
export const getById = async (userId) => {
    try {
        return await User.findById(userId).exec() ;
    }
    catch (err) {
        throw err;
    }
};

/**
 * @param userProperties
 * @returns {Promise.<nUser>}
 */
export const create = async (userProperties) => {
    try {
        const nUser = new User(userProperties);
        return await nUser.save();
    }
    catch (err) {
        throw err;
    }
};

export const getByUsername = async (username) => {
    try {
        return await User.findOne({username: username}).exec();
    }
    catch (err) {
        throw err;
    }
};