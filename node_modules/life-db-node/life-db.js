module.exports = {
	rootFolderName : "LifeDB",
	init : function(databaseName) {
		var presentObject = this;
		var checkAndCreateDatabase = (function() {
			var fs = require('fs');
			if(!fs.exists(presentObject.rootFolderName)) {
				fs.mkdir(presentObject.rootFolderName, function() {
					fs.mkdir(presentObject.rootFolderName+databaseName);
				});
			}
		})();
	}
}