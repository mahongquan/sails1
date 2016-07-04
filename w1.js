var Waterline = require('waterline');
//var sailsMemoryAdapter = require('./sails-sqlite.js');
var sailsMemoryAdapter = require('sails-disk');
var waterline = new Waterline();
var userCollection = Waterline.Collection.extend({
    identity: 'user',
    connection: 'default',
    attributes: {
        firstName: 'string',
        lastName: 'string',

        // Add a reference to Pets
        pets: {
            collection: 'pet',
            via: 'owner'
        }
    }
});
var petCollection = Waterline.Collection.extend({
    identity: 'pet',
    connection: 'default',
    attributes: {
        breed: 'string',
        type: 'string',
        name: 'string',

        // Add a reference to User
        owner: {
            model: 'user'
        }
    }
});
waterline.loadCollection(userCollection);
waterline.loadCollection(petCollection);
var config = {
    adapters: {
        'memory': sailsMemoryAdapter
        //'sails-sqlite': sailsMemoryAdapter
    },

    connections: {
        default: {
            //adapter: 'sails-sqlite'
            adapter: 'memory'
        }
    }
};
waterline.initialize(config, function (err, ontology) {
    if (err) {
        return console.error(err);
    }

    // Tease out fully initialised models.
    var User = ontology.collections.user;
    var Pet = ontology.collections.pet;

    User.create({ // First we create a user.
            firstName: 'Neil',
            lastName: 'Armstrong'
        }).then(function (user) { // Then we create the pet
            return Pet.create({
                breed: 'beagle',
                type: 'dog',
                name: 'Astro',
                owner: user.id
            });

        }).then(function (pet) { // Then we grab all users and their pets
            return User.find().populate('pets');

        }).then(function(users){ // Results of the previous then clause are passed to the next
        	console.log('users');
            console.dir(users);

        }).catch(function(err){ // If any errors occur execution jumps to the catch block.
            console.error(err);
        });
});