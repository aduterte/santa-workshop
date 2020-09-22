// const express = require('express');
// const routes = require('./routes');
// const bodyParser = require('body-parser')
// // const passport = require('passport')
// // const LocalStrategy = require('passport-local').Strategy;
// const cors = require('cors')

// const PORT = process.env.PORT || 3000;
// const app = express();

// app.use(cors()) // use cors

// // --------------------------- experimental ---------------------------
// // app.use(passport.initialize())
// // app.use(passport.session());
// // app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));
// // --------------------------- experimental ---------------------------

// app.use(bodyParser.json())
// app.use('/', routes);


// app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
// const passport = require('passport')
const cors = require('cors')
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors()) // use cors
// parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(passport.initialize());

// add a basic route
app.get('/', function(req, res) {
  res.json({ message: 'Express is up!' });
});
app.use('/', routes);

// start the app
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))