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
ok = 1 === '1';
console.log(ok);