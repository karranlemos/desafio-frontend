import Helpers from './helpers';

const htmlClassName = 'js-most-viewed-tags';
const url = 'https://labs.inforcedata.com.br/desafio-frontend/cloudtags.json';

class MostViewedTags {    
    constructor(mostViewedTagsDiv) {
        this.mostViewedTagsDiv = mostViewedTagsDiv;

        this._insertLoadingMessage();

        Helpers.request(
            {
                url: url,
                method: 'get'
            },
            {
                isSuccessful: this._isSuccessful,
                onSuccess: this._onSuccess,
                onFailure: this._onFailure
            }
        )
    }



    _isSuccessful = (httpRequest) => {
        return (httpRequest.status === 200);
    }

    _onSuccess = (httpRequest) => {
        try {
            var json = JSON.parse(httpRequest.responseText);
        }
        catch (err) {
            MostViewedTags.logError('Could not read JSON...');
            this._insertMessage('Erro ao ler informação...');
            return;
        }   

        var tagsHTML = '';
        for (const item of json)
            tagsHTML += `<a href="${item.link}" class="tag">${item.tag}</a>`;
        
        if (tagsHTML === '')
            return this._insertMessage('No tags found...');
        
        this._insertContent(tagsHTML);
    }

    _onFailure = () => {
        this._insertMessage('Não foi possível carregar tags...');
    }



    _emptyDiv = () => {
        while (this.mostViewedTagsDiv.firstChild)
            this.mostViewedTagsDiv.removeChild(this.mostViewedTagsDiv.firstChild);
    }

    _insertContent = (content, mustEmpty=true) => {
        if (mustEmpty)
            this._emptyDiv();

        this.mostViewedTagsDiv.insertAdjacentHTML('beforeend', content);
    }



    _insertMessage = (message, mustEmpty=true) => {
        const messageHTML = `<div class="message">${message}</div>`;
        this._insertContent(messageHTML, mustEmpty);
    }



    _insertLoadingMessage = () => {
        const loadingHTML = '<img src="images/icons/loading.gif" alt="Loading...">';
        this._insertMessage(loadingHTML);
    }



    static logError(message) {
        console.log(`MostViewedTags: ${message}`);
    }



    static initAll() {
        const mostViewedTagsDivs = document.getElementsByClassName(htmlClassName);

        var i = 0;
        for (const mostViewedTagsDiv of mostViewedTagsDivs) {
            try {
                new MostViewedTags(mostViewedTagsDiv);
            }
            catch (err) {
                MostViewedTags.logError(`#${i}: ${err}`);
            }

            i++;
        }
    }
}



document.addEventListener('DOMContentLoaded', () => MostViewedTags.initAll());