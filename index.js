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
app.get('*', (req, res) => {
  res.status(404).json({ message: 'Here we are all dressed up and with no where to go, want to try some place else?' });
});

// ROUTE HANDLER
function getFilmRecommendations(req, res) {
  // const ID = req.params.id;
  var id = req.params.id;

  //INVALID ID HANDLING
  if (isNaN(id)) {
    return res.status(422).json({ message: "Well that sucks! We got an invalid ID, please try a different one!" });
  }

  // if (someQueryParamThingHere()) {
  //   res.status(422).json({ message: "You're speaking Qbertense to us. Let's try that again..."})
  // }

  res.status(200).send(request('http://credentials-api.generalassemb.ly/4576f55f-c427-4cfc-a11c-5bfe914ca6c1', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the third-party-api.
    })
    // .json({ "recommendations" : 
    // [ { id: 7406,
    //     title: 'Agent Deathstroke Teacher',
    //     releaseDate: '2001-10-19',
    //     genre: 'Western',
    //     averageRating: 4.6,
    //     reviews: 5 },
    //   { id: 8298,
    //     title: 'Colossus Strike Police Officer',
    //     releaseDate: '2014-01-10',
    //     genre: 'Western',
    //     averageRating: 4.57,
    //     reviews: 7 },
    //   { id: 8451,
    //     title: 'Carnage Actor',
    //     releaseDate: '2006-02-15',
    //     genre: 'Western',
    //     averageRating: 4.33,
    //     reviews: 6 } ]});
  );

}

module.exports = app;
