 describe('testing findItemsOver20' , function(){
     it('takes a list of objects having 2 attributes called name and other qty and should return products that have quantity over 20' , function(){
         assert.deepEqual(
             findItemsOver20([
            {"name":"pears","qty":37},
            {"name":"bananas","qty":27},
            {"name":"apples","qty":3}
         ],),
         [
            {"name":"pears","qty":37},
            {"name":"bananas","qty":27}
         ]);

 });
 it('takes a list of objects having 2 attributes called name and other qty and should return products that have quantity over 20' , function(){
    assert.deepEqual(
        findItemsOver20([
       {"name":"pears","qty":39},
       {"name":"bananas","qty":29},
       {"name":"apples","qty":3}
    ],),
    [
       {"name":"pears","qty":39},
       {"name":"bananas","qty":29}
    ]);

});
it('takes a list of objects having 2 attributes called name and other qty and should return products that have quantity over 20' , function(){
    assert.deepEqual(
        findItemsOver20([
       {"name":"pears","qty":38},
       {"name":"bananas","qty":28},
       {"name":"apples","qty":3}
    ],),
    [
       {"name":"pears","qty":38},
       {"name":"bananas","qty":28}
    ]);

});
});
