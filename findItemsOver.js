function findItemsOver(item,products){
    var lists=[]
    for(var i=0;i<item.length;i++){
      if(item[i].qty>products){
        lists.push(item[i])
    }
  }
    return lists
  }