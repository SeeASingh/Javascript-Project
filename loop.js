// Corrected `for` loop
for (let i = 0; i < 15; i++) {
    if (i === 4) {
        console.log('this is 4');
        continue; // Skip the rest of the current iteration
    }
    console.log('stop here');
    break; // Ends the loop after printing 'stop here'
}

// The variable `i` is not accessible here because it is declared with `let` inside the block scope of the loop

const name = ['joe', 'doe', 'diljit'];

for (let i = 0; i < name.length; i++) {
    console.log(name[i]); // Print the name at the current index
}
