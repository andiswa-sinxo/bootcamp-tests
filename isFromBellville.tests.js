describe('testing the isFromBellville' , function(){
    it('is taking a registration no and returning true ' , function(){
        assert.equal(isFromBellville('CY'), true);
    });
    it('is taking a registration no and returning false ' , function(){
        assert.equal(isFromBellville('CA'), false);
    });

});