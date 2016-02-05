/**
         * @ngdoc directive
         * @name app.Directive:verify
         * @restrict A
         * @description
         * this directive compares an input value against the value passed.
        **/
app.directive('verify', function() {
  return {
    restrict: 'A', // only activate on element attribute
    require: '?ngModel', // get a hold of NgModelController
    link: function(scope, elem, attrs, ngModel) {
      if(!ngModel) return; // do nothing if no ng-model

      // watch own value and re-validate on change
      scope.$watch(attrs.ngModel, function() {
        validate();
      });

      // observe the other value and re-validate on change
      attrs.$observe('verify', function (val) {
        validate();
      });

      var validate = function() {
        // values
        var val1 = ngModel.$viewValue;
        var val2 = attrs.verify;

        // set validity
        ngModel.$setValidity('verify', ! val1 || ! val2 || val1 === val2);
      };
    }
  }
});

/**
         * @ngdoc directive
         * @name app.Directive:passwordToggle
         * @restrict A
         * @description
         * this directive adds a checkbox to password input to unmask the password.
        **/
app.directive('passwordToggle',function($compile){
        return {
            restrict: 'A',
            scope:{},
            link: function(scope,elem,attrs){
                scope.tgl = function(){ elem.attr('type',(elem.attr('type')==='text'?'password':'text')); }
                var lnk = angular.element('<div class="input-group-addon"><input type="checkbox" id="showpass" data-ng-click="tgl()"/> <label for="showpass"><small>Show</small></label></div>');
                $compile(lnk)(scope);
                elem.wrap('<div class="input-group"/>').after(lnk);
            }
        }
    });