/*jshint esversion: 6 */
const todoList = [];
let condition = false;

const parentTable = document.getElementById('table-head');
const parentElement = document.getElementById('div-for-table');

const clearInput = () => {
	document.getElementById('name-author').value = "";
	document.getElementById('date-created').value = "";
	document.getElementById('to-do').value = "";
};

const newTable = (todoList) => {
		const lastTable = document.getElementById('table-new');
		if(lastTable !== null) {
		lastTable.parentNode.removeChild(lastTable);
		}
		
		const newTable = document.createElement('table');
		newTable.border = '1';
		newTable.id = 'table-new';
		// newTable.border = '1';

		for(let i = 0; i < todoList.length; i++) {
			const tr = document.createElement('tr');
			tr.id = i;

			const td = document.createElement('td');
			const inputNameAuthor = document.createElement('input');
			inputNameAuthor.className = 'input-field';
			inputNameAuthor.value = todoList[i].nameAuthor;
			inputNameAuthor.setAttribute('disabled', '');
			td.appendChild(inputNameAuthor);

			const inputDateCreated = document.createElement('input');
			inputDateCreated.type = 'date';
			inputDateCreated.className = 'input-field';
			inputDateCreated.value = todoList[i].dateCreated;
			inputDateCreated.setAttribute('disabled', '');
			td.appendChild(inputDateCreated);	

			const inputToDo = document.createElement('input');
			inputToDo.className = 'input-field';
			inputToDo.value = todoList[i].toDo;
			inputToDo.setAttribute('disabled', '');
			td.appendChild(inputToDo);	

			const btnEdit = document.createElement('button');
			btnEdit.className = 'btn';
			btnEdit.id = i;
			btnEdit.innerText = 'Edit';
			btnEdit.onclick = function() {editTodo(btnEdit,
				btnDel, 
				tr, 
				inputNameAuthor, 
				inputDateCreated, 
				inputToDo)};

			const btnDel = document.createElement('button');
			btnDel.className = 'btn';
			btnDel.id = 'del';
			btnDel.innerText = 'Delete';
			btnDel.onclick = function() {delTodo(btnEdit, 
				btnDel, 
				tr,
				inputNameAuthor, 
				inputDateCreated, 
				inputToDo)};

			td.appendChild(btnEdit);
			td.appendChild(btnDel);

			tr.appendChild(td);

			newTable.appendChild(tr);
		}
		parentTable.insertAdjacentElement('afterend', newTable);
};

 function editTodo(btnEdit, 
	btnDel, 
	tr, 
	inputNameAuthor, 
	inputDateCreated, 
	inputToDo) {

	condition = !condition;
	const i = tr.id;

	if(condition) {
		inputNameAuthor.removeAttribute('disabled', '');
		inputDateCreated.removeAttribute('disabled', '');
		inputToDo.removeAttribute('disabled', '');
		btnEdit.innerHTML='Save';
		btnDel.innerHTML='Back';

	} else {
		todoList[i].nameAuthor = inputNameAuthor.value;
		todoList[i].dateCreated = inputDateCreated.value;
		todoList[i].toDo = inputToDo.value;

		inputNameAuthor.setAttribute('disabled', '');
		inputDateCreated.setAttribute('disabled', '');
		inputToDo.setAttribute('disabled', '');
		btnEdit.innerHTML='Edit';
		btnDel.innerHTML='Delete';
		console.log('after edit', todoList);
	}
}

function delTodo(btnEdit, 
	btnDel, 
	tr,
	inputNameAuthor, 
	inputDateCreated, 
	inputToDo) { 

	const i = tr.id;
	condition = !condition;

	if(!condition) {
		inputNameAuthor.value = todoList[i].nameAuthor;
		inputDateCreated.value = todoList[i].dateCreated;
		inputToDo.value = todoList[i].toDo;

		inputNameAuthor.setAttribute('disabled', '');
		inputDateCreated.setAttribute('disabled', '');
		inputToDo.setAttribute('disabled', '');

		btnEdit.innerHTML='Edit';
		btnDel.innerHTML='Delete';

		console.log('back', todoList);	
	} else {
		todoList.splice(i,1);
		condition = !condition;
		console.log('after del', todoList);
	}

	newTable(todoList);
}

let arrAuthorForSort = [];
const getSortTodo = (todoList) => {

	// const tableForSort = document.getElementById('table-new')[0];
	// const rows = [];

	// for(let i = 0; tableForSort.children.length - 1; i >=0 ) {

	// }


	for(let i = 0; i < todoList.length; i++) {
		arrAuthorForSort.push(todoList[i].nameAuthor);
		console.log('arrAuthorForSort', arrAuthorForSort);
		console.log('todoList.nameAuthor', todoList[i].nameAuthor);
	}
};

add.onclick = () => {
	let nameAuthor = document.getElementById('name-author').value;
	let date = document.getElementById('date-created').value;
	let toDo = document.getElementById('to-do').value;

	// console.log('nameAuthor', nameAuthor);
	// console.log('date', date);
	// console.log('toDo', toDo);

	if(nameAuthor && date && toDo) {
		todoList.push({
		nameAuthor: nameAuthor,
		dateCreated: date,
		toDo: toDo,
		id: Date.now(),
		checked: false
		});
		newTable(todoList);
	} 
		else alert('Input all filds');
		console.log('todoList', todoList);
		clearInput();

		getSortTodo(todoList);
		console.log('arrAuthorForSort', arrAuthorForSort);
};
