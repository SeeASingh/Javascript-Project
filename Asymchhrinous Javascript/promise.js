const products = (filePath) => {
    return new Promise((resolve, reject) => {
        const httpRequest = new XMLHttpRequest();

        // Add event listener for ready state change
        httpRequest.addEventListener('readystatechange', () => {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
                    // Success: parse the response and resolve
                    const data = JSON.parse(httpRequest.responseText);
                    resolve(data);
                } else {
                    // Failure: reject with error message
                    reject('Could not fetch data');
                }
            }
        });

        // Open the connection
        httpRequest.open('GET', filePath);
        // Send the request
        httpRequest.send();
    });
};

// Call the `products` function


    products('sam.json')
    .then((data) => {
        console.log('Resolve:', data);
        return products('oliver.json');
    })
    .then((data) => {
        console.log('Resolve2:', data);
        return products('sam.json');
    })
    .then((data) => {
        console.log('Resolve3:', data);
    })
    .catch((error) => {
        console.log('Reject:', error);
    });
