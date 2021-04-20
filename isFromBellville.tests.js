describe('testing the isFromBellville' , function(){
    it('it will return true if the registration number is from Bellville ' , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });
    it('it will return false if the registration number is from Bellville ' , function(){
        assert.equal(isFromBellville('CA 123'), false);
    });
});