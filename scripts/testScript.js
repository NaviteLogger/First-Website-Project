let myPromise = new Promise((resolve, reject) => {
    let num = Math.Floor(Math.random()*10)+1;
    console.log(num);

    if (num % 2 == 0) {
        resolve("Even Number");
    } else {
        reject("Odd Number");
    }
});

function resolve(goodNews) {
    console.log(goodNews);
}

function reject(badNews) {
    console.log(badNews);
} 

myPromise.then(resolve, reject);

const responseMessage = async () => {
    let message = '';

    let num = Math.Floor(Math.random()*10)+1;

    if (num % 2 == 0) {
        message = await ("Even Number");
    } else {
        message = await ("Odd Number");
    }
} 