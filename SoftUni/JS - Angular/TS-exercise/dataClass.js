var Data = /** @class */ (function () {
	function Data(method, uri, version, message) {
		this.method = method;
		this.uri = uri;
		this.version = version;
		this.message = message;
		this.response = undefined;
		this.fulfilled = false;
	}
	return Data;
})();
var request = new Data('GET', 'yt.com', 'HTTP:1.0', '');

console.log('b'.localeCompare('a'));
