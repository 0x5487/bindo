var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/stores/:storeId/inventory', function(req, res, next) {


  setTimeout(function(){
      var inventories = [];

      if(req.query.page == "1"){

          for(var i=1; i < 16; i++){
              var inventory = {};
              inventory.Id = i;
              inventory.Name = "IPhone" + i.toString();
              inventory.Barcode = "1234567";
              inventory.Qty = 99;
              inventory.Cost = 100;
              inventory.Category = "Phone";
              inventory.Brand = "Apple";
              inventory.Discount = "";
              inventory.Tax = 1.99;
              inventory.Note = "it is a note";
              inventories.push(inventory);
          }

      }else{

          for(var i=16; i < 21; i++){
              var inventory = {};
              inventory.Id = i;
              inventory.Name = "IPhone" + i.toString();
              inventory.Barcode = "1234567";
              inventory.Qty = 99;
              inventory.Cost = 100;
              inventory.Category = "Phone";
              inventory.Brand = "Apple";
              inventory.Discount = "";
              inventory.Tax = 1.99;
              inventory.Note = "it is a note";
              inventories.push(inventory);
          }

      }

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(inventories));
  }, 1000);

});

module.exports = router;
