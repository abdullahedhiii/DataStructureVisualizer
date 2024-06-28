document.addEventListener('DOMContentLoaded', function() {
    let enqueue = document.querySelector("#enqueue");
    let dequeue = document.querySelector("#dequeue");
    let queueContainer = document.querySelector("#queueContainer");
    let queue = [];

    enqueue.onclick = enqueueElement;
    dequeue.onclick = dequeueElement;

    function enqueueElement() {
        let val = prompt("Enter value to enqueue");
        if (val !== null && val.trim() !== "") {
            queue.push(val);
            let newDiv = document.createElement('div');
            newDiv.className = 'queue';
            newDiv.innerHTML = val;
            queueContainer.appendChild(newDiv);
        }
    }

    function dequeueElement() {
        if (queue.length > 0) {
            let val = queue.shift(); // Remove element from the front of the queue
            window.alert("Value dequeued is " + val);
            if (queueContainer.firstElementChild) {
                queueContainer.removeChild(queueContainer.firstElementChild);
            }
        } else {
            alert("Queue is empty!");
        }
    }
});
