if (window.Worker) {
    const myWorker = new Worker('/javascripts/worker.js');

    const first = document.querySelector('#first');
    const second = document.querySelector('#second');
    const result = document.querySelector('#result');

    first.onchange = function () {
        myWorker.postMessage([first.value, second.value]);
        console.log('Message posted to worker');
    };

    second.onchange = function () {
        myWorker.postMessage([first.value, second.value]);
        console.log('Message posted to worker');
    };

    myWorker.onmessage = function(e) {
        result.textContent = e.data;
        console.log('Message received from worker');
    }
}
