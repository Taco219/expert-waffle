import blockRouter from './api/blockchain';
import userRouter from './api/userApi';

export const serverRegisterApi = (router) => {
    router.use('/block', blockRouter);
    router.use('/user', userRouter);
};