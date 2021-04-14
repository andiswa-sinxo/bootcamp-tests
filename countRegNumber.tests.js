describe('testing the countRegNumber' , function(){
    it('takes in registration numbers and returns registration numbers in a string ' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
    it('takes in registration numbers and returns registration numbers in a string ' , function(){
        assert.equal(countRegNumber('CA 19586,CY 125963,CJ 597123'), 3);
    });
    it('takes in registration numbers and returns registration numbers in a string ' , function(){
        assert.equal(countRegNumber('CA 582,CY 258796,CJ 96823'), 3);
    });

});