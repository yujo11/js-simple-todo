import $ from '../utils/selector.js';

const createInput = (indexNum) => {
  const input = document.createElement('input');
  input.classList.add('edit');

  input.value = $(`[data-index="${indexNum}"] > div > label`).textContent;
  $(`[data-index="${indexNum}"]`).append(input);
};

const handleKeyDown = (e) => {
  const indexNum = e.target.parentElement.dataset['index'];
  if (e.key === 'Enter') {
    $(`[data-index="${indexNum}"] > div > label`).textContent = e.target.value;
    $(`[data-index="${indexNum}"]`).classList.remove('editing');
    $(`[data-index="${indexNum}"] .edit`).remove();
  }
  if (e.key === 'Escape') {
    $(`[data-index="${indexNum}"]`).classList.remove('editing');
    $(`[data-index="${indexNum}"] .edit`).remove();
  }
};
const handleDoubleClick = (e) => {
  const clickedTarget = e.target;
  if (!clickedTarget.tagName === 'LABEL') return;

  const indexNum = clickedTarget.parentElement.parentElement.dataset['index'];
  $(`[data-index="${indexNum}"]`).classList.toggle('editing');

  createInput(indexNum);

  $(`[data-index="${indexNum}"] .edit`).addEventListener('keydown', handleKeyDown);
};

export default handleDoubleClick;
