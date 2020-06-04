{
  'use strict'
  const todos = [];
  const table = document.getElementById("tbdoy");
  
  //追加時の処理
  document.getElementById('add').addEventListener('click', (event)=> {
    const todoText = document.getElementById('text').value;
    const todo = {
      task:  todoText,
      status: '作業中'
    }
    todos.push(todo);
    displayTodos()
  });
  
  
  function displayTodos(){
    // 全行削除
    while(table.firstChild){
      table.removeChild(table.firstChild);
    }
    todos.forEach((todo, index) =>{
      // ID&行追加
      const addRow = table.insertRow(-1);
      const idCell = addRow.insertCell(-1);
      const id = document.createElement('span');
      id.textContent = index;
      idCell.appendChild(id);
  
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
  }
}