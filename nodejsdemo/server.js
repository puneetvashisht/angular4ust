var express = require('express')
var app = express();
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.end('Hello world!!')
})

var courses = [
    {title: 'Angular', summary:'framework from google!!'},
    {title: 'React', summary:'library from facebook!!'}
]

app.get('/courses', function(req, res){
    res.json(courses);
})

app.post('/courses', function(req, res){
    var newcourse = req.body
    // var newcourse = {title:'Ember', summary:'Another JS framework'}
    courses.push(newcourse);
    res.json(courses);
})

app.listen(3000, function(){
    console.log('server running on port 3000...')
});
