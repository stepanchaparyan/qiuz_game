 var info = [];
 var currentUser = [];
 var db = new loki('loki.db');

 db.loadDatabase({}, function() {
 info = db.addCollection('Info');
 info = db.getCollection('Info');
 currentUser = db.addCollection('currentUser');
 currentUser = db.getCollection('currentUser');
 //info.removeDataOnly()
 //currentUser.removeDataOnly()
 if (info.data.length === 0 || info.data.length === null) {
   console.log("info.data.length =  " + info.data.length);
   info.insert({
      Name: "User",
      Email: "Email",
      Password: "Password",
      MainPoints: 0,
      CapitalPoints: 0,
      FlagPoints: 0,
      disabledAsiaCapital1: "",
      disabledAsiaCapital2: "",
      disabledAfricaCapital1: "",
      disabledAfricaCapital2: "",
      disabledEuropeCapital1: "",
      disabledEuropeCapital2: "",
      disabledOceaniaCapital1: "",
      disabledOceaniaCapital2: "",
      disabledAmericasCapital1: "",
      disabledAmericasCapital2: "",
      disabledWorldCapital1: "",
      disabledWorldCapital2: "",
      page: ""
   });
   currentUser.insert({
      currentUserName: "user",
      currentUserNumber: 0
   });
   db.saveDatabase();
 }
 });

 let addPoints = () => {
   db.loadDatabase({}, function () {
   info = db.getCollection('Info');
   info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].CapitalPoints += score;
   db.saveDatabase();
   console.log("points " + info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].CapitalPoints);
   });
 }

 let resetPoints = () => {
   db.loadDatabase({}, function () {
   info = db.getCollection('Info');
   info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].CapitalPoints = 0;
   db.saveDatabase();
   });
 }

//signup//
 let addUser = () => {
   db.loadDatabase({}, function () {
   info = db.getCollection('Info');
   info.insert({
      Name: document.getElementById("form_name").value,
      Email: document.getElementById("form_email").value,
      Password: document.getElementById("form_password").value,
      MainPoints: 0,
      CapitalPoints: 0,
      FlagPoints: 0,
      disabledAsiaCapital1: "",
      disabledAsiaCapital2: "",
      disabledAfricaCapital1: "",
      disabledAfricaCapital2: "",
      disabledEuropeCapital1: "",
      disabledEuropeCapital2: "",
      disabledOceaniaCapital1: "",
      disabledOceaniaCapital2: "",
      disabledAmericasCapital1: "",
      disabledAmericasCapital2: "",
      disabledWorldCapital1: "",
      disabledWorldCapital2: "",
      page: ""
    });
  db.saveDatabase();
  })
  signupSweetAlert();
  };

  let findUserName = () => {
    userName = document.getElementById("form_login_name").value;
    for (var i = 0; i < info.data.length; i++) {
      if (userName == info.data[i].Name) {
        userNumber = i;
        break;
      }
    }
  }

//login//
 let loginCurrentUser = () => {
   findUserName();
   db.loadDatabase({}, function () {
   currentUser = db.getCollection('currentUser');
   currentUser.insert({
     currentUserName: userName,
     currentUserNumber: userNumber
    });
  db.saveDatabase();
  })
 }

let addDisabledCapital1 = (continent) => {
  db.loadDatabase({}, function () {
  info = db.getCollection('Info');
  var user = info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].Name;
  console.log("user is " + user);
  for (var i = 0; i < info.data.length; i++) {
    if (continent == "asia") {
      info.data[i].disabledAsiaCapital1 = "asia";
      info.update(info.data[i]);
    } else if (continent == "africa") {
      info.data[i].disabledAfricaCapital1 = "africa";
      info.update(info.data[i]);
    } else if (continent == "europe") {
      info.data[i].disabledEuropeCapital1 = "europe";
      info.update(info.data[i]);
    } else if (continent == "oceania") {
      info.data[i].disabledOceaniaCapital1 = "oceania";
      info.update(info.data[i]);
    } else if (continent == "world") {
      info.data[i].disabledWorldCapital1 = "world";
      info.update(info.data[i]);
    } else if (continent == "americas") {
      info.data[i].disabledAmericasCapital1 = "america";
      info.update(info.data[i]);
    }
  }
  db.saveDatabase();
  })
 }

 let addDisabledCapital2 = (continent) => {
  db.loadDatabase({}, function () {
  info = db.getCollection('Info');
  var user = info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].Name;
  console.log(user);
  if (continent == "asia") {
     info.insert({
       disabled: "asia",
       page: "capital2"
     });
  } else if (continent == "africa") {
     info.insert({
       disabled: "africa",
       page: "capital2"
     });
  } else if (continent == "europe") {
     info.insert({
      disabled: "europe",
      page: "capital2"
     });
  } else if (continent == "oceania") {
     info.insert({
       disabled: "oceania",
       page: "capital2"
     });
  } else if (continent == "world") {
     info.insert({
       disabled: "world",
       page: "capital2"
     });
  } else if (continent == "americas") {
     info.insert({
       disabled: "americas",
       page: "capital2"
     });
  }
  db.saveDatabase();
  })
 }

 let printUsers = () => {
   for (var i = 0; i < info.data.length; i++) {
     console.log(info.data[i].Name);
     console.log(info.data[i].Email);
     console.log(info.data[i].Password);
   }
   };

  printUsers();
