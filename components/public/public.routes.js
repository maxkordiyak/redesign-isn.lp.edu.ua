angular.module('public')
.config(routeConfig);
routeConfig.$inject = ['$stateProvider'];

function routeConfig($stateProvider) {
  var states = [
    {
      name: 'public',
      absract: true,
      templateUrl: 'components/public/public.html'
    },
    {
      name: 'public.home',
      url: '/',
      templateUrl: 'components/public/home/home.html'
    },
    {
      name: 'public.about',
      url: '/about',
      templateUrl: 'components/public/about/about.html'
    },
    {
      name: 'public.contacts',
      url: '/contacts',
      templateUrl: 'components/public/contacts/contacts.html'
    },
    {
      name: 'public.news',
      url: '/news',
      templateUrl: 'components/public/news/news.html'
    },
    {
      name: 'public.publications',
      url: '/publications',
      templateUrl: 'components/public/publications/publications.html'
    },
    {
      name: 'public.projects',
      url: '/projects',
      templateUrl: 'components/public/projects/projects.html'
    },
    {
      name: 'public.staff',
      url: '/staff',
      component: 'people',
      resolve: {
        people: function(staffService) {
          return staffService.getAllPeople();
        }
      }
    },
    {
      name: 'person',
      url: '/staff/{personId}',
      component: 'person',
      resolve: {
        person: function(staffService, $transition$) {
          return staffService.getPerson($transition$.params().personId);
        }
      }
    }
  ]

  states.forEach(function(state) {
    $stateProvider.state(state);
  });
};
