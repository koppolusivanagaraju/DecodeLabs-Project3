const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());


// GET ALL STUDENTS

app.get("/students", (req, res) => {

    db.query("SELECT * FROM students", (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

});


// GET STUDENT BY ID

app.get("/students/:id", (req, res) => {

    const id = req.params.id;

    db.query(
        "SELECT * FROM students WHERE id=?",
        [id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(result);

        }
    );

});


// ADD STUDENT

app.post("/students", (req, res) => {

    const { name, age, course, email } = req.body;

    db.query(
        "INSERT INTO students(name, age, course, email) VALUES(?,?,?,?)",
        [name, age, course, email],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Student Added Successfully"
            });

        }
    );

});


// UPDATE STUDENT

app.put("/students/:id", (req, res) => {

    const id = req.params.id;

    const { name, age, course, email } = req.body;

    db.query(
        "UPDATE students SET name=?, age=?, course=?, email=? WHERE id=?",
        [name, age, course, email, id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Student Updated Successfully"
            });

        }
    );

});


// DELETE STUDENT

app.delete("/students/:id", (req, res) => {

    const id = req.params.id;

    db.query(
        "DELETE FROM students WHERE id=?",
        [id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Student Deleted Successfully"
            });

        }
    );

});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});