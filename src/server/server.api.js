import blockRouter from './api/blockchain';
import userRouter from './api/userApi';
import markerRouter from './api/markerApi';

export const serverRegisterApi = (router) => {
    router.use('/block', blockRouter);
    router.use('/user', userRouter);
    router.use('/marker', markerRouter);
};