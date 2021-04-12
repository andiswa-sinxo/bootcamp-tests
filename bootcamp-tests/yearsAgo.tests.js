describe('testing a yearsAgo' , function(){
    it('takes in a year and return how many years ago that year is from the current year' , function(){
        assert.equal(yearsAgo(1976),45);
    });

});