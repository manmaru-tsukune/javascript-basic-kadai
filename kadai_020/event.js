// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
const h2 = document.getElementById('text');

btn.addEventListener('click', () => {
  h2.textContent = "ボタンをクリックしました";
  console.log("文字を書き換えました");
});