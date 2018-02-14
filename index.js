const sqlite = require('sqlite'),
      Sequelize = require('sequelize'),
      request = require('request'),
      express = require('express'),
      app = express();

const { PORT=3000, NODE_ENV='development', DB_PATH='./db/database.db' } = process.env;

// START SERVER
Promise.resolve()
  .then(() => app.listen(PORT, () => console.log(`App listening on port ${PORT}`)))
  .catch((err) => { if (NODE_ENV === 'development') console.error(err.stack); });

// ROUTES
app.get('/films/:id/recommendations', getFilmRecommendations);

// ROUTE HANDLER
function getFilmRecommendations(req, res) {
  // res.status(500).send('Not Implemented');
  res.status(200).send('Sanity Check');
}

$.ajax({
  method: 'GET',
  url: 'http://credentials-api.generalassemb.ly/4576f55f-c427-4cfc-a11c-5bfe914ca6c1',
  success: handleSuccess,
  error: handleError
});

function handleSuccess(json) {
  console.log('json successfully loaded');
}

function handleError(xhr, status, errorThrown) {
  console.log('ERR: json unsuccessfully loaded');
}

module.exports = app;
