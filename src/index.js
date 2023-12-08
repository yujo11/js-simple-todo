import $ from './utils/selector.js';
import createNewItem from './modules/createNewItem.js';
import checkListCount from './utils/checkListCount.js';
const listArray = [];

const handleSubmit = (e) => {
  e.preventDefault();

  const $newInput = $('#new-todo-title');
  const newItem = createNewItem($newInput.value, listArray.length);
  listArray.push(newItem);
  $newInput.value = '';
  checkListCount();
};

$('.todo-form').addEventListener('submit', handleSubmit);

const handleCheckBoxClick = (e) => {
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

$('.todo-list').addEventListener('click', handleCheckBoxClick);

const handleFilterClick = (e) => {
  const lists = $('.todo-list').children;
  if (e.target.classList.contains('all')) {
    for (let i = 0; i < lists.length; i++) {
      lists[i].style.display = 'block';
    }
  }
  if (e.target.classList.contains('active')) {
    for (let i = 0; i < lists.length; i++) {
      lists[i].classList.contains('completed')
        ? (lists[i].style.display = 'none')
        : (lists[i].style.display = 'block');
    }
  }
  if (e.target.classList.contains('completed')) {
    for (let i = 0; i < lists.length; i++) {
      lists[i].classList.contains('completed')
        ? (lists[i].style.display = 'block')
        : (lists[i].style.display = 'none');
    }
  }
};

$('.filters').addEventListener('click', handleFilterClick);

$('.todo-list').addEventListener('dblclick', () => {
  console.log('hi');
});
