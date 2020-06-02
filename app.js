'use strict'
const todos = [];

//追加時の処理
document.getElementById('add').addEventListener('click', ()=> {
  const table = document.getElementById("tbdoy");
  const todoText = document.getElementById('text').value;

  const todo = {
    task:  todoText,
    status: '作業中'
  }

  todos.push(todo);

  function displayTodos(){
    for(let i = 0 ; i < todos.length ; i++){
      console.log(todos[i]);
    }
  }
  displayTodos();

// 最後へ行を追加
  const addRow = table.insertRow(-1);

// ID
  const index = addRow.rowIndex;
  const IDcell = addRow.insertCell(-1);
  const Id = document.createElement('span');
  Id.textContent = index;
  IDcell.appendChild(Id);

// タスク
  const taskCell = addRow.insertCell(-1);
  const task = document.createElement('span');
  task.textContent = todo.task;
  taskCell.appendChild(task);

  // 状態
  const statusCell = addRow.insertCell(-1);
  const statusbutton = document.createElement("input"); 
  statusbutton.type = "button";  
  statusbutton.value = todo.status; 
  statusCell.appendChild(statusbutton);

  // 削除ボタン
  const celldelete = addRow.insertCell(-1);
  const deletebutton = document.createElement("input");  
  deletebutton.type = "button";  
  deletebutton.value = "削除"; 
  deletebutton.classList.add("delete");
  celldelete.appendChild(deletebutton);
});

