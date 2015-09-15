angular.module('flossy.services', ['firebase'])



.factory('User', ['$firebaseArray', function($firebaseArray) {


        var o = {
            primaryUser: 'LeAnna',
            friendUser: 'Chris',
            task: 'Meditate',
            primaryUserArray: false,
            friendArray: false

        };

        o.setSession = function(name, friend, task){
            o.primaryUser = name;
            o.friendUser = friend;
            o.task = task;

            //add Users to firebase
            var PrimaryRef = new Firebase('http://flossy.firebaseio.com/chris');
            var friendRef = new Firebase('http://flossy.firebaseio.com/leanna');

            var array1 = $firebaseArray(PrimaryRef);
            var array2 = $firebaseArray(friendRef);
            //add array of thing
            o.primaryUserArray = array1;
            o.friendArray = array2;
        }

        o.completeTask = function(){
            o.primaryUserArray.$add({timeCompleted: Firebase.ServerValue.TIMESTAMP})
        }

        return o;
    }])

    //
    //.factory('TaskInfo', ['$firebaseArray', function($firebaseArray, User) {
    //
    //    var o = {
    //        primaryUserArray: false,
    //        friendArray: false
    //    };
    //
    //    o.setupFirebase = function(){
    //        var PrimaryRef = new Firebase('http://flossy.firebaseio.com/chris');
    //
    //
    //        var friendRef = new Firebase('http://flossy.firebaseio.com/leanna');
    //
    //        o.primaryUserArray = $firebaseArray(friendRef);
    //        o.friendArray = $firebaseArray(PrimaryRef);
    //        o.friendArray.$add({'p':'q'});
    //    }
    //
    //
    //    return o;
    //}])



