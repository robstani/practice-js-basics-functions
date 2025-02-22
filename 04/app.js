function runTimer() {
    let counter = 0;
    const intervalId = setInterval(function() {
        const time = (new Date()).toLocaleTimeString();
        console.log(`Your local time is ${time}`);
        
        counter++;
        if (counter === 5) {
            clearInterval(intervalId);
            console.log(`Display finished after ${counter} repetitions`)
        }
    },5000);
}

runTimer();