'use strict';

describe('Controller: DeveshCtrl', function () {

  // load the controller's module
  beforeEach(module('skeletonApp'));

  var DeveshCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeveshCtrl = $controller('DeveshCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DeveshCtrl.awesomeThings.length).toBe(3);
  });
});
