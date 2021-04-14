describe('testing the fromWhere' , function(){
    it('takes car registration no and returns the town the car is from' , function(){
        assert.equal(fromWhere('CA 111'), 'Cape Town');
    });
    it('takes car registration no and returns the town the car is from' , function(){
        assert.equal(fromWhere('CAA 205'), 'Cape Town');
    });
    it('takes car registration no and returns the town the car is from' , function(){
        assert.equal(fromWhere('CAA 300'), 'Cape Town');
    });
    

});