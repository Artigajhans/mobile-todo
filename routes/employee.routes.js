const { readEmployeeTodo, completeEmployeeTodo, readCompleteEmployeeTodo } = require("../contorllers/employee.controller")

const router = require("express").Router()
router
    .get("/read/todos", readEmployeeTodo)
    .get("/complete/todos", readCompleteEmployeeTodo)
    .put("/update/todo/:tid", completeEmployeeTodo)
module.exports = router