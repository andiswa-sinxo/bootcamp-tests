describe('testing the greet' , function(){
    it('taking a name and returning hello and Okuhle ' , function(){
        assert.equal(greet('Okuhle'),"Hello, Okuhle");
    });
    it('taking a name and returning hello and lele ' , function(){
        assert.equal(greet('lele'),"Hello, lele");
    });

});


