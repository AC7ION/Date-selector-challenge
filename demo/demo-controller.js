/*globals angular, moment, $, console*/

angular.module('demo.demoController', [])
  .controller('demoController', [
    '$scope',
    function ($scope) {
      'use strict';
      $scope.controllerName = 'demoController';

      moment.locale('en');

      $scope.data = {

      };

      $scope.checkboxOnTimeSet = function () {
        $scope.data.checked = false;
      };

      $scope.inputOnTimeSet = function (newDate) {
        console.log(newDate);
        $('#dropdown1').dropdown('toggle');
      };

      $scope.getLocale = function () {
        return moment.locale();
      };

      $scope.setLocale = function (newLocale) {
        moment.locale(newLocale);
      };


      $scope.guardianOnSetTime = function ($index, guardian, newDate, oldDate) {
        console.log($index);
        console.log(guardian.name);
        console.log(newDate);
        console.log(oldDate);
        angular.element('#guardian' + $index).dropdown('toggle');
      };

      $scope.beforeRender = function ($dates) {
        var index = Math.floor(Math.random() * $dates.length);
        console.log(index);
        $dates[index].selectable = false;
      };

      $scope.config = {
        datetimePicker: {
          startView: 'year'
        }
      };

      $scope.configFunction = function configFunction() {
        return {startView: 'month'};
      };
    }
  ]);
