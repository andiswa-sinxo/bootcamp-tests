describe('testing the countAllFromTown' , function(){
    it('takes registration numbers separated with commas and return number registration numbers in a string' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341','CL'),3);
    });

});