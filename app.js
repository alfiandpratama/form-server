const express = require('express');
const knex = require('knex');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const register = require('./controllers/register');

// DB Setup
const db = knex({
  client: 'pg',
  connection: process.env.POSTGRES_URI,
});

const app = express();

// Middlewares
app.use(helmet()); // Secure Headers
app.use(cors());
app.use(morgan('combined')); // Logger
app.use(express.json());

// Route
app.post('/register', (req, res) => {
  register.handleRegister(req, res, db);
});

const port = process.env.PORT || 8888;
const server = app.listen(port);

module.exports = server;
