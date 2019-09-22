let inputRequest = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};

function validateRequest(inputRequest) {
    const error = "Invalid request header: Invalid ";
    const allowedMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const allowedVersions = ['HTTP/0.9', "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    const uriPattern = /^[a-z0-9.]+$/gm;
    const messagePattern = /^[a-z- \/*:.%]+$/gm;

    let inputMethod = inputRequest.method;
    let inputUri = inputRequest.uri;
    let inputVersion = inputRequest.version;
    let inputMessage = inputRequest.message;

    if (allowedMethods.indexOf(inputMethod) === -1) {
        throw Error(error + "Method");
    }

    if (inputUri === "" || inputUri.match(uriPattern) === null) {
        throw Error(error + "URI")
    }

    if (allowedVersions.indexOf(inputVersion) === -1) {
        throw Error(error + "Version")
    }

    if (inputMessage !== "" && inputMessage.match(messagePattern) === null) {
        throw Error(error + "Message")
    }

    return inputRequest;
}

validateRequest(inputRequest);