describe('testing a transportFee' , function(){
    it('returns the right price based on a shift you working' , function(){
        assert.equal(transportFee('morning'), 'R20' );
    });
    it('returns the right price based on a shift you working' , function(){
        assert.equal(transportFee('afternoon'), 'R10' );
    });
    it('returns the right price based on a shift you working' , function(){
        assert.equal(transportFee('nightshift'), 'free' );
    });

});