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
console.log(ok);