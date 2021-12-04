require('./models/Organisation');
const express = require('express');
const mongoose = require('mongoose');
const organisationRoutes = require('./routes/organisationRoutes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(organisationRoutes);

const mongoUri =
  'mongodb+srv://admin:w8A1min@charityapp.ku5h3.mongodb.net/charity?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  //useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo', err);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
