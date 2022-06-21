const todomodel = require('../Models/Todomodel');

module.exports.getTodo = async(req,res)=>{
    const todo = await todomodel.find();
    res.send(todo);
}

module.exports.saveTodo = async(req,res)=>{
    const {text} = req.body;
    todomodel.create({text}).then(()=>res.set(201).send("added succesfully"))
    .catch((err)=>console.log(err))
}

module.exports.deletetodo = async(req,res)=>{
    const {_id} = req.body;
    todomodel.findByIdAndDelete(_id).then(()=>res.set(201).send("Deleted succesfully"))
    .catch((err)=>console.log(err))
}

module.exports.updatetodo = async(req,res)=>{
    const {_id,text} = req.body;
    todomodel.findByIdAndUpdate(_id,{text}).then(()=>res.set(201).send("Updated succesfully"))
    .catch((err)=>console.log(err))
}