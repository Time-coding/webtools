describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual webtools.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, webtools.deepClone(person))
        });

        it(`person === webtools.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, webtools.deepClone(person))
        });
    });

    describe('#isEmptyObject()', function () {
        it(`webtools.isEmptyObject({}) should return true`, function () {
            assert(webtools.deepClone({}))
        });

        it(`webtools.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(webtools.isEmptyObject({
                one: 1
            }))
        });

        it(`webtools.isEmptyObject([]) should return false`, function () {
            assert.notEqual(webtools.isEmptyObject([]))
        });
    });
})