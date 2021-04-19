describe('testing if it isWeekday' , function(){
    it('founds out if the parameter passed in is a day of the week and return boolean' , function(){
        assert.equal(isWeekday('Monday',), true);
    });
    it('founds out if the parameter passed in is a day of the week and return boolean' , function(){
        assert.equal(isWeekday('Sunday',), false);
    });
    it('founds out if the parameter passed in is a day of the week and return boolean' , function(){
        assert.equal(isWeekday('Saturday',), false);
    });


});