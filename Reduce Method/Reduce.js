 const number = [10,20,30,40,50,60,70];

//  let reduce = number.reduce(function(acc,crr){
//     return acc + crr ;
//  })
//  console.log(reduce)

let reduce = number.reduce(function(acc,crr){
    if(crr>20){
        acc++
    }
    return acc
     },2)
     console.log(reduce)