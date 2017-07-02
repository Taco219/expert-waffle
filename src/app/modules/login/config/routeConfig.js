export default function (module) {
    module.config(function ($stateProvider) {
        $stateProvider
            .state('login',{
                url: '/login',
                templateUrl: '../modules/login/pages/login.html'
            })
    })
};
