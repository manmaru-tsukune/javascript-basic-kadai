// btnというidを持つHTML要素を取得し、定数に代入する

const btn = document.getElementById('btn');
const h2 = document.getElementById('text');

btn.addEventListener('click', () => {
 setTimeout(() => {
  h2.textContent="ボタンをクリックしました";
}, 2000);
  console.log("クリックしました（2秒後 / 非同期）");
});