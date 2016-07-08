/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var actionUtil = require('./actionUtil'), _ = require('lodash');
module.exports = {
  login: function (req, res) {
    return res.send("Hi there!");
  },
  logout: function (req, res) {
    return res.redirect("http://www.sina.com");
  },
  signup: function (req, res) {
    return res.redirect("http://www.baidu.com");
  },
  find:function(req,res){
      console.log("find item ===================");
      // Look up the model
      var Model = actionUtil.parseModel(req);


      // If an `id` param was specified, use the findOne blueprint action
      // to grab the particular instance with its primary key === the value
      // of the `id` param.   (mainly here for compatibility for 0.9, where
      // there was no separate `findOne` action)
      if ( actionUtil.parsePk(req) ) {
        return require('./findOne')(req,res);
      }

      // Lookup for records that match the specified criteria
      var w=actionUtil.parseCriteria(req);
      console.log(w);
      var w1;
      if(w.term)
      {
        w1={name:{"contains":w.term}};
      }
      else
      {
         w1={}
      }
      var query = Model.find()
      .where(w1)
      .limit( actionUtil.parseLimit(req) )
      .skip( actionUtil.parseSkip(req) )
      .sort( actionUtil.parseSort(req) );
      query = actionUtil.populateRequest(query, req);
      query.exec(function found(err, matchingRecords) {
        if (err) return res.serverError(err);

        // Only `.watch()` for new instances of the model if
        // `autoWatch` is enabled.
        if (req._sails.hooks.pubsub && req.isSocket) {
          Model.subscribe(req, matchingRecords);
          if (req.options.autoWatch) { Model.watch(req); }
          // Also subscribe to instances of all associated models
          _.each(matchingRecords, function (record) {
            actionUtil.subscribeDeep(req, record);
          });
        }

        res.ok(matchingRecords);
      });
  },
};


