var express = require('express');
var app = express();
var request = require('request');
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('home');
})



app.get('/result',function(req,res){
    var ans = req.query.form;
    var url = 'http://www.omdbapi.com/?i=tt3896198&apikey=7c00a6fb&s=' + ans 
    request(url,function(error,response,body){
      var movies = JSON.parse(body);
      res.render('index',{data:movies});
    })
});

app.listen(3000,function(){
    console.log("Listening at port 3000");
});