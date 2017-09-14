export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider

    .state('add-contact', {
      parent: 'app',
      url: '/contact/add',
      component: 'addContact'
    })

    .state('contacts', {
      parent: 'app',
      url: '/contact',
      component: 'contacts'
    });
};
