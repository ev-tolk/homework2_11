let inputData = document.getElementById('moneyEnter');
let newInputData = "";
let sum = document.getElementById('result');
let result = document.getElementById('calculater');
let credits = document.getElementById('result');
let newMoney = document.getElementById('money_shop');
let newMoneyItem = "";
let arr = [];



//let newP = document.createElement('p');
//newP.className = 'sum';

inputData.addEventListener('keypress', function(kePressed){
    if(kePressed.which == 13){
        newInputData = Number(this.value); 
    }
})

newMoney.addEventListener('keypress', function(kePressed){
    if(kePressed.which == 13){
        newMoneyItem = Number(this.value); 
        arr.push(newMoneyItem);
        let form = document.getElementById('history').getElementsByTagName('form');
        form[0].innerHTML = '';
        for(let i = 0; i < arr.length; i++){
            form[0].innerHTML += `
            <div class="money${i}">${arr[i]}</div>`;
        }
    }
})

function sumCredits(){
    let currentValue = this.value;
    switch(currentValue){
        case '2':
            document.getElementById('term').value = '5 лет';
            document.getElementById('result').value = newInputData*0.02*5 + newInputData;
            break;
        case '15':
            document.getElementById('term').value = '15 лет';
            document.getElementById('result').value = newInputData*0.15*10 + newInputData;
            break;
        case '30':
            document.getElementById('term').value = '30 лет';
            document.getElementById('result').value = newInputData*0.3*15 + newInputData;
            break;
    }
    //currentValue = (currentValue + inputData.value)*0.01 + inputData.value;
    //newP.innerHTML = currentValue;
    //sum.appendChild(newP);
}


export {sumCredits, result};