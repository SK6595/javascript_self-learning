// チェックボックスの要素を「isAgreed」、ボタンを「btn」という定数にそれぞれ格納
const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', () => {
  btn.disabled = !isAgreed.checked;
// // チェックボックスにチェックが入っているなら
// if (isAgreed.checked) {
//   // ボタンの無効化をなしにする
//   btn.disabled = false;
//   // そうじゃないなら（チェックが入っていないなら）
// } else {
//   // ボタンを無効化する
//   btn.disabled = true;
// }
});