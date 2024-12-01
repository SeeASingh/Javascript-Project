// function decleartion

// function greet (){
//     let name = prompt('what is your name')
//     console.log(`buddy ${name}`);
// }
// greet();

// function expression

const word = function (){
    console.log ('this is function expression');
}
word();

const add = function (x){
    return x + x ;
}

console.log (add(22));

// iife 


(function(){
    console.log ('this is iife')
})();