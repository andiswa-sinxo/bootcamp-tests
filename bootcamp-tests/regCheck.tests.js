describe('testing the regCheck' , function(){
    it('checks the registation no and no plates and returning boolean ' , function(){
        assert.equal(regCheck('CY189-012', 'ND'), false);
    });

});