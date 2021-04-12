function yearsAgo(year){
    console.log(year)
    var currentYear = new Date();
    var years = currentYear.getFullYear() - year;
    return years
    
  }