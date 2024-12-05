

async function sam() {
    try {
        const sams = await fetch('sam.json'); // Fetching data
        const data = await sams.json(); // Parsing the JSON
        return data; // Returning the parsed data
    } catch (error) {
        console.log(error); // Catch and log any errors
    }
}

sam().then((data) => {
    if (data) {
        console.log('Success:', data); // Logging the success data
    } else {
        console.log('No data returned');
    }
});











// fetch('sams.json').then((done) => {
//     console.log('success', done)
//     return done.json()
// }).then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log('error', error)
// })

