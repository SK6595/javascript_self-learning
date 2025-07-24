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
ok = 1 !== 2;
ok = 1 == 1;
ok = 1 === '1';
ok = 1 != '2';

const coffee1 = { name: 'Cafe Latte' };
const coffee2 = { name: 'Cafe Latte' };
const coffee3 = coffee1;
ok = coffee1 === coffee3;
ok = coffee1.name === coffee2.name;
const fruits1 = ['apple', 'banana'];
const fruits2 = ['apple', 'banana'];
ok = fruits1 === fruits2;

ok = 1 > 0;
ok = 'a' < 'b';
ok = 'A' < 'a';
ok = 100;
ok = {};
ok = 'false';
if (ok) {
  // console.log('OK!');
} else {
  console.log('NO!');
}
ok = false && true;
ok = false || false;
ok = 'hello' && 'hi';
ok = '' || 'hi';
const userInput = '';
const userName = userInput || 'User';
const x = 15;
ok = x > 10 && x < 20;
ok = x === 10 || (x > 12 && userName);
if (ok) {
  // console.log('OK!');
} else {
  console.log('NO!');
}
ok = !true;
ok = !'hello';
ok = !x;
ok = !!x;

const hello = 'hello2';
{ //ブロック文（{ })は、複数の文や宣言を一つにまとめる文になる。
  const hello = 'hello1';
}
ok = false
ok = ok ? 'OK' : 'NO'; //三項演算子もif文のように条件分岐することができる。三項演算子は値を返すif文みたいな感じ。

function vegetableColor(vegetable) {
  switch (vegetable) { //switch文は、if文とは違う条件分岐として使える文になる。
    case 'tomato': { //コロンを打った後に、複数の文や宣言を書くことができる。case文は何個も繋げることができる。
      const message = 'tamato is red!';
      console.log(message);
      break; //関数の中であれば、breakeではなく、returnでも全く同じ意味になる。
    }
    case 'carrot':
    case 'pumpkin': { //caseを2つ書くというテクニックもある。
      const message = `${vegetable} is orange!`
      console.log(message);
      break;
    }
    case 'onion': {
      const message = 'onion is white!'
      console.log(message);
      break;
    }
    default: { //defaultはどこに書いても良い。
      const message = 'not found'
      console.log(message);
    }
  }
  // if (vegetable === 'tamato') {
  //   console.log('tamato is red!');
  // } else if (vegetable === 'pumpkin') {
  //   console.log('pumpkin is orange!');
  // } else if (vegetable === 'onion') {
  //   console.log('onion is white!');
  // }
}
vegetableColor('tomato');