const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

require('./routes/carRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('client/build'));
  // Express will serve up index.html if it doesn't recognise the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
