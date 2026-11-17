// ID「menu」のdivを定数「menu」に入れている
const menu = document.querySelector('#menu');

// 要素と要素の間にカンマを忘れないこと
const lists = [
  'strawberry.jpg',
  'lime.jpg',
  'mango.jpg',
  'lemon.jpg',
  'fig.jpg',
  'apple.jpg',
];
// console.log(lists);

// 挿入したいコンテンツ内容をテンプレート文字列で定数「content」にまとめている
// 定数「content」は 「images」フォルダー内に保存している「strawberry.jpg」というイチゴジュースの画像をdivに入れておくという内容
const content = `<div><img src="images/${lists[0]}" alt=""></div>
  <div><img src="images/${lists[1]}" alt=""></div>
  <div><img src="images/${lists[2]}" alt=""></div>
  <div><img src="images/${lists[3]}" alt=""></div>
  <div><img src="images/${lists[4]}" alt=""></div>
  <div><img src="images/${lists[5]}" alt=""></div>
`;

// textContentを使って文字列などを表示するとすべての内容がそのまま文字列として表示されていてHTMLタグとして認識されない
// menu.textContent = content;

// insertAdjacentHTMLメソッドは HTMLを挿入したい要素を指定し カッコの中には第一引数にHTMLの挿入位置、第二引数に挿入したい内容を指定する
// HTMLを挿入したい要素は定数「menu」となる
// 挿入位置は文字列としての扱いになるので シングルクォーテーションで囲む必要がある
// 挿入内容は定数「content」であり 文字列ではなく定数名を呼び出すのでシングルクォーテーションは不要となる
menu.insertAdjacentHTML('beforeend', content);