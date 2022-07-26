const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController');


//If we want the verifyJWT to be accessed by a route we need to pass it as part of the arguments in the route, example below
router.route('/')
    .get(employeesController.getAllEmployees)
    .post(employeesController.createNewEmployee)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee);

router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router;