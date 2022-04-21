function compose(...com) {
    // Your solution
     return function(arg){
       for(var i = com.length - 1; i > -1; i--){
         temp = com[i](arg);
         arg = temp;
       }
     return arg;
    }
  }