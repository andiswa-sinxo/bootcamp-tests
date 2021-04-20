describe('testing the totalPhoneBill' , function(){
    it('it will return the total price of two calls and three sms' , function(){
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"), "R7.45");
    });
    it('it will return the total price of 4 calls and sms' , function(){
        assert.equal(totalPhoneBill("call, call, call, sms, call"), "R11.65");
    });
    it('it will return the total price of a call and four sms' , function(){
        assert.equal(totalPhoneBill("call, sms, sms, sms, sms"), "R5.35");
    });

});