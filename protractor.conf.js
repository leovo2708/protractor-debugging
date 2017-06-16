exports.config = {
    capabilities: {
        'directConnect': true,
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    specs: ['./specs/*.js'],
    allScriptsTimeout: 999999,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 999999
    },
    onPrepare: function () {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
    }
};