// // // for each 
// // const names = ['jhon','doe','diljit'];

// // names.forEach(function(name,index){
// //     console.log(index,name);
// // });

// // for of

// const names = ['jhon34', 'thomas4', 'diljit54']; // Changed the array variable to "names" for clarity

// for (let name of names) {
//     console.log(name); // Prints each element of the "names" array
// }

let user = {
    name : 'jalaj',
    age : 24 ,
    gender : 'male',
    email: 'abcd@gmail.com',
}
for(let x in user ){
    console.log(`${x}: ${user[x]}`)
}
