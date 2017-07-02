export default class loginController{
    /*@ngInject*/
    constructor($scope, $http, $window, $state){
        $scope.user = {};

        if($window.localStorage["jwt"]){
            $http.get('http://localhost:3333/api/user/', { headers:{authorization: $window.localStorage["jwt"]}})
                .then((data) => {
                    console.log(data.data);
                    $state.go('main');
                })
                .catch((err) => {
                    alert(err);
                });
        }

        $scope.login = () => {
            $http.post('http://localhost:3333/api/user/login/', { user: $scope.user })
                .then((data) => {
                    $window.localStorage["jwt"] = data.data.token;
                    alert("logged in")
                })
                .catch((err) => {
                    alert(err.data.err);
                });
        }
    }
}

