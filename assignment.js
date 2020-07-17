//  feetToMile|||||

function feetToMile (feet){
    var mile = feet / 5280;
    return mile;
    }
 
 // tinyFriend||||
 

 const tinyFriend = names => {
 const minimumLength = Math.min(...names.map(name => name.length));
 const sName = names.find(name => name.length == minimumLength);
 return sName;
 }

 //woodCalculator

 function woodCalculator(chair, table, bed){
     var chairCount =chair * 1;
     var tableCount =table * 3;
     var bedCount = bed * 5;
     var totalCount = chairCount +tableCount +bedCount;
     return totalCount;
 }
  
 // brickCalculator
 function brickCalculator (floor){
     if (floor <= 10){
         var feet1 = floor *15;
         var brick = feet1 *1000;
     }
     else if (floor <=20){
         var feet2 = floor *12;
         var brick =feet2 *1000;
     }
     else if(floor > 20){
         var feet3 = floor *10;
         var brick =feet3 *1000;
     }
     return brick;
 }


