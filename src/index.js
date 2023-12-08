import $ from './utils/selector.js';
import createNewItem from './modules/createNewItem.js';
import checkListCount from './utils/checkListCount.js';
const listArray = [];

const handleSubmit = (e) => {
  e.preventDefault();

  const $newInput = $('#new-todo-title');
  createNewItem($newInput.value, listArray.length);
  listArray.push($newInput.value);
  $newInput.value = '';
};

$('.todo-form').addEventListener('submit', handleSubmit);

const handleClick = (e) => {
  const indexNum = e.target.parentElement.parentElement.dataset['index'];
  if (!indexNum) return;

  if (e.target.classList.contains('toggle')) {
    $(`[data-index="${indexNum}"]`).classList.toggle('completed');
    $(`[data-index="${indexNum}"] > div > input`).toggleAttribute('checked');
  }
  if (e.target.classList.contains('destroy')) {
    $(`[data-index="${indexNum}"]`).remove();
    checkListCount();
  }
};

$('.todo-list').addEventListener('click', handleClick);
