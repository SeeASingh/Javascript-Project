const days = new Date();
const past = new Date('Mon Dec 02 2023 16:44:09  ')
// console.log (days.getTime(),past.getTime());
const differ = days.getTime()- past.getTime();
console.log(differ);

const mins = Math.round(differ / 1000 /60);
const hours = Math.round( mins /60);
const day = Math.round( hours /24);


console.log(mins);
console.log(hours);
console.log(`this video is published ${day} ago`);
