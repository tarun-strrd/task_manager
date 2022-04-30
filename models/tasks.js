const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength : [20,'len must be less tan 20 carecters']
    },
    completed:{
        type:Boolean,
        default: false
    }
});

module.exports = mongoose.model('task',taskSchema);