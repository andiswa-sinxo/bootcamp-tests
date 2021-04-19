describe('testing the regCheck' , function(){
    it('checks the registation no and no plates and returning boolean ' , function(){
        assert.equal(regCheck('CY189-012', 'ND'), false);
    });
    it('checks the registation no and no plates and returning boolean ' , function(){
        assert.equal(regCheck('CY765-897', 'ND'), false);
    });
    it('checks the registation no and no plates and returning boolean ' , function(){
        assert.equal(regCheck('CY098-832', 'ND'), false);
    });

});