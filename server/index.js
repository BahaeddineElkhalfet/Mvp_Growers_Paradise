const express = require("express");
//Importing the connection from the database
var db = require("./database-mysql");


// mongoose connection


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

// Get all classes
app.get("/alllab", (req, res) => {
  db.query("SELECT * FROM lab", (err, lab) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(lab);
    }
  });
});

// get the list of kids in the nursery
app.get("/allkids", (req, res) => {
  db.query("SELECT * FROM kids", (err, kids) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(kids);
    }
  });
});

// Add a now lab
app.post("/postlab", (req, res) => {
  console.log(req.body);
  let rq = req.body;
  const lab = `INSERT INTO lab (labname,labnumber,kids_idkid) values (?,?,?)`;
  db.query(lab, [rq.labname, rq.labnumber, rq.kids_idkid], (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log("One lab posted");
      res.status(200).send(data);
    }
  });
});

// Add a new child to a lab
app.post("/postkids", (req, res) => {
  console.log(req.body);
  let rq = req.body;
  const kid = `INSERT INTO kids (kidfullname,kidsage,kiddescription,idlab) values (?,?,?,?)`;
  db.query(
    kid,
    [rq.kidfullname, rq.kidsage, rq.kiddescription, rq.idlab],
    (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log("One Kid posted");
        res.status(201).send(data);
      }
    }
  );
});

// Update the register of the child
app.put("/kid/:id", (req, res) => {
  console.log(req.body);
  let data = {
    kidfullname: req.body.kidfullname,
    kidsage: req.body.kidsage,
    kiddescription: req.body.kiddescription,
  };
  let id = req.params.id;
  const query = `UPDATE kids SET ? WHERE idkid=?`;
  db.query(query, [data, id], (err, result, fields) => {
    console.log("result", result);
    console.log("err", err);
    if (err) console.log(err);
    else res.send(result);
  });
});

//update the register of lab
app.put("/lab/:id", (req, res) => {
  let data = {
    labname: req.body.labname,
    labnumber: req.body.labnumber,
  };
  let id = req.params.id;
  const query = `UPDATE lab SET ? WHERE idlab=?`;
  db.query(query, [data, id], (err, result, fields) => {
    console.log("result", result);
    console.log("err", err);
    if (err) console.log(err);
    else res.send(result);
  });
});

// Delete a child from a lab
app.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  const del = `DELETE FROM kids Where idkid = ${id}`;
  db.query(del, (err, result) => {
    if (err) console.log(err);
    else res.send("deleted successfully");
  });
});

// Delete a child from a lab
app.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  const del = `DELETE FROM kids Where idkid = ${id}`;
  db.query(del, (err, result) => {
    if (err) console.log(err);
    else res.send("deleted successfully");
  });
});

// delete from lab db
app.delete("/deletelab/:id", (req, res) => {
  let id = req.params.id;
  const del = `DELETE FROM lab Where idlab = ${id}`;
  db.query(del, (err, result) => {
    if (err) console.log(err);
    else res.send("deleted successfully");
  });
});




app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
