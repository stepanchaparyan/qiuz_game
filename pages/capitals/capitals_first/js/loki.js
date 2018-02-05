 var points = [];
 var db = new loki('loki.db');

 db.loadDatabase({}, function() {
 points = db.getCollection('Points');
 if (points.data.length === 0) {
   points.insert({
        MainPoints: 0,
        CapitalPoints: 0,
        FlagPoints: 0
      });
   db.saveDatabase();
 } else {
   //points.removeDataOnly();
   db.saveDatabase();
  };
  });


 var addPoints = function() {
 var coll = db.getCollection('Points');
 if (coll === null) {
   points = db.addCollection('Points');
   points.insert({
     MainPoints: 0,
     CapitalPoints: 0,
     FlagPoints: 0
   });
   db.saveDatabase();
 } else {
 db.loadDatabase({}, function () {
 points = db.getCollection('Points');
 var tempScore = 0;
 tempScore = points.data[0].CapitalPoints;
 var tempScore2 = tempScore + score;
 points.data[0].CapitalPoints = tempScore2;
 db.saveDatabase();
 });
 }
 }
