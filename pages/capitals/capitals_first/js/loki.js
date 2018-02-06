 var points = [];
 var db = new loki('loki.db');

 db.loadDatabase({}, function() {
 points = db.addCollection('Points');
 points = db.getCollection('Points');
 //points.removeDataOnly()
 if (points.data.length === 0 || points.data.length === null) {
   console.log("points.data.length =  " + points.data.length);
   points.insert({
        Name: "",
        Surname: "",
        MainPoints: 0,
        CapitalPoints: 0,
        FlagPoints: 0
      });
   db.saveDatabase();
 } else if (points.data[0].CapitalPoints > 5) {
   points.data[0].CapitalPoints = 0;
 db.saveDatabase();
 };
 });

 let addPoints = () => {
 db.loadDatabase({}, function () {
 points = db.getCollection('Points');
 points.data[0].CapitalPoints = points.data[0].CapitalPoints + score;
 db.saveDatabase();
 });
 }
