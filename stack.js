document.addEventListener('DOMContentLoaded', function() {
    let push = document.querySelector("#push");
    let pop = document.querySelector("#pop");
    let stackContainer = document.querySelector("#stackContainer");
    let stack = [];

    push.onclick = pushElement;
    pop.onclick = popElement;

    function pushElement() {
        let val = prompt("Enter value to push");
        if (val !== null && val.trim() !== "") {
            stack.push(val);
            let newDiv = document.createElement('div');
            newDiv.className = 'stk';
            newDiv.innerHTML = val;
            stackContainer.appendChild(newDiv);
        }
    }

    function popElement() {
        if (stack.length > 0) {
            let val = stack.pop();
            window.alert("Value popped is "+ val);
            if (stackContainer.lastChild) {
                stackContainer.removeChild(stackContainer.lastChild);
            }
        } else {
            alert("Stack is empty!");
        }
    }
});
