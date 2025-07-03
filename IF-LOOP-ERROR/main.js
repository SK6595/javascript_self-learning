let ok = true;
let maybeOk = false;
if (ok) {
  // console.log('OK!');
} else if (maybeOk) {
  console.log('maybe OK...');
} else {
  console.log('NO!');
}
ok = 1 === 1;
ok = 'hello' === 'hello';
ok = 1 !== 2; /*「!==」は、左の項と右の項が違うとtrueになる。*/
ok = 1 == 1;
ok = 1 === '1'; /*基本的に同じかどうかを比べる時は、「===」演算子を使うようにする*/
ok = 1 != '2'; /*基本的に異なるかどうかを比べる時は、「!==」演算子を使うようにする*/


const coffee1 = { name: 'Cafe Latte' };
const coffee2 = { name: 'Cafe Latte' };
const coffee3 = coffee1;
ok = coffee1 === coffee3; /*trueになる*/
ok = coffee1.name === coffee2.name;
const fruits1 = ['apple', 'banana']; /*配列もオブジェクトになる*/
const fruits2 = ['apple', 'banana'];
ok = fruits1 === fruits2; /*オブジェクトが2回生成されているためfalseになる*/

ok = 1 > 0;
ok = 'a' < 'b'; /*辞書順としては、bの方が後に来るため、bの方が数字的に大きくなる*/
ok = 'A' < 'a'; /*辞書順としては、aの方が後に来るため、aの方が数字的に大きくなる*/
ok = 100;
ok = {};
ok = 'false'; /*文字列のfalseはあくまで文字列のため「Truthy」となる*/
if (ok) {
  // console.log('OK!');
} else {
  console.log('NO!');
}
ok = false && true; /*論理積演算子は、左側が「Truthy」だったら右側の値を返し、左側の値が「Falsy」だったら左側の値を返す。（論理積演算子の厳密な定義）*/
ok = false || false;
ok = 'hello' && 'hi';
ok = '' || 'hi';
const userInput = '';
const userName = userInput || 'User'; /*左側の値がnull、undefined、空文字、0などの値だった場合に、デフォルトの値で右側の値にするという書き方は、OR演算子で非常によくある。*/
console.log(userName);