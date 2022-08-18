let number = 0;
document.getElementById('add-btn').addEventListener('click',function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    ++number;

    const tableBody = document.getElementById('content-container');
    const tableContent = document.createElement('tr');

    tableContent.innerHTML = `
    <tr>
      <td>${number}</td>
      <td>${inputText}</td>
      <td><button class="delete-btn bg-red-500 px-2 py-1 text-white font-semibold rounded-lg">Delete</button>
            <button class="done-btn bg-green-500 px-2 py-1 text-white font-semibold rounded-lg">Done</button>
        </td>
    </tr>
    `;
    tableBody.appendChild(tableContent);
    inputField.value = '';

    // delete button 
    const deleteBtn = document.getElementsByClassName('delete-btn');
    for(let dltBtn of deleteBtn){
        dltBtn.addEventListener('click',function(event){
            event.target.parentNode.parentNode.style.display ='none';
        })
    }

    //done button 
    const doneBtns = document.getElementsByClassName('done-btn');
    for(let doneBtn of doneBtns){
        doneBtn.addEventListener('click',function(event){
            event.target.parentNode.parentNode.style.textDecoration = "line-through" ;
        })
    }
})