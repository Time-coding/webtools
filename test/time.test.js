describe('Time API:', function () {
    describe('#formatPassTime()', function () {
        it(`webtools.formatPassTime(new Date().getTime() - 30000) === '"刚刚"' should return true`, function () {
            let time = new Date().getTime() - 30000
            assert(webtools.formatPassTime(time) === "刚刚")
        });

        it(`webtools.formatPassTime(new Date().getTime() - 70000) === '"1分钟前"' should return true`, function () {
            let time = new Date().getTime() - 70000
            assert(webtools.formatPassTime(time) === "1分钟前")
        });

        it(`webtools.formatPassTime(new Date().getTime() - 70000 * 60) === '"1小时前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60
            assert(webtools.formatPassTime(time) === "1小时前")
        });

        it(`webtools.formatPassTime(new Date().getTime() - 70000 * 60 * 24) === '"1天前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60 * 24
            assert(webtools.formatPassTime(time) === "1天前")
        });

        it(`webtools.formatPassTime(new Date().getTime() - 70000 * 60 * 24 * 30) === '"1个月前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60 * 24 * 30
            assert(webtools.formatPassTime(time) === "1个月前")
        });

        it(`webtools.formatPassTime(new Date().getTime() - 70000 * 60 * 24 * 30 * 12) === '"1年前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60 * 24 * 30 * 12
            assert(webtools.formatPassTime(time) === "1年前")
        });
    });

    describe('#formatRemainTime()', function () {
        it(`webtools.formatRemainTime(new Date().getTime() + oneSecond + oneMinute + oneHour + oneDay) === '"1天1小时1分钟1秒"' should return true`, function () {
            let time = new Date().getTime(),
                oneSecond = 1000,
                oneMinute = oneSecond * 60,
                oneHour = oneMinute * 60,
                oneDay = oneHour * 24;
            time = time + oneSecond + oneMinute + oneHour + oneDay
            assert(webtools.formatRemainTime(time) === "1天 1小时 1分钟 1秒")
        });
    });
})