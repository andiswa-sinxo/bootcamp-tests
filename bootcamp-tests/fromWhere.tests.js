describe('testing the fromWhere' , function(){
    it('takes car registration no and returns the town the car is from' , function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });

});