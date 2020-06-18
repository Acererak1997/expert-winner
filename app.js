{
  'use strict'
  const todos = [];
  const table = document.getElementById("tbdoy");
  
  //追加時の処理
  document.getElementById('add').addEventListener('click', ()=> {
    const todoText = document.getElementById('text').value;
    const todo = {
      task:  todoText,
      status: "作業中"
    }
    todos.push(todo);
    displayTodos(todos);
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
    displayTodos();
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
      const index = todos.indexOf(todo);
      console.log(index);
      if(statusbutton.textContent === '作業中'){
        todos[index].status = '完了';
        console.log(todo.status)
        // statusbutton.value = todos[index].status; 
      } else {
        todos[index].status = '作業中';
        console.log(todo.status)
        // statusbutton.value = todos[index].status; 
      }
    });
    return statusbutton
  };

  //  // ラジオボタンの処理
  //  //  ボタンすべて
  //  document.getElementById('all').addEventListener('change', ()=>{
  //   const filterItems = todos.filter(todo => {
  //     if(todo === '作業中' || '完了')
  //     return todos.splice();
  //   })
  //   console.log(filterItems);
  //   displayTodos(filterItems);
  //   });
  // // ボタン作業中
  // document.getElementById('prog').addEventListener('change', ()=>{
  //   const filterProg = todos.filter(todo => {
  //     return todo.status == '作業中';
  //   })
  //   console.log(filterProg);
  //   displayTodos(filterProg);
  // });
  // //ボタン完了
  // document.getElementById('comp').addEventListener('change', ()=>{
  //   const filterComp = todos.filter(todo => {
  //     if(todo.status === '完了'){
  //       return true
  //     } else {
  //       return false
  //     }
  //   })
  //   console.log(filterComp);
  //   displayTodos(filterComp);
  // });
}