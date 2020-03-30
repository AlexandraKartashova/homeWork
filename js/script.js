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
			color: randomColor(),
			id: Date.now(),
			checked: false
		});
		addRow('table');
		// clearyRender();
		// showTodo(todoList);
	} else alert('Input all filds');
	console.log('todoList', todoList);

	document.getElementById('name-author').value = "";
	document.getElementById('date-created').value = "";
	document.getElementById('to-do').value = "";
};

const addRow = () => {
	let tableRef = document.getElementById('table');
	let newRow = tableRef.insertRow(-1);
	let newCell = newRow.insertCell(0);
	let newText = document.createTextNode(document.getElementById('name-author').value);
	newCell.appendChild(newText);

	let newCellIndOne = newRow.insertCell(1);
	let newTextIndOne = document.createTextNode(document.getElementById('date-created').value);
	newCellIndOne.appendChild(newTextIndOne);

	let newCellIndTwo = newRow.insertCell(2);
	let newTextIndTwo = document.createTextNode(document.getElementById('to-do').value);
	newCellIndTwo.appendChild(newTextIndTwo);

	let btnEdit = document.createElement('btn-edit');
	btnEdit.className = 'btn';
	let newCellIndThree = newRow.insertCell(3);

	// let newRow_2 = tableRef.insertRow_2(2);
	// let newCell_2 = newRow.insertCell_2(2);
	// let newText_2 = document.createTextNode(document.getElementById('to-do').value);
	// newCell.appendChild(newText);
};


// const newItem = () => {
// 	let li = document.createElement('li');
// 	let toDo = document.getElementById("to-do").value;
// 	let item = document.createTextNode(toDo);
// 	li.appendChild(item);
// 	if((nameAuthor = '') || (date = '') || (toDo = '')) {
// 		alert('Input all filds');
// 	} else {
// 		document.getElementById('to-do-list').appendChild(li);
// 	}
// 	document.getElementById('name-author').value = '';
// 	document.getElementById('date-created').value = '';
// 	document.getElementById('to-do').value = '';

// 	console.log('item', item);
// 	console.log('li', li);
// };


// const showTodo = () => {

// };

// const clearyRender = () => {
//     const list = document.querySelector(".to-do-list");
//     list.innerHTML = '';
// };

// add.onclick = () => {
// 	// const inputValue = $('#new_item')[0].value;
// 	const nameAuthor = document.getElementById("name-author").value;
// 	const date = document.getElementById("date-created").value;
// 	const toDo = document.getElementById("to-do").value;

// 	console.log('nameAuthor', nameAuthor);
// 	console.log('date', date);
// 	console.log('to-do', toDo);
//     if(nameAuthor && date && toDo) {
//         todoList.push({
// 			nameAuthor: nameAuthor,
// 			dateCreated: date,
// 			toDo: toDo,
//             color: randomColor(),
//             id: Date.now(),
//             checked: false
//         });
//         clearyRender();
//         // showTodo(todoList);
// 		// $('#new_item')[0].value = '';
// 	} else alert('Input all filds');
// 	console.log('todoList', todoList);
// };