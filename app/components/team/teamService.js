angular
  .module('absApp')
  .service('TeamService', TeamService);

  TeamService.$inject = ['$http', '$q'];

  function TeamService($http, $q) {
    const CONTENT_URL = 'https://cdn.contentful.com';
    const MEDIA_URL = 'https://images.contentful.com';
    const SPACE_ID = 'lxejsmju70ex';
    const API_KEY = '2ef82748feb6fd9e7d78f7103794d27612337c3499abc02d7f21c1fb4ee5c627';

    const GET_URL = CONTENT_URL + '/spaces/' + SPACE_ID + '/entries?access_token=' + API_KEY + '&content_type=';

    function getTeamMembers() {
      var defer = $q.defer();

      $http.get(GET_URL + 'teamMember&include=3').then(function(teamMembers) {
        defer.resolve(teamMembers.data.items);
      });

      return defer.promise;
    }

    return {
      getTeamMembers: getTeamMembers,
    };
  }
