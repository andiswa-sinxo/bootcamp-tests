describe('testing the totalPhoneBill' , function(){
    it('takes in a string calls and sms sent' , function(){
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"), "R7.45");
    });
    it('takes in a string calls and sms sent' , function(){
        assert.equal(totalPhoneBill("call, call, call, sms, call"), "R11.65");
    });
    it('takes in a string calls and sms sent' , function(){
        assert.equal(totalPhoneBill("call, sms, sms, sms, sms"), "R5.35");
    });

});