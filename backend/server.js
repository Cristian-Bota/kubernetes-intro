const express = require('express');
const logger = require('winston');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send(`Hello, I'm alive`);
	logger.info('Responded to GET request on /')
});

app.get('/api/me', (request, response) => {
	response.send('{"name": "Cristian", "location": "London"}');
	logger.info('Responded to GET request on /api/me')
});

app.get('/api/work', (request, response) => {
	response.send('[{"yearFrom": "2015", "yearTo": "2019", "place": "Morgan Stanley", "comment": "Was doing stuff"}, {"yearFrom": "2014", "yearTo": "2015", "place": "The coffee shop", "comment": "Making coffee"}]');
	logger.info('Responded to GET request on /api/work')
});

app.get('/api/education', (request, response) => {
	response.send('[{"yearFrom": "2012", "yearTo": "2015", "place": "University of Manchester", "comment": "Studying"}, {"yearFrom": "2011", "yearTo": "2012", "place": "Barista academy", "comment": "Made coffee"}]');
	logger.info('Responded to GET request on /api/edu')
});

app.listen(port, (err) => {
  if (err) {
    return logger.error('something bad happened', err)
  }

  logger.info(`server is listening on ${port}`)
});
