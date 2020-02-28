console.log("hello world");

function StopWatch() {
    

    let initial = 0,
        start, 
        stop,
        duration;
    start = function() {
        //read the clock now
        start = new Date.getSeconds
    };
    stop = function() {
        //read the clock now
        stop = new Date.getSeconds
    },
    reset = function() {
        duration = 0;
    };
    duration = stop - start; 

};

let sw = new StopWatch;

console.log(sw.duration);