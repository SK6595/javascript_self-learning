// 最終的に表示したい内容を全てバックティック（バッククォート）で囲む。
// 式・値・変数・定数など、文字列以外のコードは、${}で囲む。
document.querySelector('#colorText').textContent = `カラーコード：${document.querySelector('#colorPicker').value}`;