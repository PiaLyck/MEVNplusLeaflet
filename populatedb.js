#! /usr/bin/env node

console.log('This script populates some test features to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

var Feature = require('./models/feature')
/* var Genre = require('./models/genre')
var BookInstance = require('./models/bookinstance')
 */

var mongoose = require('mongoose');
var mongoDB = 'mongodb://db_user:db_password_123@ds215739.mlab.com:15739/map_db';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var features = [];

function featureCreate(type, geometry, properties, updated) {
  featuredetail = {
    type: type,
    geometry: geometry,
    properties: properties,
    updated: updated
  }
  var feature = new Feature(featuredetail);

  feature.save(function (err) {
    console.log('New Feature: ' + feature);
    features.push(feature);
  });
}

function createFeatures() {
  featureCreate('Feature', {
    type: 'Point',
    coordinates: [616213.75, 6350625.64]
  }, {
    name: 'Sted 1'
  }, null);
  featureCreate('Feature', {
    type: 'Point',
    coordinates: [630094.72, 6353363.15]
  }, {
    name: 'Sted 2'
  }, null);
  featureCreate('Feature', {
    type: 'Point',
    coordinates: [620415.48, 6347837.02]
  }, {
    name: 'Sted 3'
  }, null);
  featureCreate('Feature', {
    type: 'Point',
    coordinates: [620695.54, 6347637.09]
  }, {
    name: 'Sted 4'
  }, Date.now());
  featureCreate('Feature', {
    type: 'Point',
    coordinates: [620907.71, 6347419.51]
  }, {
    name: 'Sted 5'
  }, Date.now());
  featureCreate('Feature', {
    type: 'Point',
    coordinates: [619185.59, 6348428.29]
  }, {
    name: 'Sted 6'
  }, null);
};

createFeatures();

// All done, disconnect from database
// mongoose.connection.close();
