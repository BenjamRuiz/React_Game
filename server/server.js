var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const { ObjectID } = require('bson');
const { func } = require('prop-types');

var app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var htmladdress = "../COVIDRally.html";

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

app.get('/',function(req,res){
    var query = Question.find(function(err,qustion){
        res.send(qustion[0].question);
    });
    // res.send(query.select('answerOptions'));
    //res.sendFile(htmladdress);
});

var Points = mongoose.model("Points", clientAnswers);

app.post('/userPoints', (req,res)=>{ 
    userId = req.body.user;
    var query = Points.find({'uID' : userId}, 'uID points', function(err, data){
        res.send(data[0].points);
    });
    // var points = new Points(req.body);
    // points.save()
    // return res.send();
});

// var User = mongoose.model("User",clientAnswers);

// app.post('/sendAnswers',(req,res)=>{
//     var myData = new User(req.body);
//     myData.save()
//         .then(item => {
//         res.send("Los datos se han enviado exitosamente");

        
//     })
//     .catch(err => {
//       res.status(400).send("Los datos no se han guardado correctamente");
//     });
// });

app.listen(8800,function(){
    console.log('Esperando respuestas en el puerto 8800');    
});
