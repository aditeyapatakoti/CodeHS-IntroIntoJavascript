//THIS IS ALTERNATIVE #1 FOR THE FINAL PROJECT.
//It is a basic to-do-list

// Create an empty array to store our to-do items
var toDoList = [];

// Define the start function
function start() {
    while (true) {
        // Show the current to-do list
        displayToDoList();

        // Ask the user for an action
        var action = prompt("Enter an action: (add / clear / quit)");

        if (action === "add") {
            var task = prompt("Enter a new task:");
            if (task !== null && task !== "") {
                addToDoItem(task);
            }
        } else if (action === "clear") {
            clearCompleted();
        } else if (action === "quit") {
            break; // Exit the loop and end the program
        } else {
            alert("Invalid action. Please enter 'add', 'clear', or 'quit'.");
        }
    }
}

// Function to add a new task to the to-do list
function addToDoItem(task) {
    toDoList.push({ task: task, completed: false });
}

// Function to display the to-do list in the console
function displayToDoList() {
    console.clear(); // Clear the console
    console.log("To-Do List:");
    
    for (var i = 0; i < toDoList.length; i++) {
        var item = toDoList[i];
        var status = item.completed ? "[x]" : "[ ]";
        console.log(status + " " + item.task);
    }
}

// Function to clear completed tasks
function clearCompleted() {
    toDoList = toDoList.filter(function(item) {
        return !item.completed;
    });
}

// Call the start function to initialize the to-do list
start();
