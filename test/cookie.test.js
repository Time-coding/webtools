describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            webtools.setCookie('test', 'getTestValue')
        })
        it(`webtools.getCookie('test', 'getTestValue') should return true`, function () {
            assert(webtools.getCookie('test') === 'getTestValue')
        })
        after(function () {
            webtools.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            webtools.setCookie('test', 'removeTestValue')
        })
        it(`webtools.removeCookie('test') should return false`, function () {
            webtools.removeCookie('test')
            assert.notEqual(webtools.getCookie('test') === 'removeTestValue')
        })
    })

    describe('#setCookie()', function () {
        it(`webtools.getCookie('test', 'setCookie') should return true`, function () {
            webtools.setCookie('test', 'setCookie')
            assert(webtools.getCookie('test') === 'setCookie')
        })
        after(function () {
            webtools.removeCookie('test')
        })
    })
})