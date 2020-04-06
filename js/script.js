/*jshint esversion: 6 */
let todoList = [];
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

		for(let i = 0; i < todoList.length; i++) {
			const tr = document.createElement('tr');
			tr.id = i;
	
			const td = document.createElement('td');
			const inputNameAuthor = document.createElement('input');
			inputNameAuthor.className = 'input-field';
			inputNameAuthor.value = todoList[i].nameAuthor;
			td.appendChild(inputNameAuthor);

			const inputDateCreated = document.createElement('input');
			inputDateCreated.className = 'input-field';
			inputDateCreated.value = todoList[i].dateCreated;
			td.appendChild(inputDateCreated);	

			const inputToDo = document.createElement('input');
			inputToDo.className = 'input-field';
			inputToDo.value = todoList[i].toDo;
			td.appendChild(inputToDo);	

			const btnEdit = document.createElement('button');
			btnEdit.className = 'btn';
			btnEdit.innerText = 'Edit';

			const btnDel = document.createElement('button');
			btnDel.className = 'btn';
			btnDel.innerText = 'Delete';

			td.appendChild(btnEdit);
			td.appendChild(btnDel);

			tr.appendChild(td);

			newTable.appendChild(tr);
		}
		parentTable.insertAdjacentElement('afterend', newTable);
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
};
