/*
 * Services that persists and retrieves TODOs from localStorage
*/
todomvc.factory('o', function () {
  var STORAGE_ID = 'todos-angularjs-perf';

  return {
    get: function () {
      return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    },

    put: function (todos) {
      localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
    }
  };
});
