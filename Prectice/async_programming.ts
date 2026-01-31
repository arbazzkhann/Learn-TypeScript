// Aync Programming:

/*

-> Primarily managed using promises and the async/await syntsx:

Key Concepts:
-> Non-Blocking execution: 
    -> Async operations like fetching data from an API, 
    -> Handling user input.
    
    -> Run in the background, allowing the main program thread to continue executing other tasks,
    -> Keeping the application responsive.

Core Methods:
1. Promises:
    .then()
    .catch()
    .finally()

2. async/await (Recommended):
    -> async: This keyword defines an asynchronous function, which always return a promise.
    -> await: This keyword is used inside an async function to pause the execution until the promise is resolved.
*/


// 1. .then and .catch
const fetchData = (): Promise<string> => {
    return new Promise((res, rej) => {
        const success: boolean = true;

        if(success) {
            res("data fetch successfully.");
        }
        else {
            rej("Failed to fetch data!");
        }
    })
}

// consuming that promise
fetchData()
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});




// 2. async/await
function fetchData2(): Promise<string>  {
    return new Promise((res, rej) => {
        const success: boolean = false;

        if(success) {
            res("Promise sucess");
        }
        else {
            rej("Promise failed!");
        }
    });
}

// consuming that promise
async function consumingPromise () {
    try {
        const myData = await fetchData2()
        console.log("myData: ", myData);
    }
    catch(err) {
        console.log("Error while consuming promise.");
    }
}

consumingPromise();