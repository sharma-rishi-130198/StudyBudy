const Mongoose = require('mongoose');

var MicrotaskSchema = new Mongoose.Schema({
    username: {type:String,required:true},
    projecttitle: {type:String,required:true},
    subtaskname:{type:String,required:true},
    microtsaskname:{type:String,required:true},
    microtaskdate:{type:Date,required:true},
})

var MicrotaskModel = Mongoose.model("microtasks",MicrotaskSchema)

module.exports = MicrotaskModel