/*jshint esversion: 6 */
let todoList = [];
const color = ['red', 'pink', 'green', 'yellow', 'blue', 'lightblue']; // рандомные цвета

const randomColor = () => {
    const i =  Math.round(Math.random() * 6);
    return color[i];
};

add.onclick = () => {
	let nameAuthor = document.getElementById('name-author').value;
	let date = document.getElementById('date-created').value;
	let toDo = document.getElementById('to-do').value;

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

	document.getElementById('name-author').value = "";
	document.getElementById('date-created').value = "";
	document.getElementById('to-do').value = "";
};

const addRow = () => {
	let tableRef = document.getElementById('table');
	let newRow = tableRef.insertRow(-1);
	newRow.classList = 'row-height';
	// newRow.style.backgroundColor = randomColor(); //меняет цвет строки
	const inputNameAuthor = document.querySelector('.name-author');
	cloneInputNameAuthor = inputNameAuthor.cloneNode(true);
	cloneInputNameAuthor.setAttribute('disabled', '');
	let newCell = newRow.insertCell(0);
	newCell.appendChild(cloneInputNameAuthor);

	const inputDateCreated = document.querySelector('.date-created');
	cloneInputDateCreated = inputDateCreated.cloneNode(true);
	cloneInputDateCreated.setAttribute('disabled', '');
	let newCellIndOne = newRow.insertCell(1);
	newCellIndOne.appendChild(cloneInputDateCreated);


	const inputToDo = document.querySelector('.to-do');
	cloneInputToDo = inputToDo.cloneNode(true);
	cloneInputToDo.setAttribute('disabled', '');
	let newCellIndTwo = newRow.insertCell(2);
	newCellIndTwo.appendChild(cloneInputToDo);
	
	let newCellIndThree = newRow.insertCell(3);

	let btnEdit = document.createElement('button');
	btnEdit.type = 'button';
	btnEdit.innerText = 'Edit';
	btnEdit.className = 'btn';
	btnEdit.setAttribute("onclick", "editToDo()");

	let btnDel = document.createElement('button');
	btnDel.type = 'button';
	btnDel.innerText = "Del";
	btnDel.className = 'btn';
	btnDel.setAttribute("onclick", "delToDo()");

	let btnSave = document.createElement('button');
	btnSave.type = 'button';
	btnSave.innerText = "Save";
	btnSave.className = 'btn-save';
	btnSave.setAttribute("onclick", "saveToDo()");

	newCellIndThree.appendChild(btnEdit);
	newCellIndThree.appendChild(btnDel);
	newCellIndThree.appendChild(btnSave);	
};

editToDo = (e) => {
	cloneInputNameAuthor.removeAttribute('disabled', '');
	cloneInputDateCreated.removeAttribute('disabled', '');
	cloneInputToDo.removeAttribute('disabled', '');	
	
};

saveToDo = () => {
	nameAuthor = document.getElementById('name-author').value;
	date = document.getElementById('date-created').value;
	toDo = document.getElementById('to-do').value;

	nameAuthor.setAttribute('disabled', '');
	date.setAttribute('disabled', '');
	toDo.setAttribute('disabled', '');	
} ;

delToDo = () => {
	console.log('dddddddddddd');

};
saveToDo = () => {
	console.log('ddfewfewfwefwefdddd');

};

// const clearyRender = () => {
//     const list = document.querySelector(".cleary");
//     list.innerHTML = '';
// };