describe('Dom API:', function () {
    describe('#getScrollTop()', function () {
        let length = 20
        before(function () {
            webtools.setScrollTop(length)
        })
        it(`webtools.getScrollTop() should return true`, function () {
            assert(webtools.getScrollTop() === length)
        })
        after(function () {
            webtools.setScrollTop(0)
        })
    });

    describe('#setScrollTop()', function () {
        let length = 20
        it(`webtools.getScrollTop() should return true`, function () {
            webtools.setScrollTop(length)
            assert(webtools.getScrollTop() === length)
        })
        after(function () {
            webtools.setScrollTop(0)
        })
    });

    describe('#offset()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            div.style.position = 'absolute'
            div.style.top = '200px'
            div.style.left = '300px'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`webtools.offset() should return true`, function () {
            let offset = webtools.offset($ele)
            assert(offset.left === 300 && offset.top === 200)
        })
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#scrollTo()', function () {
        let y = 100
        let duration = 300
        it(`webtools.scrollTo() should return true`, function (done) {
            webtools.scrollTo(y, duration)
            setTimeout(function () {
                assert(webtools.getScrollTop() === y)
                done()
            }, duration + 100)
        })
        after(function () {
            webtools.setScrollTop(0)
        })
    });

});