/*console*/
var numCar = document.getElementById("number-car");

numCar.onchange = function () {
    
    "use strict";
    var num = numCar.value;
    if (num >= 1 && num <= 30) {
       document.getElementById("allPrice").value = num * 2000; 
    } else {
       document.getElementById("allPrice").value = "";
    }
   
 /*   num = "mohammed";
     if(!(isNaN(num))){
         console.log(!(isNaN(num)));
     document.getElementById("allPrice").value = num * 2000;
  }*/
};