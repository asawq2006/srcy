'use strict';

module.exports = {
    refs: {
        whitelist: false,
        blacklist: [
            'npm_modules',
            'hooks',
            'puppet',
            'public/img',
            'LICENSE',
            'README.md',
            'lib',
            'imgCheck.js',
            'config.js',
            'public/js/lib'],
        replace: {},
        ignore: ['img/weather/#{temperature.outside.weather.now}_small.png'],
    },
    images: {
        roots: ['./public'],
        root: './public',
        folder: 'img',
        folders: ['img'],
        types: ['gif', 'png', 'jpg', 'svg', 'ico'],
        ignore: ['']
    }
};
