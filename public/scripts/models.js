var Inventory = (function () {
    function Inventory() {
    }
    Object.defineProperty(Inventory.prototype, "Id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Inventory.prototype, "Name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Inventory.prototype, "Barcode", {
        get: function () {
            return this._barcode;
        },
        set: function (value) {
            this._barcode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Inventory.prototype, "Qty", {
        get: function () {
            return this._qty;
        },
        set: function (value) {
            this._qty = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Inventory.prototype, "Cost", {
        get: function () {
            return this._cost;
        },
        set: function (value) {
            this._cost = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Inventory.prototype, "Price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Inventory.prototype, "Tax", {
        get: function () {
            return this._tax;
        },
        set: function (value) {
            this._tax = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Inventory.prototype, "Category", {
        get: function () {
            return this._category;
        },
        set: function (value) {
            this._category = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Inventory.prototype, "Brand", {
        get: function () {
            return this._brand;
        },
        set: function (value) {
            this._brand = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Inventory.prototype, "Discount", {
        get: function () {
            return this._discount;
        },
        set: function (value) {
            this._discount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Inventory.prototype, "Note", {
        get: function () {
            return this._note;
        },
        set: function (value) {
            this._note = value;
        },
        enumerable: true,
        configurable: true
    });
    return Inventory;
})();
//# sourceMappingURL=models.js.map