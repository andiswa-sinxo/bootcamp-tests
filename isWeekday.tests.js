describe('testing if it isWeekday' , function(){
    it('if it weekday it will return true' , function(){
        assert.equal(isWeekday('Monday',), true);
    });
    it('it will return false if it is not a weekday' , function(){
        assert.equal(isWeekday('Sunday',), false);
    });
    it('it will return false if it is not a weekday' , function(){
        assert.equal(isWeekday('Saturday',), false);
    });


});