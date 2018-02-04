var products = [];
 var db = new loki('loki.db');

 db.loadDatabase({}, function() {
 products = db.addCollection('ProductsDatabase');
 products.insert({
       Name: "Product_Example",
       Cost: 100,
     });
 db.saveDatabase();
 });

 var test = function() {
 var coll = db.getCollection('ProductsDatabase');
 if (coll === null) {
   products = db.addCollection('ProductsDatabase');
   products.insert({
     Name: "Product_Example",
     Cost: 200,
   });
   db.saveDatabase();
 } else {
 db.loadDatabase({}, function () {
 products = db.getCollection('ProductsDatabase');
 products.insert({
   Name: "Product_Example",
   Cost: 300,
 });
 db.saveDatabase();
 });
 }
 }

 test();

 console.log("loki " + products.data[0].Cost);
 console.log("loki " + products.data[1].Cost);
