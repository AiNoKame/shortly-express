var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
	tableName: 'users',
	initialize: function(){
		this.on('creating', function(model, attrs, options){
			bcrypt.hash(model.get('password'), null, null, function(err, hash) {
				if(err) {
					throw err;
				} else {
					model.set('password', hash);
				}
			});
		});
		// this.on('login', function(model, attrs, options) {
			
		// });
	}

});

module.exports = User;
