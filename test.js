var lifedb = require('life-db');console.log("0.00");
lifedb.init('test-db', function() {console.log(10);
	lifedb.insert('test-db','test-page', {name: "piklu"});	
});

