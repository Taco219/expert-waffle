import hashRouter from './api/hash';

export const serverRegisterApi = (router) => {
    router.use('/', hashRouter);
};