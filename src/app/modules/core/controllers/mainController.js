export default class mainController{
    /*@ngInject*/
    constructor($scope, $window){
        const jwt = $window.localStorage["jwt"];
        console.log(jwt);
        $scope.title = "hello main page";
    }
}

