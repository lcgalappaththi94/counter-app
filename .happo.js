const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
    apiKey: "320a01a6c0",
    apiSecret: "b8b640a5da1fad7e158bba559",

    pages: [
        { url: 'https://daf740eb.ngrok.io', title: 'Localhost' },
    ],

    targets: {
        'chrome-desktop': new RemoteBrowserTarget('chrome', {
            viewport: '1024x768',
        }),
    },
};
