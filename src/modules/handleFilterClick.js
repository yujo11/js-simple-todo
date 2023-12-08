import $ from '../utils/selector.js';
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

export default handleFilterClick;
