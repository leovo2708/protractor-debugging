describe('Suite for protractor debugger', function () {
    it('Failing spec', function () {
        browser.get("http://angularjs.org");
        // browser.pause();
        element(by.model('yourName')).sendKeys('Vijay');
        //Element doesn't exist
        var welcomeText = element(by.binding('Nmmmmmmm')).getText();
        // browser.debugger();
        expect('Hello ' + welcomeText + '!').toEqual('Hello Vijay!')
    });
}); 