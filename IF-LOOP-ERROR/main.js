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
console.log(ok);