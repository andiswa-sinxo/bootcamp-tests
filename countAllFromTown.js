function countAllFromTown(regNo, loc){
    //console.log(regNo)
        var reg = regNo.split(',');
      var registration = []
      for(var i= 0; i<reg.length;i++){
        if(reg[i].startsWith('CL')){
          var s = reg[i].trim();
          //console.log(s)
            registration.push(reg[i]);
        }  
      }
      
        return registration.length;
    }
    function countAllFromTown(regNo, loc){
      //console.log(regNo)
          var reg = regNo.split(',');
        var registration = []
        for(var i= 0; i<reg.length;i++){
          if(reg[i].startsWith('CL')){
            var s = reg[i].trim();
            //console.log(s)
              registration.push(reg[i]);
          }  
        }
        
          return registration.length;
      }
    
    