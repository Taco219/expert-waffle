import routeConfig from './config/routeConfig'
import loginController from './controllers/loginController'

const loginModule = angular.module('loginModule', []);
loginModule.controller('loginController', loginController);

routeConfig(loginModule);

export default {
    name: 'loginModule'
}