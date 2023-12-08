import $ from './utils/selector.js';
import createNewItem from './modules/createNewItem.js';
import checkListCount from './utils/checkListCount.js';
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

const handleCheckBoxClick = (e) => {
  // 부모 li에 담긴 data-index 값 가져오기
  const indexNum = e.target.parentElement.parentElement.dataset['index'];
  if (!indexNum) return;

  const clickedTarget = e.target;

  switch (clickedTarget.className) {
    case 'toggle':
      // 해당 li 완료하기
      $(`[data-index="${indexNum}"]`).classList.toggle('completed');
      $(`[data-index="${indexNum}"] > div > input`).toggleAttribute('checked');
      break;

    case 'destroy':
      // 해당 li 삭제하기
      $(`[data-index="${indexNum}"]`).remove();
      checkListCount();
      break;

    default:
      break;
  }
};

$('.todo-list').addEventListener('click', handleCheckBoxClick);

const handleFilterClick = (e) => {
  const clickedTarget = e.target;
  if (!clickedTarget.tagName === 'LI') return;

  const lists = $('.todo-list').children;

  // 버튼에 따른 리스트 보이고 가리기
  if (clickedTarget.classList.contains('all')) {
    for (let i = 0; i < lists.length; i++) {
      lists[i].style.display = 'block';
    }
  }
  if (clickedTarget.classList.contains('active')) {
    for (let i = 0; i < lists.length; i++) {
      lists[i].classList.contains('completed')
        ? (lists[i].style.display = 'none')
        : (lists[i].style.display = 'block');
    }
  }
  if (clickedTarget.classList.contains('completed')) {
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
