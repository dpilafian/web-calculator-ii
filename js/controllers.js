// Dashboard II

var calculatorApp = angular.module('calculatorApp', ['ngSanitize']);
calculatorApp.controller('CalculatorCtrl', calculatorCtrl);
function calculatorCtrl($scope) {
   var math = {
      add:      function(accumulator, value) { return accumulator + value; },
      subtract: function(accumulator, value) { return accumulator - value; },
      multiply: function(accumulator, value) { return accumulator * value; },
      sqrt:     function(accumulator, value) { return Math.sqrt(accumulator); },
      clear:    function(accumulator, value) { return 0; }
      };
   function doMath(operator, accumulator, value) {
      $scope.accumulator = math[operator](accumulator, value);
      console.log('Calculator:', operator, accumulator, value, '-->', $scope.accumulator);
      }
   $scope.altTheme = false;
   $scope.buttons = [
      { name: 'add',      display: '+' },
      { name: 'subtract', display: '-' },
      { name: 'multiply', display: '&times;' },
      { name: 'sqrt',     display: '&radic;' },
      { name: 'clear',    display: 'Clear' }
      ];
   $scope.value = 0;
   $scope.accumulator = 0;
   $scope.compute = doMath;
   }
