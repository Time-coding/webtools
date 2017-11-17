describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`webtools.getExplore() should return "Chrome"`, function () {
            assert(/^Chrome:/.test(webtools.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`webtools.getOS() should return "windows"`, function () {
            assert(webtools.getOS() === 'windows')
        });
    });
});