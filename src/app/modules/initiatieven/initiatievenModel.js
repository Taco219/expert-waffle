import routeConfig from './config/routeConfig'
import initiatievenController from './controllers/initiatievenController'
import createInitiatiefController from './controllers/createInitiatiefController'

const initiatievenModule = angular.module('initiatievenModule', []);

initiatievenModule.controller('initiatievenController', initiatievenController);
initiatievenModule.controller('createInitiatiefController', createInitiatiefController);

routeConfig(initiatievenModule);

export default {
    name: 'initiatievenModule'
}

