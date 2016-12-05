process.env.DEBUG = 'app';

var express        = require('express');
var sassMiddleware = require('node-sass-middleware')
var path           = require('path');
var logger         = require('morgan');
var debug          = require('debug')('app');
var bodyParser     = require('body-parser');
var through        = require('through2');
var enchilada      = require('enchilada');
var port           = process.env.PORT || 5000;
var routes         = require('./routes');
var format         = require('util').format;

var app = express();

var production = process.env.NODE_ENV === 'production';

app.use(logger('dev', {
  stream: through(function(chunk, enc, cb) {
    debug(chunk.toString().slice(0, chunk.length - 2));
    cb();
  })
}));

app.use(enchilada({
  src: path.join(__dirname, '/public/javascripts'),
  cache: production,
  compress: true
}));

app.use(sassMiddleware({
    src: path.join(__dirname, '/public/stylesheets'),
    dest: path.join(__dirname, '/public/stylesheets'),
    outputStyle: 'compressed',
    prefix:  '/stylesheets'
}));
app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/public',{maxage: 604800000}));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');

var router = express.Router();

router.get('/:category.json', function(req, res) {
  api.collection(req.params.category).find(function(err, pages) {
    if (err) return next(err);
    res.json(pages);
  });
});

router.get('/:category/:id.json', function(req, res) {
  api.collection(req.params.category).find({
    _id: req.params.id
  }, function(err, pages) {
    if (err) return next(err);
    res.json(pages[0]);
  });
});

app.use('/api', router);

app.get('/', routes.index);
app.get('/templates/:name', routes.templates);
app.get('*', routes.index);

app.listen(port, function() {
  debug('Server is listening on port %s', port);
});