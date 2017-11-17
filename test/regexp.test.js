describe('Regexp API:', function () {

    describe('#isEmail()', function () {
        it('webtools.isEmail("leiquanlive.com") should return false ', function () {
            assert.notEqual(webtools.isEmail("leiquanlive.com"))
        });
        it('webtools.isEmail("leiquan@live.com") should return true ', function () {
            assert(webtools.isEmail("leiquan@live.com"))
        });
    });

    describe('#isIdCard()', function () {
        it('webtools.isIdCard("622224188203234033") should return true ', function () {
            assert(webtools.isIdCard("622224188203234033"))
        });
        it('webtools.isIdCard("zas224188203234033") should return false', function () {
            assert(!webtools.isIdCard("leiquan@live.com"))
        });
    });

    describe('#isPhoneNum()', function () {
        it('webtools.isPhoneNum("18882324234") should return true ', function () {
            assert(webtools.isPhoneNum("18882324234"))
        });
        it('webtools.isPhoneNum("8618882324234") should return true ', function () {
            assert(webtools.isPhoneNum("8618882324234"))
        });
        it('webtools.isPhoneNum("5534553") should return false', function () {
            assert(!webtools.isPhoneNum("5534553"))
        });
    });

    describe('#isUrl()', function () {
        it('webtools.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(webtools.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('webtools.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(webtools.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('webtools.isUrl("www.baidu.com") should return true', function () {
            assert(webtools.isUrl("www.baidu.com"))
        });
        it('webtools.isUrl("baidu.com") should return true', function () {
            assert(webtools.isUrl("baidu.com"))
        });
        it('webtools.isUrl("http://baiducom") should return false', function () {
            assert(!webtools.isUrl("http://baiducom"))
        });
    });

});