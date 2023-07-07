interface httpRequest {
	method: string;
	uri: string;
	version: string;
	message: string;
	response: string | undefined;
	fulfilled: boolean;
}

class Data implements httpRequest {
	method: string;
	uri: string;
	version: string;
	message: string;
	response: string | undefined;
	fulfilled: boolean;

	constructor(method: string, uri: string, version: string, message: string) {
		this.method = method;
		this.uri = uri;
		this.version = version;
		this.message = message;
		this.response = undefined;
		this.fulfilled = false;
	}
}

const request = new Data('GET', 'yt.com', 'HTTP:1.0', '');
console.log(request);
