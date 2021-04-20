describe('testing findItemsOver' , function(){
    it('takes a list of obejcts each with a name and qty  and return the products that have qauntity higher than 20' , function(){
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
   it('takes a list of obejcts each with a name and qty and returns the products that have qauntity higher than 30' , function(){
    assert.deepEqual(findItemsOver([
        {"name":"pears","qty":37},
        {"name":"bananas","qty":27},
        {"name":"apples","qty":3}
     ], 30),
     [
        {"name":"pears","qty":37},
     ]);
     
});
it('takes a list of obejcts each with a name and qty and return the products that have qauntity higher than 10' , function(){
    assert.deepEqual(findItemsOver([
        {"name":"pears","qty":14},
        {"name":"bananas","qty":22},
        {"name":"apples","qty":8}
     ], 10),
     [
        {"name":"pears","qty":14},
        {"name":"bananas","qty":22}
     ]); 
     
});
   
});
