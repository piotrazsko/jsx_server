/*global require, module*/
var fs = require('fs');
module.exports = {
    getFile: function(url) {
        var text = '404';
        try {
            url = url.split('?')[0];
            if (url === '/') {
                url = '/index.html';
            }
            text = fs.readFileSync('./public' + url);
            console.log(url);
            if (url === '/index.html') {
                text = text
                    .toString()
                    .replace(/version=/g, 'version=' + Date.now());
            }
            return text;
        } catch (e) {
            return text + ' ' + e;
        }
    },
};
