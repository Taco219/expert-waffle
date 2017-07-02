// modules
import config from './config/config';
import homeModule from './../home/homeModule'
import loginModule from './../login/loginModule'
import initiatievenModel from './../initiatieven/initiatievenModel'

// controllers
import mainController from './controllers/mainController';

const coreModule = angular.module('core', ['ui.router', homeModule.name, loginModule.name, initiatievenModel.name]);
coreModule.controller('mainController', mainController);

config(coreModule);
module.exports = coreModule;
