/**
 * Steps to follow:

 *Obtain the nodes which you are going to interact with.
 * Create a function that adds an item to the list.
 * Create the new element of type "li".
 
 - Optional: add a handler to the event click 
 to add strikethrough functionality.

 * Add to the list the new item.
 * Delete input content (ready to enter
    new task).

 * Create the handlers for the events.
 */


//Nodes
let input = document.getElementById("todo");
let btn = document.getElementById("add");
let todoList = document.getElementById("todoList");

//Function to add items
let addTodo = () => {
    let li = document.createElement("li");
    li.textContent = input.value;

    //Handler to style
    li.addEventListener("click", () => {
        if(li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none";
        }else {
            li.style.textDecoration = "line-through";
        }
        
    });

    todoList.appendChild(li);
    input.value = "";
}


//Handlers
btn.addEventListener("click", addTodo);

input.addEventListener("keypress", event => {
    if(event.which === 13 || event.keyCode === 13) {
        addTodo();
    }
});
