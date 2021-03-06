const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res,  next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); //It will continue look for other functionalities for the endpoint '/promotions'
})
.get((req, res, next) =>{
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) =>{
    res.end('Will add the leader: ' + req.body.name + '/n' +
    ' with details: ' + req.body.description);
})
.put((req, res, next) =>{
    res.statusCode = 403; //403 operation not supported
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) =>{
    res.end('Deleting all the leaders!');
});


leaderRouter.route('/:leaderId')
.get((req, res, next) =>{
    res.end('Will send details of the leader: ' + req.params.dishId + ' to you!');
})
.post((req, res, next) =>{
    res.statusCode = 403; //403 operation not supported
    res.end('POST operation not supported on /leaders/ ' + req.params.dishId);
})
.put((req, res, next) =>{
    res.write('Updating the leader: ' + req.params.dishId);
    res.end(' Will update the leader: ' + req.body.name + '\n' +
    ' with details: ' + req.body.description);
})
.delete((req, res, next) =>{
    res.end('Deleting the leader: ' + req.params.dishId);
});

module.exports = leaderRouter;