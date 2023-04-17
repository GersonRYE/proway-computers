var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req,res){
    res.render('../views/less.ejs');
});

app.get('/less', function(req,res){
    res.render('../views/less.ejs');
});

app.get('/historia', function(req,res){
    res.render('../views/historia');
});

app.get('/exercicio01', function(req,res){
    res.render('../views/exercicio');
});

app.listen(3001, function(){
    console.log('executando na porta 3001');
});