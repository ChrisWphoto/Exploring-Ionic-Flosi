angular.module('flossy.controllers', ['flossy.services'])

.controller('splashCtrl', function($scope, User, $state){
       $scope.task = 'I want to...';

        $scope.submitForm = function(name, friend, task){
            User.setSession(name, friend, task);
              console.log(User.primaryUser);
            $state.go('dash');
        }
    })


.controller('dashCtrl', function($scope, User){
        //get obj with task & names
        $scope.User = User;
        console.log(User);
        User.setSession(User.primaryUser, User.friendUser, User.task);

        console.log(User.primaryUserArray);

        $scope.completeTask = function(){
            User.completeTask();
            console.log(User.primaryUserArray.length)

            if (User.primaryUserArray.length >= 10){
             alert(User.primaryUser + ' won!');
            }
        }

    });