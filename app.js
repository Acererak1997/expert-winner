'use strict'

// 追加
function addRow() {
  const table = document.getElementById("table");
  const row = table.insertRow(-1);
  
  let cell1 = row.insertCell(-1);
  let cell2 = row.insertCell(-1);
  let cell3 = row.insertCell(-1);
  let cell4 = row.insertCell(-1);
  let tIndex = table.rows.length-1;
  
  let text = document.getElementById("text").value;
  cell1.innerHTML = '<span class="index">' + tIndex +'</span>' ; 
  cell2.innerHTML = text; 
  cell3.innerHTML = '<button  class="prog" value="作業" onclick="change()">作業中</button>'
  cell4.innerHTML = '<button id="delete" onclick="deleteRow(this)">削除</button>'; 
  document.getElementById("text").value = "";
}

// リスト削除&番号の更新
// function deleteRow(todo){
//   let todoTr = todo.parentNode.parentNode;
//   let tab = todoTr.parentNode;
//   if(tab)
//   tab.deleteRow(todoTr.sectionRowIndex);

//   let indexNumber = document.getElementsByTagName("span");
//   if (!indexNumber)
//   return false;
  
//   let num = 1;
//   for (let i = 0; i < indexNumber.length; i++){
//     if (indexNumber[i].className.match("index"))
//     indexNumber[i].innerHTML = num++;
//   }
// }


// // タスク状態の変更
// function change(e){
//   let todo = event.target.innerHTML;
//   console.log(todo);
//   if(todo === "作業中"){
//     todo.document.write = "完了";
//   }
// }

// タブへの表示