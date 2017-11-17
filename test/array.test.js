describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`webtools.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(webtools.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('webtools.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(webtools.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`webtools.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(webtools.arrayEqual(arr, arr))
        });
    });
});