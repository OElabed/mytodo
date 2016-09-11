(function () {
    'use strict';

    angular.module('common.services.todo', [])


        .factory('todoService', function ($http) {
            return {
                saveTodo: function (todo) {
                    
                },
                removeTodo : function(todoId){

                },
                updateTodo: function(todo){

                },
                getTodo : function(todoId){

                },
                getTodos : function(){
                    
                }
                
            };
        });

})();