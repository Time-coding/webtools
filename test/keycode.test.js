describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`webtools.getKeyName(13) should return "Enter"`, function () {
            assert(webtools.getKeyName(13) === 'Enter')
        });
    });

});