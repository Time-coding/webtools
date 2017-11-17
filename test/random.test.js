describe('Random API:', function () {
    describe('#randomColor()', function () {
        it(`/^#[0-9a-fA-F]$/.test(webtools.randomColor()) should return true`, function () {
            assert(/^#[0-9a-fA-F]{6}$/.test(webtools.randomColor()))
        });
    });

    describe('#randomNum()', function () {
        it(`10 <= webtools.randomNum(10, 1000) <= 100 should return true`, function () {
            let num = webtools.randomNum(10, 1000)
            assert(num <= 1000 && num > 10)
        });
    });
})