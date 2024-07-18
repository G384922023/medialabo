/////////// 課題3-2 ここからプログラムを書こう
let ps1 = document.querySelectorAll('dl');
console.log(ps1);
let div = document.querySelector('div#result');
let ans = document.querySelector('#answer');
ans.addEventListener('click',print);


function print(){
  let b = document.querySelector ('select#Genre');
  let value_id = (b.selectedOptions['0'].value);
  console.log(value_id);
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + value_id + '.json';
  console.log(url);
  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}
function showResult(resp){ 
  let m = document.querySelectorAll('li');
  for(let i of m){
    i.remove();
  }
  m = document.querySelectorAll('p');
  for(let i of m){
    i.remove();
  }
  m = document.querySelectorAll('div#result>div');
  for(let i of m){
    i.remove();
  }
  let data = resp.data;
  if (typeof data === 'string') {
    data = JSON.parse (data);
  }
  let kaisu = parseInt(data. results.results_returned,10);
  console.log(kaisu);
  console.log(resp.data);

  for (let i = 0; i < kaisu; i++){
    let ul = document.createElement('div');
    let div = document.querySelector('div#result'); 
    let p = document.createElement('p');
    p.textContent = ('キャッチコピー: ' + data.results.shop[i].catch);
    ul.insertAdjacentElement ('beforeend',p);
    let p2 = document.createElement('p');
    p2.textContent = ('店名: ' + data.results.shop[i].name);
    ul.insertAdjacentElement ('beforeend',p2);
    let p3 = document.createElement('p');
    p3.textContent = ('予算: ' + data.results.shop[i].budget.name);
    ul.insertAdjacentElement ('beforeend',p3);
    let p4 = document.createElement('p');
    p4.textContent = ('個室' + data.results.shop[i].private_room);
    ul.insertAdjacentElement ('beforeend',p4);
    let p5 = document.createElement('p');
    p5.textContent = ('営業時間: ' + data.results.shop[i].open);
    ul.insertAdjacentElement ('beforeend',p5);
    let p6 = document.createElement('p');
    p6.textContent = ('アクセス: ' + data.results.shop[i].access);
    ul.insertAdjacentElement('beforeend',p6);
    let p7 = document.createElement('p');
    p7.textContent = ('URL: ' + data.results.shop[i].coupon_urls.pc);
    ul.insertAdjacentElement('beforeend',p7);
    div.insertAdjacentElement('beforeend',ul);
  }
}
function showError(){
  console.log(err);
}
function finish(){
  console.log('Ajax 通信が終わりました');
}
