var lifedb = require('life-db');
lifedb.init('test-db', function() {
	lifedb.insert('test-db','test-page', {name: "piklu"});	
});