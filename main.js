//GETTING input from the texbox and storing it in item variable
let item = document.getElementById('item');
//storing the reference of button in button variable
let button = document.getElementById('submit');
//storing the reference of ul tag in ul variable
let ul = document.getElementById('undoneItems');
//storing the reference of button in button variable
let ulDone = document.getElementById('done');
let sound=new Audio("sound.mp3");

item.addEventListener("keyup",function(e){   // speacial functiion to dd on enter
	if(e.keyCode===13){                  // more User Experience
		newItem();
	}
})

let newItem = function(){
	let newLi = document.createElement('li');
	let checkbox = document.createElement('input');
	let label=document.createElement('label');
	let deleteButton = document.createElement('button');
	checkbox.type = 'checkbox';
	label.innerText = item.value;
	deleteButton.innerText="Delete";
	newLi.appendChild(checkbox);
	newLi.appendChild(label);
	newLi.appendChild(deleteButton);
	deleteButton.setAttribute('class', 'deleteBtn');
	var deleteItem = function(){
		var liItem = this.parentElement;
		ul.removeChild(liItem);
	}


	var checkedItem = function(){
			checkbox = document.querySelector("input[name = checkbox]");
		if(this.checked){
			sound.play();
			var textValue = this.parentElement;
			textValue.style.textDecoration = 'line-through';
			ulDone.appendChild(textValue);
			var deleteItem = function(){
			var liItem = this.parentElement;
			
			ulDone.removeChild(liItem);
			
		}
		deleteButton.addEventListener('click', deleteItem);


		}
		else
		{
			var textValue = this.parentElement;
			textValue.style.textDecoration = 'none';
			ulDone.removeChild(textValue);

	ul.appendChild(newLi);

		}
		}
		checkbox.addEventListener('change', checkedItem);

	deleteButton.addEventListener('click', deleteItem);
	ul.appendChild(newLi);
	
	item.value = "";

}

button.addEventListener("click",newItem);

//var listOfCheckedItems = list.getElementsByTagName('li');
