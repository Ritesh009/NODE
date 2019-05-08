const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);

app.get('/dishes/:dishId', (req, res, next) =>{
    res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
});

app.post('/dishes/:dishId', (req, res, next) =>{
    res.statusCode = 403; //403 operation not supported
    res.end('POST operation not supported on /dishes/ ' + req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) =>{
    res.write('Updating the dish: ' + req.params.dishId);
    res.end(' Will update the dish: ' + req.body.name + '\n' +
    ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) =>{
    res.end('Deleting all the dish: ' + req.params.dishId);
});

//Enables us to serve static pages 
app.use(express.static(__dirname + '/public'));

//next() is used when you need to invoke a middleware
app.use((req,  res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is Express Server!</h1></body></html>')
});

const server = http.createServer(app);

server.listen(port, hostname, () =>{
    console.log(`Server running at ${hostname}: ${port}!`);
});
