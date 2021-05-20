var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const { ObjectID } = require('bson');

var app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var htmladdress = "../COVIDRally.html";

var mongoCredential = "mongodb+srv://arqui:qwerasdf@clustertest.o43i9.mongodb.net/GameDB"; //Hay que cambiarlo
mongoose.Promise = global.Promise;
mongoose.connect(mongoCredential,{useUnifiedTopology : true, useNewUrlParser : true}); 
var questionSchema = new mongoose.Schema({
    ques: String
    // question: String,
    // answers: {
    //     a: String,
    //     b: String,
    //     c: String
    // }
},{collection: 'Questions'});

var clientAnswers = new mongoose.Schema({
    userId: String, 
    Score: String
});

var Question = mongoose.model("Question", questionSchema);

app.get('/',function(req,res){
    Question.find(function(err,qustion){
        res.send(qustion);
    });
    // res.send(query.select('answerOptions'));
    //res.sendFile(htmladdress);
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