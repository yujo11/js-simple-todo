import $ from './utils/selector.js';
import createNewItem from './modules/createNewItem.js';
import checkListCount from './utils/checkListCount.js';
import handleFilterClick from './modules/handleFilterClick.js';
import handleCheckBoxClick from './modules/handleCheckBoxClick.js';
const listArray = []; // 더미 배열

const handleSubmit = (e) => {
  e.preventDefault();

  // 새 li 생성
  const newItem = createNewItem($('#new-todo-title').value, listArray.length);
  listArray.push(newItem);

  $('#new-todo-title').value = '';

  checkListCount(); // 개수 체크
};

$('.todo-form').addEventListener('submit', handleSubmit);

$('.todo-list').addEventListener('click', handleCheckBoxClick);

$('.filters').addEventListener('click', handleFilterClick);

$('.todo-list').addEventListener('dblclick', () => {
  console.log('hi');
});
