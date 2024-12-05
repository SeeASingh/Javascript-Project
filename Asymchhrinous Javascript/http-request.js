const products = (filePath, callback) => {
    const httpRequest = new XMLHttpRequest();

    // Add event listener for ready state change
    httpRequest.addEventListener('readystatechange', () => {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                // Success: parse the response and call the callback
                const data = JSON.parse(httpRequest.responseText);
                callback(null, data); // First argument is null for no error
            } else {
                // Failure: call the callback with error
                callback(`Request failed with status: ${httpRequest.status}`);
            }
        }
    });

    // Open the connection
    httpRequest.open('GET', filePath);
    // Send the request
    httpRequest.send();
};

// Call the `products` function
// products('jhone.JSON', (error, data) => {
//     console.log(data)
//     products('sam.JSON', (error, data) => {
//         console.log(data)
//         products('oliver.JSON', (error, data) => {
//             console.log(data)
//         });
//     });
// });


const example = new Promise((resolve, reject) => {
    // network  request
    resolve('success');
    reject('error')

})

example.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log
})