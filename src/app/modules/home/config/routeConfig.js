export default function (module) {
    module.config(function ($stateProvider) {
        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl: '../modules/home/pages/home.html'
            })
    })
};