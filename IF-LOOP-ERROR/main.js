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
// vegetableColor('tomato');
let count = 0;
while (count < 10) { //while文は、丸括弧の後に好きな文を書くが、一般的には「ブロック文」を書くことが多い。丸括弧の中には「式」を入れることができる。
  console.log(count);
  console.log(count);
  console.log(count);
  console.log(count);
  console.log(count);
  console.log(count);
  count += 1;
}

let tomatoCount = 100;
do { //do-while文では、まずdoの後の「{}」が実行される。
  console.log('do-while: ', tomatoCount);
  tomatoCount += 1;
} while (tomatoCount < 10);

for (let pumpkinCount = 0, i = 0; pumpkinCount < 10; pumpkinCount += 1, i += 1){
  console.log(pumpkinCount, i);
} //「()」の後は何でも好きな文を書くことはできるが、一般的にはブロック文が取られる。「()」の中は、必ず2つセミコロンを取る。「(;;)」は、3つ式を取るという意味になる。
//letの中のカンマもlet宣言の一つになる。最後の式のカンマは、「カンマ演算子」になる。カンマ演算子は複数の式を1つの式にまとめるようなものになる。

const fruits = ['apple', 'banana', 'grape', 'orange', 'mango'];
for (let i = 0; i < fruits.length; i += 1) { //i < fruits.lengthと書くことで、配列の数を教えてくれる。
  // console.log(fruits[i]);
}
for (const fruit of fruits) { //for-of文は、配列をループするための文になる。あまり配列の中の値を書き換えることはないので、基本的にはconstで書くことがすごく一般的である。
  // console.log(fruit); //「fruit」の箇所は、他のfor文やwhile文とは違い、1回1回削除されているイメージで、毎回毎回ループごとに違うブロック文の中で実行している（使用している）というイメージを持つこと。
}
const coffee = {
  name: 'Cafe Latte',
  size: 350,
  isHot: true,
};
for (const key in fruits) { //「key」はnameやsizeなどのkeyを取っている。配列の場合は、for-of文を使用することの方が多い。
  console.log(key);
  console.log(fruits[key]);
}