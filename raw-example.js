/**
 * Module dependencies
 */

var setupWaterline = require('./bootstrap');




/**
 * Do stuff.
 */

setupWaterline({
  adapters: {
    'sails-sqlite': require('./sails-sqlite.js')
  },
  collections: {
    user: {
      connection: 'tmp',
      attributes: {}
    }
  },
  connections: {
    tmp: {
      adapter: 'sails-sqlite'
    }
  }
}, function waterlineReady (err, ontology) {
  if (err) throw err;

  // Our collections (i.e. models):
  ontology.collections;

  // Our connections (i.e. databases):
  ontology.connections;

});

