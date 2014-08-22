/* ==========================================================
 * app.js
 * Angular app
 *
 * Author: Yann Gouffon, hello@yago.io
 *
 * Copyright 2014 Yann Gouffon
 * Licensed under MIT
 ========================================================== */

(function(){
  angular.module('cortana', ['mgcrea.ngStrap', 'ui.bootstrap'])
    .controller('MainController', function($scope) {
    })
    .directive('ctCodeBlock', function() {
        return {
            restrict: 'EA',
            scope: true,
            link: function(scope, el, attr) {
                var code = el.find('pre:first');
                code.addClass('ng-hide');
                el.on('click', function() {
                    code.toggleClass('ng-hide');
                });
            }
        };
    });

})();

/* ==========================================================
 * sidenav.js
 * Side nav init script
 *
 * Author: Yann Gouffon, hello@yago.io
 *
 * Copyright 2014 Yann Gouffon
 * Licensed under MIT
 ========================================================== */

(function($) {
  $(window).load(function() {
    var cortanaSlidebars = new $.slidebars();
    // $(window).load(function () {
    //   cortanaSlidebars.open('left');
    // });
    $('#open-left').on('click', function(event) {
      event.preventDefault();
      cortanaSlidebars.toggle('left');
    });

  });
}) (jQuery_no_conflict);
