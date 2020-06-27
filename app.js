{
  'use strict'
  const todos = [];
  const table = document.getElementById('tbdoy');
  const all = document.getElementById('all');
  const prog = document.getElementById('prog');
  const comp = document.getElementById('comp');
  const btn = document.getElementById('target');
  const btnList = btn.hyouka;

  //追加時の処理
  document.getElementById('add').addEventListener('click', () => {
    const todoText = document.getElementById('text');
    const todo = {
      task: todoText.value,
      status: '作業中'
    }

    if (!(todoText.value)) {
      alert('タスクを打ち込んでください');
      return
    }

    todos.push(todo);

    switch (btnList.value) {
      case 'すべて':
        displayTodos(todos);
        break
      case '作業中':
        displayTodos(filterTodos('作業中'));
        break
      case '完了':
        displayTodos(filterTodos('完了'));
        break
    }

    todoText.value = '';
  });

  const displayTodos = todos => {
    // 全行削除
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }

    todos.forEach((todo, index) => {
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
  const deleteRow = index => {
    todos.splice(index, 1);
    displayTodos(todos);
  }

  const createDelete = index => {
    const deletebutton = document.createElement('input');
    deletebutton.type = 'button';
    deletebutton.value = '削除';
    deletebutton.addEventListener('click', () => {
      deleteRow(index);
    });
    deletebutton.classList.add('delete');
    return deletebutton;
  }

  const createStatus = todo => {
    const statusbutton = document.createElement('input');
    statusbutton.type = 'button';
    statusbutton.value = todo.status;
    // ステータス変更
    statusbutton.addEventListener('click', () => {
      if (todo.status === '作業中') {
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
  // ボタンすべて
  all.addEventListener('change', () => {
    displayTodos(todos)
  });

  // ボタン作業中
  prog.addEventListener('change', () => {
    displayTodos(filterTodos('作業中'));
  });
  //ボタン完了
  comp.addEventListener('change', () => {
    displayTodos(filterTodos('完了'));
  });

  // フィルター
  const filterTodos = text => todos.filter(todo => {
    return todo.status === text;
  })
}
