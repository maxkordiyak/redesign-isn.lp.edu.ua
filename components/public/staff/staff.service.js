angular.module('public')
.service('staffService', ['$http', staffService]);

function staffService($http) {
  var service = {
    getAllPeople: function() {
      return $http.get('/components/public/staff/people.json', { cache: true}).then(function(resp) {
        return resp.data;
      });
    },

    getPerson: function(id) {
      function personMatchesParam(person) {
        return person.id === id;
      }

      return service.getAllPeople().then(function (people) {
        return people.find(personMatchesParam)
      });
    }
  }
  return service;
}
