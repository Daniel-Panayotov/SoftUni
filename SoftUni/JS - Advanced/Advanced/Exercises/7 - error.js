let one = object => {
    let { method, uri, version, message } = object;

    let saved = message ? message : undefined;

    if (message == '') {
        message = ' ';
    }

    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let req = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let symbols = ['<', '>', '\\', '&', "'", '"'];

    let throwError = type => {
        throw new Error(`Invalid request header: Invalid ${type}`);
    };
    if (!req.includes(method) || !method) {
        throwError('Method');
    }
    if (!/^([\w.]+)$|^\*$/.exec(uri) || !uri) {
        throwError('URI');
    }
    if (!versions.includes(version) || !version) {
        throwError('Version');
    }
    if (!/^[^<>\\&'"]+$/.exec(message) || !message) {
        throwError('Message');
    }

    message = saved;

    return object;
};

console.log(
    one({
        method: 'POST',
        uri: 'home.bash',
        version: 'HTTP/2.0',
    })
);
