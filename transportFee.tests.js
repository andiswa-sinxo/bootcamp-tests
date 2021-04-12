describe('testing a transportFee' , function(){
    it('returns the right price based on a shift you working' , function(){
        assert.equal(transportFee('morning'), 'R20' );
    });

});