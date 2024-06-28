document.addEventListener('DOMContentLoaded', function() {
    let insert = document.querySelector("#insert");
    let deleteValue = document.querySelector("#delete");
    let listContainer = document.querySelector("#listContainer");
    let list = null; // Start with an empty list (null means no nodes)

    insert.onclick = insertValue;
    deleteValue.onclick = deleteHead;

    function insertValue() {
        let val = prompt("Enter value to add to list");
        if (val !== null && val.trim() !== "") {
            let newNode = { value: val, next: null };

            if (list === null) {
                list = newNode; // If list is empty, new node becomes the head
            } else {
                let current = list;
                while (current.next !== null) {
                    current = current.next;
                }
                current.next = newNode; // Append new node at the end of the list
            }

            updateList();
        }
    }

    function deleteHead() {
        if (list !== null) {
            let val = list.value; // Get value of the current head node
            list = list.next; // Move head to the next node (removes current head)
            window.alert("Value removed is " + val);
            updateList();
        } else {
            alert("List is empty!");
        }
    }


    function updateList() {
        listContainer.innerHTML = ""; // Clear existing content

        let current = list;
        while (current !== null) {
            let newNode = document.createElement('div');
            newNode.className = 'list';
            newNode.textContent = current.value;
            listContainer.appendChild(newNode);

            if (current.next !== null) {
                let arrow = document.createElement('span');
                arrow.textContent = " -> ";
                listContainer.appendChild(arrow);
            }

            current = current.next;
        }
    }
});
