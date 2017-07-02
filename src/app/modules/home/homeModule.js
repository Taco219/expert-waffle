import routeConfig from './config/routeConfig'
import homeController from './controllers/homeController'

const homeModule = angular.module('homeModule', []);
homeModule.controller('homeController', homeController);

routeConfig(homeModule);

export default {
    name: 'homeModule'
}