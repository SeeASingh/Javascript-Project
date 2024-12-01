const number = [10,20,30,40,50,60,70,75,80];
let numbers=number.filter(function(num){
    return num > 25 ;
});
console.log(numbers);

const members = [
    { name: 'raj', membership: 'true' },
    { name: 'rahul', membership: 'flase' },
    { name: 'ritik', membership: 'true' },
    { name: 'rajdev', membership: 'false' }
];


let member = members.filter(function(men){
    return men.membership =='true';
});
console.log(member);


