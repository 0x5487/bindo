function displayInventoryDetailController($scope, $window, $routeParams) {
    if ($routeParams.storeId) {
        $scope.storeId = $routeParams.storeId;
    }
    if ($routeParams.inventoryId) {
        $scope.inventoryId = $routeParams.inventoryId;
        var inventory = new Inventory();
        inventory.Id = $scope.inventoryId;
        inventory.Name = "IPhone" + $scope.inventoryId;
        inventory.Barcode = "1234567";
        inventory.Qty = 99;
        inventory.Cost = 100;
        inventory.Category = "Phone";
        inventory.Brand = "Apple";
        inventory.Discount = "";
        inventory.Tax = 1.99;
        inventory.Note = "it is a note";
        $scope.inventory = inventory;
    }
}
function displayInventoryController($scope, $http, $routeParams) {
    if ($routeParams.storeId) {
        var storeId = $routeParams.storeId;
        var page = 1;
        if ($routeParams.page) {
            page = $routeParams.page;
        }
        $scope.storeId = storeId;
        $scope.page = page;
        var apiPath = "/api/v1/stores/" + storeId + "/inventory?page=" + page;
        $http({ method: 'GET', url: apiPath }).success(function (data, status, headers, config) {
            var inventories = data;
            $scope.inventories = inventories;
        });
    }
}
function displayInventoryColumnController($scope, $http, $routeParams) {
    if ($routeParams.storeId) {
        var storeId = $routeParams.storeId;
        var page = 1;
        var inventoryId = 1;
        if ($routeParams.page) {
            page = $routeParams.page;
            if (page == 2) {
                inventoryId = 16;
            }
        }
        if ($routeParams.inventoryId) {
            inventoryId = $routeParams.inventoryId;
        }
        $scope.storeId = storeId;
        $scope.page = page;
        $scope.inventoryId = inventoryId;
        var inventory = new Inventory();
        inventory.Id = $scope.inventoryId;
        inventory.Name = "IPhone" + $scope.inventoryId;
        inventory.Barcode = "1234567";
        inventory.Qty = 99;
        inventory.Cost = 100;
        inventory.Category = "Phone";
        inventory.Brand = "Apple";
        inventory.Discount = "";
        inventory.Tax = 1.99;
        inventory.Note = "it is a note";
        $scope.inventory = inventory;
        var apiPath = "/api/v1/stores/" + storeId + "/inventory?page=" + page;
        $http({ method: 'GET', url: apiPath }).success(function (data, status, headers, config) {
            var inventories = data;
            $scope.inventories = inventories;
        });
    }
}
//# sourceMappingURL=inventoryController.js.map