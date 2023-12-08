import $ from '../utils/selector.js';

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

  return li;
};

export default createNewItem;
