/// <reference path="../typings/angularjs/angular.d.ts" />

angular.module("solitaire", ["klondike", "ngDraggable"]);
angular.element(document).ready(() => {
          angular.bootstrap(document, ["solitaire"]);
        });