import $ from './utils/selector.js';
const listArray = [];

const checkListCount = () => {
  $('.todo-count > strong').textContent = $('.todo-list').childElementCount;
};

const createNewItem = (value, index) => {
  const li = document.createElement('li');
  li.setAttribute('data-index', String(index));

  const div = document.createElement('div');
  div.classList.add('view');

  const input = document.createElement('input');
  input.classList.add('toggle');
  input.setAttribute('type', 'checkbox');

  const label = document.createElement('label');
  label.classList.add('label');
  label.textContent = value;

  const button = document.createElement('button');
  button.classList.add('destroy');

  div.append(input, label, button);
  li.append(div);
  $('.todo-list').append(li);

  checkListCount();
};

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
