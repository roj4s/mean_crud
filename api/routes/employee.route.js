const express = require("express");
const employeeRoute = express.Router();
// Employee model

let Employee = require("../models/Employee");
// Add Employee
employeeRoute.route("/").post((req, res, next) => {
  Employee.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      console.error(err);
      next(err);
    });
});
// Get All Employees
employeeRoute.route("/").get((req, res, next) => {
  Employee.find({})
    .then((data) => res.json(data))
    .catch((err) => {
      console.error(err);
      next(err);
    });
});
// Get single employee
employeeRoute.route("/:id").get((req, res, next) => {
  Employee.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

// Update employee
employeeRoute.route("/:id").put((req, res, next) => {
  Employee.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

// Delete employee
employeeRoute.route("/:id").delete((req, res, next) => {
  Employee.findOneAndRemove(req.params.id)
    .then((data) => {
      res.status(200).json({
        msg: data,
      });
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});
module.exports = employeeRoute;
