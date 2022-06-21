const {Router} = require('express')

const router = Router();

const {getTodo,saveTodo,deletetodo,updatetodo} = require("../Controllers/Todocontrol");



router.get("/get-todo",getTodo);

router.post("/save-todo",saveTodo);

router.post("/delete-todo",deletetodo);

router.post("/update-todo",updatetodo);

module.exports=router;


