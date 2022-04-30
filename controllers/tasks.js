const Task = require('../models/tasks');
const { options } = require('../routes/tasks');
const GetAllTasks = async (req,res)=>{
    try {
        const tasks =  await Task.find({});
        res.json({tasks})
    } catch (error) {
        res.json({'message':error})
    }
}
const CreateTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body);
        res.json({task})
    } catch (error) {
        res.json({'message':error})
    }
}
const GetTask = async (req,res)=>{
    try {
        const TaskID =req.params.id
        console.log(TaskID)
        const task = await Task.findOne({_id:TaskID})
        if(!task){
            return res.json({message:`Not exists wit id:${TaskID}`,name:`tarun`})
        }
        res.json({task})
    } catch (error) {
        res.json({'message':error})
    }
}
const UpdateTask = async (req,res)=>{
    try {
        const TaskID =req.params.id
        console.log(TaskID)
        const task = await Task.findOneAndUpdate({_id:TaskID},req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            return res.json({message:`Not exists wit id:${TaskID}`,name:`tarun`})
        }
        res.json({task})
    } catch (error) {
        res.json({'message':error})
    }
}
const DeleteTask =async (req,res)=>{
    try {
        const TaskID =req.params.id
        console.log(TaskID)
        const task = await Task.findOneAndDelete({_id:TaskID})
        if(!task){
            return res.json({message:`Not exists wit id:${TaskID}`,name:`tarun`})
        }
        res.json({task})
    } catch (error) {
        res.json({'message':error})
    }
}


module.exports = {GetAllTasks, CreateTask, GetTask, UpdateTask, DeleteTask};