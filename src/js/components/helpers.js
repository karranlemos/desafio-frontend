export default class Helpers {
    
    constructor() {
        throw 'Static Only';
    }



    static request(data, callbacks={}) {
        Helpers._fillRequestParameters(data, callbacks);

        const httpRequest = new XMLHttpRequest();
        
        httpRequest.addEventListener('load', () => {
            callbacks.onStart(httpRequest);

            if (callbacks.isSuccessful(httpRequest))
                callbacks.onSuccess(httpRequest);
            else
                callbacks.onFailure(httpRequest);
            
            callbacks.onEnd(httpRequest);
        });

        if (data.contentType)
            httpRequest.setRequestHeader('Content-type', data.contentType);

        httpRequest.open(data.method, data.url);
        httpRequest.send(data.params);
    }

    static _fillRequestParameters(data, callbacks) {
        if (!data.url)
            throw 'URL must be provided...';
        if (!data.method)
            data.method = 'get';
        if (!data.params)
            data.params = '';
        
        if (!callbacks.isSuccessful || typeof callbacks.isSuccessful !== 'function')
            callbacks.isSuccessful = () => true;

        for (const callbackName of ['onStart', 'onSuccess', 'onFailure', 'onEnd'])
            if (!callbacks[callbackName] || typeof callbacks[callbackName] !== 'function')
                callbacks[callbackName] = () => {};
    }
}