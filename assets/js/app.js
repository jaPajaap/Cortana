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
  angular.module('cortana', ['mgcrea.ngStrap', 'ui.bootstrap', 'eyas'])
    .controller('MainController', function($scope) {
    })
    .directive('ctCodeBlock', function() {
        return {
            restrict: 'EA',
            scope: true,
            link: function(scope, el, attr) {
                var $code = el.find('.codeBlock:first');
                var $showCode = el.find('.showCode:first');
                $code.addClass('ng-hide');
                $showCode.on('click', function() {
                    $code.toggleClass('ng-hide');
                });
            }
        };
    });

})();
