describe('testing the regCheck' , function(){
    it('it will should return false if the registration no is not from Kwa-Zulu Natal ' , function(){
        assert.equal(regCheck('CY189-012', 'ND'), false);
    });
    it('it will should return true if the registration no is not from Gauteng ' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
    });
    it('it will should return false if the registration no is not from Mpumalanga ' , function(){
        assert.equal(regCheck('DV 23 LP GP', 'MP'), false);
    });

});