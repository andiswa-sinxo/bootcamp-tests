describe('testing a transportFee' , function(){
    it('it will return the price of a morning shift' , function(){
        assert.equal(transportFee('morning'), 'R20' );
    });
    it('it will return the price of an afternoon shift', function(){
        assert.equal(transportFee('afternoon'), 'R10' );
    });
    it('it doesn not return a price for a nightshift' , function(){
        assert.equal(transportFee('nightshift'), 'free' );
    });

});