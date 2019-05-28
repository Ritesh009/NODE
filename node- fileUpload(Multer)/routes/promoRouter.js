const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res,  next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); //It will continue look for other functionalities for the endpoint '/promotions'
})
.get((req, res, next) =>{
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) =>{
    res.end('Will add the promotion: ' + req.body.name + '/n' +
    ' with details: ' + req.body.description);
})
.put((req, res, next) =>{
    res.statusCode = 403; //403 operation not supported
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) =>{
    res.end('Deleting all the promotions!');
});


promoRouter.route('/:promoId')
.get((req, res, next) =>{
    res.end('Will send details of the promotion: ' + req.params.promoId + ' to you!');
})
.post((req, res, next) =>{
    res.statusCode = 403; //403 operation not supported
    res.end('POST operation not supported on /promotion/ ' + req.params.promoId);
})
.put((req, res, next) =>{
    res.write('Updating the promotion: ' + req.params.promoId);
    res.end(' Will update the promotion: ' + req.body.name + '\n' +
    ' with details: ' + req.body.description);
})
.delete((req, res, next) =>{
    res.end('Deleting the promotion: ' + req.params.promoId);
});

module.exports = promoRouter;