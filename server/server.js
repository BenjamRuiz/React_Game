var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
const { ObjectID } = require('bson');
const { func } = require('prop-types');

var app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var mongoCredential = "mongodb+srv://arqui:qwerasdf@clustertest.o43i9.mongodb.net/GameDB"; 
mongoose.connect(mongoCredential,{useUnifiedTopology : true, useNewUrlParser : true}); 

var questionSchema = new mongoose.Schema({
    question: String
},{collection: 'Questions'});

var clientAnswers = new mongoose.Schema({
    userId: String, 
    points: String
},{collection: 'Users'});

var Question = mongoose.model("Question", questionSchema);

//Get function for requesting an array of questions 
app.get('/',function(req,res){
    var query = Question.find(function(err,qustion){
        res.send(qustion);
    });
});
//Post function for requesting the points of an user

app.post('/userPoints', (req,res)=>{ 
    var Points = mongoose.model("Points", clientAnswers);
    
    userId = req.body.userId;
    
    var query = Points.findOne({'uID' : userId}, 'uID points', function(err, data){
        res.send(data.points);
        //console.log(data);
    });
});

//Post function for updatong the points of a specific user
app.post('/updatePoints', (req,res)=>{
    let User = mongoose.model("User", clientAnswers);
    User.updateOne({ uID : req.body.userId}, {points : req.body.points}, function(err,userdoc){
        if(err){
            console.log(err);
            res.status(400).send("The points were not saved");
        }else{
            console.log("Updated user: ",userdoc);
            if( userdoc.nModified == 1){
                res.send("The points were updated succesfully");
            }else if(userdoc.nModified == 0 && userdoc.n == 1){
                res.send("The points were not saved. User already has that amount of points .")  
            }else{
                res.send("The points were not saved. The user does not exist.")
            }
        }
    });
});

app.listen(8800,function(){
    console.log('Waiting for requests on port 8800');    
});
