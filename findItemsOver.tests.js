describe('testing findItemsOver' , function(){
    it('takes a list of obejcts each with a name and qty attribute and should return the products that have qauntity higher than threshold' , function(){
        assert.deepEqual(findItemsOver([
            {"name":"pears","qty":39},
            {"name":"bananas","qty":29},
            {"name":"apples","qty":3}
         ], 20),
         [
            {"name":"pears","qty":39},
            {"name":"bananas","qty":29}
         ]);
         
   });
   it('takes a list of obejcts each with a name and qty attribute and should return the products that have qauntity higher than threshold' , function(){
    assert.deepEqual(findItemsOver([
        {"name":"pears","qty":37},
        {"name":"bananas","qty":27},
        {"name":"apples","qty":3}
     ], 20),
     [
        {"name":"pears","qty":37},
        {"name":"bananas","qty":27}
     ]);
     
});
it('takes a list of obejcts each with a name and qty attribute and should return the products that have qauntity higher than threshold' , function(){
    assert.deepEqual(findItemsOver([
        {"name":"pears","qty":38},
        {"name":"bananas","qty":28},
        {"name":"apples","qty":3}
     ], 20),
     [
        {"name":"pears","qty":38},
        {"name":"bananas","qty":28}
     ]);
     
});
   
});
