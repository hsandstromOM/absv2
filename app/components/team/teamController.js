angular
  .module('absApp')
  .controller('TeamController', TeamController);

  function TeamController(TeamService, MainService) {
    var vm = this;

    MainService
      .setCurrentState('TEAM');

    MainService
      .getPageContent('teamPage')
      .then(

        // Success handler
        function(mainContent){
          console.log(mainContent);
          MainService.setPageTitle(mainContent.pageTitle);
        },

        // Error handler
        function(response){
          console.log('Oops, error ' + response.status);
        }
      );

    TeamService
      .getTeamMembers()
      .then(

        // Success handler
        function(teamMembers){
          //vm.featuredTeamMember = {};
          vm.teamMembers = [];

          teamMembers.forEach(function(teamMember) {
            if (teamMember.fields.featured) {
              vm.featuredTeamMember = teamMember;
            } else {
              vm.teamMembers.push(teamMember);
            }
          });
        },

        // Error handler
        function(response){
          console.log('Oops, error ' + response.status);
        }
      );
  }
