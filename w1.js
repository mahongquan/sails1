var Waterline = require('waterline');
var sailsDiskAdapter = require('sails-disk');
var waterline = new Waterline();
var Contact=require("./api/models/Contact.js");
// var Contact=require("./api/models/Contact.js");
// var Contact=require("./api/models/Contact.js");
console.log(contact);
var contactCollection = Waterline.Collection.extend({
    identity: 'contact',
    connection: 'localDiskDb',
    attributes: Contact.attributes
});
waterline.loadCollection(contactCollection);
var config = {
    adapters: {
        'sails-disk': sailsDiskAdapter
    },

    connections: {
        localDiskDb: {
            //adapter: 'sails-sqlite'
            adapter: 'sails-disk'
        }
    }
};
waterline.initialize(config, function (err, ontology) {
    if (err) {
        return console.error(err);
    }

    // Tease out fully initialised models.
    // var User = ontology.collections.user;
    // var Pet = ontology.collections.pet;

    // User.create({ // First we create a user.
    //         firstName: 'Neil',
    //         lastName: 'Armstrong'
    //     }).then(function (user) { // Then we create the pet
    //         return Pet.create({
    //             breed: 'beagle',
    //             type: 'dog',
    //             name: 'Astro',
    //             owner: user.id
    //         });

    //     }).then(function (pet) { // Then we grab all users and their pets
    //         return User.find().populate('pets');

    //     }).then(function(users){ // Results of the previous then clause are passed to the next
    //     	console.log('users');
    //         console.dir(users);

    //     }).catch(function(err){ // If any errors occur execution jumps to the catch block.
    //         console.error(err);
    //     });
});