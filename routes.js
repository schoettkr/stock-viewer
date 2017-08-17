const express = require('express');
const Router = express.Router();

// Controllers
const findStock = require('./controllers/findStock');
const createStock = require('./controllers/createStock');
const deleteStock = require('./controllers/deleteStock');

Router.get('/', findStock);
Router.post('/', createStock);
Router.delete('/', deleteStock);

module.exports = Router;
