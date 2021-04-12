describe('testing the countAllPaarl' , function(){
    it('takes registration numbers separated with commas and returns the number of reg numbers ' , function(){
        assert.equal(countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"),3);
    });

});