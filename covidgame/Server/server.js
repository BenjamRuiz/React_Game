var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var htmladdress = "../App.js";

var mongoCredential = "mongodb+srv://arqui:asdf@clustertest.o43i9.mongodb.net/test"; //Hay que cambiarlo
mongoose.Promise = global.Promise;
mongoose.connect(mongoCredential);

var questionSchema = new mongoose.Schema({
    question: "Como me llamo?",
    answers: {
        a: "Helium",
        b: "Magnesium",
        c: "Mercury"
    }
});

var clientAnswers = new mongoose.Schema({
    userId: String, 
    Score: String
});

app.get('/',function(req,res){
    res.sendFile(htmladdress);
});

var User = mongoose.model("User",clientAnswers);


app.post('/sendAnswers',(req,res)=>{
    var myData = new User(req.body);
    myData.save()
        .then(item => {
        res.send("Los datos se han enviado exitosamente");

        
    })
    .catch(err => {
      res.status(400).send("Los datos no se han guardado correctamente");
    });
});

app.listen(8800,function(){
    console.log('Esperando respuestas en el puerto 8800');    
});