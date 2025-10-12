function add(a, b, c, d) { /*「関数はオブジェクト」であり、オブジェクトの中身にはたくさん情報が入っているが、そこにaddという変数を用意して代入しているに過ぎない。*/
  return a + b;
}
console.dir(add);
console.log(add.name);
console.log(add.length);
const newAdd = add; /*新しい変数を用意して、その変数の中にaddを入れることもできる。*/
console.log(newAdd(3, 4));