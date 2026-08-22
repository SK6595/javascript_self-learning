// 最終的に表示したい内容を全てバックティック（バッククォート）で囲む。
// 式・値・変数・定数など、文字列以外のコードは、${}で囲む。
// document.querySelector('#colorText').textContent = `カラーコード：${document.querySelector('#colorPicker').value}`;

const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

text.textContent = `カラーコード：${color.value}`;

const colorBg = () => {
  text.textContent = `カラーコード：${color.value}`;
};

// カラーピッカーが変更されたら colorBgを発動させる
color.addEventListener('input', colorBg);

// 関数の中で「console.log」を使っており 何をするかの指示がある
// const message = (name, weather) => {
//   console.log(`${name}さん、こんにちは!今日は${weather}です。`);
// };
// message('Mana', 'いい天気');

// 関数では処理の結果だけ出したい その結果の使い道は後から指定したいという場合
const message = (name, weather) => {
  // 関数の中で処理を終わらせるなら「return」を使う必要はないが 関数の中で処理をした結果をどう利用したいかで「return」を使うかどうか考える
  // 関数の中で「return」と書くと それ以降の処理は実行されない
  return `${name}さん、こんにちは！今日は${weather}です。`;
};
console.log(message('Mana', 'いい天気'));
alert(message('達也', '雨'));