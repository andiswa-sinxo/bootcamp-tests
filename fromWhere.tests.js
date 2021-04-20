describe('testing the fromWhere' , function(){
    it('it takes a car registration no and it will return the town the car is from' , function(){
        assert.equal(fromWhere('CA 111'), 'Cape Town');
    });
    it('takes car registration no and returns the town the car is from' , function(){
        assert.equal(fromWhere('CY 205'), 'Bellville');
    });
    it('takes car registration no and returns the town the car is from' , function(){
        assert.equal(fromWhere('CJ 300'), 'Paarl');
    });
    

});