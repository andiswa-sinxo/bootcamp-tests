describe('testing the totalPhoneBill' , function(){
    it('takes in a string calls and sms sent' , function(){
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"), "R7.45");
    });

});