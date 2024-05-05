const Mongoose = require('mongoose');

var SubtaskSchema = new Mongoose.Schema({
    username: {type:String,required:true},
    projecttitle: {type:String,required:true},
    projectdescription: {type:String},
    subtaskname:{type:String,required:true},
    subtaskdate:{type:Date,required:true},
})

var SubtaskModel = Mongoose.model("subtasks",SubtaskSchema)

module.exports = SubtaskModel