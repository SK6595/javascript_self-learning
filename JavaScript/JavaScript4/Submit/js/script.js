// チェックボックスの要素を「isAgreed」、ボタンを「btn」という定数にそれぞれ格納
const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', () => {
  console.log(isAgreed.checked);
});