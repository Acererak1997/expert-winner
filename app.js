{
  'use strict'
  const todos = [];
  const table = document.getElementById("tbdoy");
  const all = document.getElementById('all');
  const prog = document.getElementById('prog');
  const comp = document.getElementById('comp');
  
  //追加時の処理
  document.getElementById('add').addEventListener('click', ()=> {
    const todoText = document.getElementById('text').value;
    const todo = {
      task:  todoText,
      status: "作業中"
    }
    todos.push(todo);
    if(all.checked){
      displayTodos(todos);
    }
    if(prog.checked){
      const progress = todos.filter(todo =>{
        return todo.status === '作業中'
      })
      displayTodos(progress);
    }
    if(comp.checked){
      const complete = todos.filter(todo =>{
        return todo.status === '完了'
      })
      displayTodos(complete)
    }
    // displayTodos(todos);
  });
  
  function displayTodos(todos){
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
      const statusBtn = createStatus(todo);
      statusCell.appendChild(statusBtn);
  
      // 削除ボタン
      const celldelete = addRow.insertCell(-1);
      const removebutton = createDelete(index);
      celldelete.appendChild(removebutton);
    });
  }
  function deleteRow(index) {
    todos.splice(index, 1);
    displayTodos(todos);
  }

  function createDelete(index) {
    const deletebutton = document.createElement("input");  
    deletebutton.type = "button";  
    deletebutton.value = "削除"; 
    deletebutton.addEventListener('click', ()=>{
      deleteRow(index);
    });
    deletebutton.classList.add("delete");
    return deletebutton;
  }

  function createStatus(todo) {
    const statusbutton = document.createElement("input"); 
    statusbutton.type = "button";  
    statusbutton.value = todo.status;
    // ステータス変更
    statusbutton.addEventListener('click', () =>{
      if(todo.status === '作業中'){
        todo.status = '完了';
        statusbutton.value = todo.status;
      } else {
        todo.status = '作業中';
        statusbutton.value = todo.status;
      }
    });
    return statusbutton
  };

   // ラジオボタンの処理
   //  ボタンすべて
   all.addEventListener('change', ()=>{
     displayTodos(todos);
    });

  // ボタン作業中
  prog.addEventListener('change', ()=>{
    const filterProg = todos.filter(todo => {
      return todo.status == '作業中';
    })
    displayTodos(filterProg);
  });
  //ボタン完了
  comp.addEventListener('change', ()=>{
    const filterComp = todos.filter(todo => {
      if(todo.status === '完了'){
        return true
      } else {
        return false
      }
    })
    displayTodos(filterComp);
  });
}
