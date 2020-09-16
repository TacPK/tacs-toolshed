// Add Item
const addItem = () => {
  let toDoItemValue = document.getElementById('toDoItem').value;
  let error = document.getElementById('error');

  if (toDoItemValue == '') {
    error.innerHTML = "Don't submit an empty item!";
    error.style.display = 'block';
  } else {
    error.style.display = 'none';

    let presentListItems = document.getElementById('toDoList').innerHTML;

    let newListItems =
      presentListItems +
      '<li>' +
      toDoItemValue +
      ' <button onclick="completeItem(this)" class="success" title="Item completed!"><span class="fa fa-check"></span></button><button onClick="deleteItem(this)" class="failure" title="Delete this item"><span class="fa fa-trash"></span></button></li>';

    document.getElementById('toDoList').innerHTML = newListItems;

    toDoItemValue = '';
  }
};

const clearForm = () => {
  document.getElementById('toDoItem').value = '';
};

const btn = document.getElementById('add');
btn.addEventListener('click', () => {
  addItem();
  clearForm();
});

// Complete Item
const completeItem = (item) => {
  let completedItem = (item.parentElement.style.textDecoration =
    'line-through');
  completedItem;
};

// Delete Item
const deleteItem = (item) => {
  item.parentElement.remove();
};
