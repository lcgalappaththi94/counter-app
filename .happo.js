const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
    apiKey: "320a01a6c0",
    apiSecret: "b8b640a5da1fad7e158bba559",

    targets: {
        'chrome-desktop': new RemoteBrowserTarget('chrome', {
            viewport: '1024x768',
        }),
    },
};
