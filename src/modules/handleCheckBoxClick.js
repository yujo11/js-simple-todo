import $ from '../utils/selector.js';
import checkListCount from '../utils/checkListCount.js';

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

export default handleCheckBoxClick;
