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
        Email: "",
        Password: "",
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

 let addData = () => {
   db.loadDatabase({}, function () {
   points = db.getCollection('Points');
   if (document.getElementById("form_name").value == points.data[0].Name) {
     document.getElementById("name_repeating_message").innerHTML = "Please, enter other name";
     document.getElementById("name_repeating_message").setAttribute("style", "color: #F90A0A");
   } else {
     points.insert({
          Name: document.getElementById("form_name").value,
          Email: document.getElementById("form_email").value,
          Password: document.getElementById("form_email").value,
          MainPoints: 0,
          CapitalPoints: 0,
          FlagPoints: 0
        });
     db.saveDatabase();
   }
   });
 }

 let getData = () => {
   db.loadDatabase({}, function () {
   points = db.getCollection('Points');
   console.log(points.data[2].Name);
   console.log(points.data[1].Email);
   console.log(points.data[1].Password);
   db.saveDatabase();
   });
 }
