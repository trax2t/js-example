import JSConfetti from 'js-confetti'
import coinico from "./assets/coin.png";
import billico from "./assets/bill.png";

const jsConfetti = new JSConfetti();
const coin_btn = document.getElementById("btncoin");
const bill_btn = document.getElementById("btnbill");
const wallet_img = document.getElementById("wallet");
const min = Math.ceil(300);
const max = Math.floor(1500);
const targetRich = Math.floor(Math.random()*(max-min)+min);
console.log(`targetRich=${targetRich}`);

function updateMoney(value){
    const money= document.getElementById('money');
    const currentValue = parseInt(money.textContent);

    let newValue = currentValue +value;
    money.textContent = newValue;

    if(newValue > targetRich){
      jsConfetti.addConfetti();
    }
}

coin_btn.addEventListener("click",function() {
    let iconcoin = `<img class="icon" src="${coinico}" />`
    wallet_img.insertAdjacentHTML('beforeend',iconcoin);
    updateMoney(10);
});

bill_btn.addEventListener('click',function () {
    let iconbill = `<img class="icon" src="${billico}" />`
    wallet_img.insertAdjacentHTML('beforeend',iconbill);
    updateMoney(100);
});
