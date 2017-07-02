export default function (coreModule) {
    coreModule.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise(function ($injector) {
            const $state = $injector.get("$state");
            $state.go("login");
        });

        $stateProvider
            .state ('main', {
                url: '/',
                templateUrl: './modules/core/pages/main.html'
            });
    });
};