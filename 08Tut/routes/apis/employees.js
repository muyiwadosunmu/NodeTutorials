const express = require("exprress");
const router = express.Router();
const path = require();
const data = {};
data.employees = require('../../data/employees.json');

router.route('/')
    .get((req, res) => {
        res.json(data.employees);
    })
    .post((req,res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname":req.body,lastname
        });
    })
    .put((req,res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname":req.body.lastname
        });
    })
    .delete((req,res) => {
        res.json({"id":req.body.id})
    });

module.exports = router;