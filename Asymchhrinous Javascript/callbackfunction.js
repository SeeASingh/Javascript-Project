const user = (call)=>{
    const httpRequest = new XMLHttpRequest();

// Correct event listener
httpRequest.addEventListener('readystatechange', () => {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        // When the request is complete and successful
        call(undefined,httpRequest.responseText)
    } else if (httpRequest.readyState === 4) {
        // When the request is complete but failed
       call(' could not fetch data', undefined)
    }
});

// Open the connection
httpRequest.open('GET', 'https://dummyjson.com/users/1');
// Send the request
httpRequest.send();
}

user((error,data)=>{
console.log('run')
console.log(error,data)
if (data){
    console .log(data)
}else {
    console.log(error)
}
})
