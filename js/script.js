/*jshint esversion: 6 */
let todoList = [];
const color = ['red', 'pink', 'green', 'yellow', 'blue', 'lightblue']; // рандомные цвета

const randomColor = () => {
    const i =  Math.round(Math.random() * 6);
    return color[i];
};

add.onclick = (divBtn) => {
	let nameAuthor = document.getElementById('name-author').value;
	let date = document.getElementById('date-created').value;
	let toDo = document.getElementById('to-do').value;

	if(nameAuthor && date && toDo) {
		todoList.push({
			nameAuthor: nameAuthor,
			dateCreated: date,
			toDo: toDo,
			color: randomColor(),
			id: Date.now(),
			checked: false
		});
		addRow('table');
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
	let newCell = newRow.insertCell(0);
	let newText = document.createTextNode(document.getElementById('name-author').value);
	newCell.appendChild(newText);

	let newCellIndOne = newRow.insertCell(1);
	let newTextIndOne = document.createTextNode(document.getElementById('date-created').value);
	newCellIndOne.appendChild(newTextIndOne);

	let newCellIndTwo = newRow.insertCell(2);
	let newTextIndTwo = document.createTextNode(document.getElementById('to-do').value);
	newCellIndTwo.appendChild(newTextIndTwo);
	
	let newCellIndThree = newRow.insertCell(3);
	let divBtn = document.getElementById('div-btn');
	divBtn.classList.remove('hidden');
	divBtn.className = 'div-btn';
	newCellIndThree.appendChild(divBtn);
};
