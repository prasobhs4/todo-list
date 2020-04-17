
/* Dom elements */
var taskbtn =document.querySelector('.btn-outline-primary');
var task = document.querySelector('.text-box');
var listgp = document.querySelector('.list-group');
var header = document.querySelector('.badge-light');

var attribute = 'disable';
var totalTodo = 0;



/* Event Listener for Addition */
const getElement = () => {

totalTodo += 1;	
console.log(totalTodo);


let a = 
`
  <div class="list-group-${totalTodo}">
  <button type="button" class="list-group-item list-group-item-action ${attribute}">${task.value}</button>
  <button type="button" id="id${totalTodo}" onclick="deleteItem(this.id)" class="btn btn-danger">Delete</button><br>
`;


	if(task.value)
	{
		  header.textContent = totalTodo;
		 listgp.insertAdjacentHTML('beforeend', a);
	}
   
	task.value='';

};

/*Keyboard  Press */
const getElementEnter = (event) => {
	
	if (event.keyCode === 13){
		getElement();
	}
}


/*Delete Item */
const deleteItem = (id) => 

{

    totalTodo = totalTodo - 1;
	header.textContent = totalTodo;	
	var deletebtn = document.getElementById(id);
	deletebtn.parentElement.innerHTML = '';	

}

/* Call Add Event Listener */
taskbtn.addEventListener('click',getElement);
task.addEventListener('keypress',getElementEnter);



