/*jshint esversion: 6 */
let todoList = [];
const color = ['red', 'pink', 'green', 'yellow', 'blue', 'lightblue']; // рандомные цвета
let condition = false;

const randomColor = () => {
	const i = Math.round(Math.random() * 6);
	return color[i];
};

clearInput = () => {
	document.getElementById('name-author').value = "";
	document.getElementById('date-created').value = "";
	document.getElementById('to-do').value = "";
};
// let nameAuthor = '';
// 	let date = '';
// 	let toDo = '';

	let inputNameAuthor = document.getElementById('name-author');
	let inputDateCreated = document.getElementById('date-created');
	let inputToDo = document.getElementById('to-do');

add.onclick = () => {
	let nameAuthor = inputNameAuthor.value;
	let date = inputDateCreated.value;
	let toDo = inputToDo.value;
	
	if(nameAuthor && date && toDo) {
		todoList.push({
		nameAuthor: nameAuthor,
		dateCreated: date,
		toDo: toDo,
		// color: randomColor(),
		id: Date.now(),
		checked: false
		});
		addRow('table');
		// clearyRender();
		} else alert('Input all filds');
		console.log('todoList', todoList);
		clearInput();
};

const addRow = () => {
	let tableRef = document.getElementById('table');
	let newRow = tableRef.insertRow(-1);
	newRow.classList = 'row-height';

	let inputNameAuthor = document.createElement('input');
	inputNameAuthor.value = document.getElementById('name-author').value;
	inputNameAuthor.type = 'text';
	inputNameAuthor.className = 'input-field';
	// inputNameAuthor.disabled = 'condition';
	inputNameAuthor.setAttribute('disabled', '');
	let newCell = newRow.insertCell(0);
	newCell.appendChild(inputNameAuthor);

	let inputDateCreated = document.createElement('input');
	inputDateCreated.value = document.getElementById('date-created').value;
	inputDateCreated.type = 'data';
	inputDateCreated.className = 'input-field';
	inputDateCreated.setAttribute('disabled', '');
	let newCellIndOne = newRow.insertCell(1);
	newCellIndOne.appendChild(inputDateCreated);

	let inputToDo = document.createElement('input');
	inputToDo.value =document.getElementById('to-do').value;
	inputToDo.type = 'text';
	inputToDo.className = 'input-field';
	inputToDo.setAttribute('disabled', '');
	let newCellIndTwo = newRow.insertCell(2);
	newCellIndTwo.appendChild(inputToDo);

	let newCellIndThree = newRow.insertCell(3);

	let btnEdit = document.createElement('button');
	btnEdit.type = 'button';
	btnEdit.id = 'btn-edit';
	btnEdit.innerText = 'Edit';
	btnEdit.className = 'btn';
	btnEdit.setAttribute('onclick', 'editToDo()');

	let btnDel = document.createElement('button');
	btnDel.type = 'button';
	btnDel.id = 'btn-del';
	btnDel.innerText = 'Del';
	btnDel.className = 'btn';
	btnDel.setAttribute('onclick', 'delToDo()');

	newCellIndThree.appendChild(btnEdit);
	newCellIndThree.appendChild(btnDel);
	};

editToDo = () => {
	condition = !condition;
	console.log('before', condition);
	if(condition) {
		console.log(condition);
		inputNameAuthor.removeAttribute('disabled', '');
		inputDateCreated.removeAttribute('disabled');
		inputToDo.removeAttribute('disabled', '');
		document.getElementById('btn-edit').innerHTML='Save';

	} else {
		console.log(condition);
		inputNameAuthor.setAttribute('disabled', '');
		inputDateCreated.setAttribute('disabled', '');
		inputToDo.setAttribute('disabled', '');

		document.getElementById('btn-edit').innerHTML='Edit';
		
	}
};


delToDo = () => {
	condition = !condition;

	if(condition) {
		document.getElementById('btn-del').innerHTML='Back';
	} else {
		document.getElementById('btn-del').innerHTML='Del';
	}
};


// const clearyRender = () => {
// const list = document.querySelector(".cleary");
// list.innerHTML = '';
// };