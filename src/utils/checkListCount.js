import $ from './selector.js';
const checkListCount = () => {
  $('.todo-count > strong').textContent = $('.todo-list').childElementCount;
};

export default checkListCount;
