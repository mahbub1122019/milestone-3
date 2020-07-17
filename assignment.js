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


    