'use strict'

//追加時の処理
document.getElementById('add').addEventListener('click', ()=> {
  let todos = [];
  let table = document.getElementById("table");
  const todoText = document.getElementById('text').value;

  let todo = {
    task: '',
    status: '作業中'
  }
  todo.task = todoText;
  todo.status = '作業中';
  todos.push(todo);
  console.log(todos)

// 最後へ行を追加
  const addRow = table.insertRow(-1);

// ID
  const IDcell = addRow.insertCell(-1);
  const Id = document.createElement('span');
  Id.textContent =  table.rows.length;
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
  statusbutton.id = "prog";  
  statusbutton.value = todo.status; 
  statusCell.appendChild(statusbutton);

  // 削除ボタン
  const celldelete = addRow.insertCell(-1);
  const deletebutton = document.createElement("input");  
  deletebutton.type = "button";  
  deletebutton.id = "delete";  
  deletebutton.value = "削除"; 
  celldelete.appendChild(deletebutton);
});