function primeFactors(factors){
    var factors = [],
        divisor = 2;
    
    while(factors>2){
      if(factors % divisor == 0){
         factors.push(divisor); 
         factors= factors/ divisor;
      }
      else{
        divisor++;
      }     
    }
    return factors;
  }

  let result = primeFactors(69);
  console.log(result);