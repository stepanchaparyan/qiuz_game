 var info = [];
 var db = new loki('loki.db');

 db.loadDatabase({}, function() {
 info = db.addCollection('Info');
 info = db.getCollection('Info');
 //info.removeDataOnly()
 if (info.data.length === 0 || info.data.length === null) {
   console.log("info.data.length =  " + info.data.length);
   info.insert({
        Name: "User",
        Email: "Email",
        Password: "Password",
        MainPoints: 0,
        CapitalPoints: 0,
        FlagPoints: 0
      });
   db.saveDatabase();
 } else if (info.data[info.data.length-1].CapitalPoints > 5) {
   info.data[info.data.length-1].CapitalPoints = 0;
 db.saveDatabase();
 };
 });

 let addPoints = () => {
   db.loadDatabase({}, function () {
   info = db.getCollection('Info');
   console.log("uu " + info.data[info.data.length-1].CapitalPoints);
   info.data[info.data.length-1].CapitalPoints = info.data[info.data.length-1].CapitalPoints + score;
   db.saveDatabase();
   });
 }

 let addUser = () => {
   console.log("loki");
   db.loadDatabase({}, function () {
   info = db.getCollection('Info');

   info.insert({
      Name: document.getElementById("form_name").value,
      Email: document.getElementById("form_email").value,
      Password: document.getElementById("form_password").value,
      MainPoints: 0,
      CapitalPoints: 0,
      FlagPoints: 0
    });
  db.saveDatabase();
  })
  setTimeout(signupSweetAlert, 8000);
  setTimeout(function() {alert("alert"); }, 8000);
  signupSweetAlert();
  window.location.href = '/indexCapital1.html';
  };

 let printUsers = () => {
   for (var i = 0; i < info.data.length; i++) {
     console.log(info.data[i].Name);
     console.log(info.data[i].Email);
     console.log(info.data[i].Password);
   }
   };

  printUsers();
