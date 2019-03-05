

// vPaneContent directive
angular.module('vAccordion.directives')
  .directive('vPaneContent', vPaneContentDirective);


function vPaneContentDirective () {
  return {
    restrict: 'E',
    require: '^vPane',
    transclude: true,
    scope: {},
    link: function (scope, iElement, iAttrs, ctrls, transclude) {

      transclude(function(transcludeEl) {
        iElement.append(transcludeEl);
      });

      iAttrs.$set('role', 'tabpanel');
      iAttrs.$set('aria-hidden', 'true');
    }
  };
}
