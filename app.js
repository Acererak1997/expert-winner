{
  'use strict'
  const todos = [];
  const table = document.getElementById("tbdoy");
  
  //追加時の処理
  document.getElementById('add').addEventListener('click', (event)=> {
    event.preventDefault();
    let todoText = document.getElementById('text').value;
    const todo = {
      task:  todoText,
      status: '作業中'
    }
    if(todo){
      todos.push(todo);
      displayTodos()
    }
  });
  
  
  function displayTodos(){
    // 全行削除
    while(table.firstChild){
      table.removeChild(table.firstChild);
    }
    todos.forEach((todo, index) =>{
      // ID&行追加
      const addRow = table.insertRow(-1);
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
      deletebutton.addEventListener('click', ()=>{
        deleteRow(index);
      });
      celldelete.appendChild(deletebutton);
    });
  }
}