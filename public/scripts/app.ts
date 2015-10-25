/// <reference path="../../typings/angularjs/angular.d.ts" />


var bindoApp = angular.module('bindoApp', ['ngRoute', 'angular-loading-bar']);


bindoApp.config(['$routeProvider','$locationProvider', 'cfpLoadingBarProvider', function($routeProvider, $locationProvider, cfpLoadingBarProvider) {

        cfpLoadingBarProvider.includeBar = true;
        cfpLoadingBarProvider.includeSpinner = false;

        $routeProvider.
            when('/:storeId/inventory/detail/:inventoryId', {
                templateUrl: '/views/inventory_detail.html',
                controller: 'displayInventoryDetailController'
            }).
            when('/:storeId/inventory/list/:page', {
                templateUrl: '/views/inventory_list.html',
                controller: 'displayInventoryController'
            }).
            when('/:storeId/inventory/list', {
                templateUrl: '/views/inventory_list.html',
                controller: 'displayInventoryController'
            }).
            when('/:storeId/inventory/column/:page/detail/:inventoryId', {
                templateUrl: '/views/inventory_column.html',
                controller: 'displayInventoryColumnController'
            }).
            when('/:storeId/inventory/column/:page', {
                templateUrl: '/views/inventory_column.html',
                controller: 'displayInventoryColumnController'
            }).
            when('/:storeId/inventory/column', {
                templateUrl: '/views/inventory_column.html',
                controller: 'displayInventoryColumnController'
            }).
            when('/:storeId/inventory/:inventoryId', {
                templateUrl: '/views/inventory_detail.html',
                controller: 'displayInventoryDetailController'
            }).
            when('/:storeId/inventory', {
                templateUrl: '/views/inventory_list.html',
                controller: 'displayInventoryController'
            }).
            when('/:storeId/sales/detail/:inventoryId', {
                templateUrl: '/views/sales_detail.html',
                controller: 'displayInventoryDetailController'
            }).
            when('/:storeId/sales/list/:page', {
                templateUrl: '/views/sales_list.html',
                controller: 'displayInventoryController'
            }).
            when('/:storeId/sales/list', {
                templateUrl: '/views/sales_list.html',
                controller: 'displayInventoryController'
            }).
            when('/:storeId/sales/column/:page/detail/:inventoryId', {
                templateUrl: '/views/sales_column.html',
                controller: 'displayInventoryColumnController'
            }).
            when('/:storeId/sales/column/:page', {
                templateUrl: '/views/sales_column.html',
                controller: 'displayInventoryColumnController'
            }).
            when('/:storeId/sales/column', {
                templateUrl: '/views/sales_column.html',
                controller: 'displayInventoryColumnController'
            }).
            when('/:storeId/sales/:inventoryId', {
                templateUrl: '/views/sales_detail.html',
                controller: 'displayInventoryDetailController'
            }).
            when('/:storeId/sales', {
                templateUrl: '/views/sales_list.html',
                controller: 'displayInventoryController'
            }).
            otherwise({
                templateUrl: '/views/inventory_list.html',
                controller: 'displayInventoryController'
            });

        $locationProvider.html5Mode(true);
    }]
);


