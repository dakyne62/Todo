console.log('Hello World');

//Exploring the DOM

var todoList = document.getElementById('todo-list');
var todoInput = document.getElementById('todo-input');

//Create a storage for the TODO LIST

var todos = [];

var addTodo = function() {

	//Get the input value
	var todoText = todoInput.value;

	if(todoText !== '') {
		//Add todo to storage
		todos.push(todoText);

		//Clear the textbox for the user
		todoInput.value = '';
		console.log(todos);
		displayNewTodo();

	}

}

var displayNewTodo = function() {
	//Gt the most recent todo
	var todoIndex = todos.length - 1;
	var todo = todos[todoIndex];

	var newTodo = document.createElement('li');
	newTodo.id = todoIndex
	newTodo.innerHTML = todo;

	//Add the element to the DOM Tree
	todoList.appendChild(newTodo);
	appendOptionButtons(todoIndex, newTodo);

}

var removeTodo = function(index) {

	//Removes the todo from storage
	todos.splice(index, 1)

	//Get the Todo item that needs to be removed from the DOM
	var toDotoRemove = document.getElementById('' + index + '');

	//Remove the element from the DOM
	todoList.removeChild(toDotoRemove);

}

var appendOptionButtons = function(index, todo) {
	//Functionality to delete the todo
	var deleteButton = document.createElement('button');
	deleteButton.innerText = 'x';
	deleteButton.onclick = function() {
		removeTodo(index);
	}

	todo.appendChild(deleteButton);

	var editButton = document.createElement('button');
	editButton.innerText = 'edit';
	editButton.onclick = function() {
		addEditField(index);
	}

	todo.appendChild(editButton);
}

var addEditField = function(index) {
	//Grab the todo that we want to edit
	var toDoToChange = document.getElementById('' + index + '');

	//Create a new input where we can i\update the todo
	var editInput = document.createElement('input');
	editInput.type = 'text';
	editInput.id = 'edit' + index
	editInput.className = 'edit-input';
	editInput.placeholder = "Edit the todo";

	//Create a new button to submit changes
	var editButton = document.createElement('button');
	editButton.innerText = "Update todo";
	editButton.onclick = function() {
		updateTodo(index);

	}
	//Add the input and button to the DOM
	toDoToChange.appendChild(editInput);
	toDoToChange.appendChild(editButton);

}

var updateTodo = function(index) {
	//Get the updated todo and its value.
	var editInput = document.getElementById('edit' + index);
	var updatedTodo = editInput.value;

	//Get the input at the index in storage and update its value
	todos[index] = updatedTodo;

	//Update the text value in the DOM
	var todo = document.getElementById('' + index);

	todo.innerText = updatedTodo;
	appendOptionButtons(index, todo);
}

// todoInput.value = "Some item on the list."
// console.log(todoList);
