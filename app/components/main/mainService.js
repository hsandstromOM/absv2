angular
  .module('absApp')
  .service('MainService', MainService);

  MainService.$inject = ['$http', '$q', '$resource'];

  function MainService($http, $q, $resource) {
    var pageTitle = 'Applied Building Services';

    var currentState = 'HOME';

    // CONTENTFUL
    const CONTENT_URL = 'https://cdn.contentful.com';
    const MEDIA_URL = 'https://images.contentful.com';
    const SPACE_ID = 'lxejsmju70ex';
    const API_KEY = '2ef82748feb6fd9e7d78f7103794d27612337c3499abc02d7f21c1fb4ee5c627';

    const GET_URL = CONTENT_URL + '/spaces/' + SPACE_ID + '/entries?access_token=' + API_KEY + '&content_type=';

    // MAILCHIMP
    const MAILCHIMP_KEY = '1029176b8a172367513eab75bfd1d6b0-us2';

    function getPageTitle() {
      return pageTitle;
    }

    function setPageTitle(newTitle) {
      pageTitle = newTitle;
    }

    function getCurrentState() {
      return currentState;
    }

    function setCurrentState(newState) {
      currentState = newState;
    }

    function getPageContent(page) {
      var defer = $q.defer();

      $http.get(GET_URL + page).then(function(pageContent) {
        defer.resolve(pageContent.data.items[0].fields);
      });

      return defer.promise;
    }

    /**
    * angular-mailchimp
    * http://github.com/keithio/angular-mailchimp
    * License: MIT
    */
    function mailchimpResource(mailchimp) {
      var actions,
          MailChimpSubscription,
          params = {},
          url;


      mailchimp.username = "appliedbuildingservices";
      mailchimp.dc = "us2";
      mailchimp.u = "91fe70fad31765c3ac6ebfa04";
      mailchimp.id = "762b7f2fea";

      window.mc = mailchimp;
      console.log("MAILCHIMP: " + mailchimp);
      // Create a resource for interacting with the MailChimp API
      url = '//' + mailchimp.username + '.' + mailchimp.dc +
            '.list-manage.com/subscribe/post-json';

      var fields = Object.keys(mailchimp);

      for(var i = 0; i < fields.length; i++) {
        params[fields[i]] = mailchimp[fields[i]];
      }

      params.c = 'JSON_CALLBACK';

      actions = {
        'save': {
          method: 'jsonp'
        }
      };
      return $resource(url, params, actions);
    }

    return {
      getPageTitle: getPageTitle,
      setPageTitle: setPageTitle,
      getCurrentState: getCurrentState,
      setCurrentState: setCurrentState,
      getPageContent: getPageContent,
      mailchimpResource: mailchimpResource
   };
  }
