/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var actionUtil = require('./actionUtil'), _ = require('lodash');
var zl=function(contact,packitems){
  var r=""+contact;
  r=r+packitems;
  return(r);
};
module.exports = {
  show:function(req, res) {
    console.log(res);
    //console.log(req.query.id);
    Contact.findOneById(parseInt(req.query.id), function (err, contact){
       UsePack.find({contact:contact.id}, function (err, usepacks){
          console.log(usepacks);
          var r=[];
          var j=0;
          for(var i=0;i<usepacks.length;i++)
          {
            console.log(i);
            PackItem.find({pack:usepacks[i].pack}, function (err, packitems){
              j++;
              console.log(i+":"+usepacks[i]);
              r.push(packitems);
              if(j==usepacks.length){
                res.ok(zl(contact,packitems));
              }
            });
          }
       });
    });
    //console.log(c);
    console.log("after find");
    //return res.send("I am a contact");
  },
  login: function (req, res) {
    return res.send("Hi there!");
  },
  logout: function (req, res) {
    return res.redirect("http://www.sina.com");
  },
  signup: function (req, res) {
    return res.redirect("http://www.baidu.com");
  },
  // find:function(req,res){
  // 	console.log("find contact===================");
  // 	// Look up the model
  // var Model = actionUtil.parseModel(req);


  // // If an `id` param was specified, use the findOne blueprint action
  // // to grab the particular instance with its primary key === the value
  // // of the `id` param.   (mainly here for compatibility for 0.9, where
  // // there was no separate `findOne` action)
  // if ( actionUtil.parsePk(req) ) {
  //   return require('./findOne')(req,res);
  // }

  // // Lookup for records that match the specified criteria
  // var query = Model.find()
  // .where( actionUtil.parseCriteria(req) )
  // .limit( actionUtil.parseLimit(req) )
  // .skip( actionUtil.parseSkip(req) )
  // .sort( actionUtil.parseSort(req) );
  // query = actionUtil.populateRequest(query, req);
  // query.exec(function found(err, matchingRecords) {
  //   if (err) return res.serverError(err);

  //   // Only `.watch()` for new instances of the model if
  //   // `autoWatch` is enabled.
  //   if (req._sails.hooks.pubsub && req.isSocket) {
  //     Model.subscribe(req, matchingRecords);
  //     if (req.options.autoWatch) { Model.watch(req); }
  //     // Also subscribe to instances of all associated models
  //     _.each(matchingRecords, function (record) {
  //       actionUtil.subscribeDeep(req, record);
  //     });
  //   }

  //   res.ok(matchingRecords);
  // });
  // },
};

