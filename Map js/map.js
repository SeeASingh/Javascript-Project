// const number = [10,20,25,30,40,45,50,555,60,65,70];

// let numbers = number.map(function (num){
//     return num / 2 ;
// })
// console.log(numbers);

const members = [
    { name: 'raj', membership: 'true' },
    { name: 'rahul', membership: 'flase' },
    { name: 'ritik', membership: 'true' },
    { name: 'rajdev', membership: 'false' }
];

let member =members.map((number)=>{
    if(number.num>20){
        return number.num /2
    }
    else {
        return number
    }
})
console.log(members)