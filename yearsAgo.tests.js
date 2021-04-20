describe('testing a yearsAgo' , function(){
    it('it returns how many years ago from year that is from the current year' , function(){
        assert.equal(yearsAgo(1976),45);
    });
    it('takes in a year and return how many years ago that year is from the current year' , function(){
        assert.equal(yearsAgo(1999),22);
    });
    it('it returns how many years ago from year that is from the current year' , function(){
        assert.equal(yearsAgo(2000),21);
    });

});