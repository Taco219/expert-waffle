export default function (module) {
    module.config(function ($stateProvider) {
        $stateProvider
            .state('initiatieven',{
                url: '/initiatieven',
                templateUrl: '../modules/initiatieven/pages/initiatieven.html'
            })
            .state('createInitiatief',{
                url: '/initiatieven/create',
                templateUrl: '../modules/initiatieven/pages/createInitiatief.html'
            })
    })
};
