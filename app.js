var express = require('express');
var app = express();
var expressHandlebars = require('express-handlebars');
app.engine('.handlebars', expressHandlebars({
	extname: '.handlebars',
	helpers: {
		'resize': function(width, options) {
			return '//image.webservices.ft.com/v1/images/raw/' + encodeURIComponent(options.fn(this)) + '?width=' + width + '&source=docs&fit=scale-down';
		}
	},
	partialsDir: [
		'views/partials/',
		'bower_components/'
	]
}));
app.set('view engine', '.handlebars');

app.get('/', function(req, res, next) {
	res.render('main', {
		title: "FT",
		image: "https://avatars0.githubusercontent.com/u/3502508?v=3"
	});
});

app.listen(process.env.PORT);
