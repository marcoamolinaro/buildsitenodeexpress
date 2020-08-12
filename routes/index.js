const express = require('express');

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = (params) => {
  router.get('/', (request, response) => {
    response.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/feedback', feedbackRoute(params));
  router.use('/speakers', speakersRoute(params));

  return router;
};
