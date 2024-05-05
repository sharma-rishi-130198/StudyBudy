//import OpenAI from "openai";
//const openai = new OpenAI();
const express = require('express');
const server = express();
var bodyparser = require('body-parser')
const port = 4200;
const cors = require('cors'); // Import the cors middleware
var dburl = 'mongodb://localhost:27017/BrickHack'
const OpenAIApi = require("openai"); 
const readlineSync = require("readline-sync"); 
require("dotenv").config();
 
const Mongoose = require('mongoose');
const SubtaskModel = require('./subtaskmodel');
let today = new Date().toISOString().split('T')[0];;

Mongoose.connect(dburl)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

server.use(cors());

server.use(bodyparser.json());

const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_SECRET_KEY
});

server.post('/querygpt', async(req, res) => {
    try{
    console.log('Body Received=',req.body)

    const completion = await openai.chat.completions.create({
        messages: [{ role: "user",
        content: "I need to learn driving in one week starting today.  Give me output as a json of all subtasks of form subtask: date and date should be of form yyyy-mm-dd. nothing else apart from that." }],
        model: "gpt-3.5-turbo-0125",
      });
      console.log(completion.choices[0]);
    
    }
    catch(error){
        console.error("Error while testing GPT:", error); // Log the actual error message
        res.status(500).json({ error: 'Internal Server Error' });
    }    
    return

});

server.post('/addproject', async(req, res) => {

    try{
        console.log('Body Received=',req.body)
        var text = `My Task is ${req.body.projecttitle}. Description is ${req.body.projectdescription}.  Give me output as a list of json for all subtasks of form {subtaskname, date} and date should be of form yyyy-mm-dd. Today's date is ${today}. nothing else apart from that.`
        console.log(text);

        const completion = await openai.chat.completions.create({
            messages: [{ role: "user",
            content: `My Task is ${req.body.projecttitle}. Description is ${req.body.projectdescription}.  Give me output as a list of json for all subtasks of form {subtaskname, date} and date should be of form yyyy-mm-dd. Today's date is ${today}. nothing else apart from that.` }],
            model: "gpt-4",
          });

          fetched_subtasks = completion.choices[0].message.content
          const parsedSubtasks = JSON.parse(fetched_subtasks);
          console.log(parsedSubtasks);
          const typeOfpasSubtasks = typeof parsedSubtasks;
          console.log(typeOfpasSubtasks);
          console.log(parsedSubtasks.length);

          for(var i=0;i<parsedSubtasks.length;i++){
            datatoinsert = {username:req.body.username,
                projecttitle: req.body.projecttitle,
                projectdescription: req.body.projectdescription,
                subtaskname: parsedSubtasks[i].subtaskname,
                subtaskdate: parsedSubtasks[i].date
            }
            console.log("inserted data", datatoinsert);

            var Subtaskdata = new SubtaskModel(datatoinsert) 

            Subtaskdata.save()
          }
          
          res.status(200).json({
            message: 'Subtasks saved and fetched',
            data: fetched_subtasks
            });
        
        }
        catch(error){
            console.error("Error while testing GPT:", error); // Log the actual error message
            res.status(500).json({ error: 'Internal Server Error' });
        }    
        return
    
    

});


// Defining a route for handling client communication
server.post('/saveproject', (req, res) => {

    console.log('Body Received=',req.body)
    
    var Subtaskdata = new SubtaskModel(req.body) 

    return Subtaskdata.save()
        .then(savedData => {
            console.log('result of add project db operation:', savedData);
            res.status(200).json({
                message: 'Project Added',
                data: savedData
            });
        })
        .catch(error => {
            console.error('Error saving project:', error);
            res.status(500).json({
                error: 'Internal Server Error'
            });
        });

});


server.post('/getforuser', (req, res) => {

    console.log('Body Received=',req.body)
    
    query = {username: req.body.username}

    var subtasks = []

    SubtaskModel.find(query)
        .then(savedData => {
            console.log('Found substask:', savedData);
            subtasks.push(...savedData);
            res.status(200).json({
                message: 'Found subtask from mongo',
                data: savedData
            });
        })
        .catch(error => {
            console.error('Error finding Substasks:', error);
            res.status(500).json({
                error: 'Internal Server Error'
            });
        });

});
 
// Starting the server
server.listen(port, function() {
    console.log('Server is listening on ', port);
});