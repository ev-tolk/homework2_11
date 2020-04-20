const URL_BYN = 'http://www.nbrb.by/api/exrates/rates?periodicity=0';
//const URL = 'http://www.nbrb.by/api/exrates/currencies';
let form = document.getElementById('bank').getElementsByTagName('form');
let btn = document.getElementById('go');
let goToMain = document.getElementById('main');
document.getElementById('convert').style.display = 'none';


function getData(param){
    fetch(param)
    .then(response => {
        response.json()
        .then(data => {
            console.log(`${data[4].Cur_OfficialRate} ${data[5].Cur_OfficialRate}`);
            form[0].innerHTML = '<br>';
            form[0].innerHTML+= `
            
            <table>
            <tr>
            <th width='200'><div class="subBank">БАНК</div></th>
            <th width='200'><div class="usd"><h2>USD</h2><span>Покупка</span></th>
            <th width='200'><div class="usd"><h2>USD</h2><span>Продажа</span></th>
            <th width='200'><div class="eur"><h2>EUR</h2><span>Покупка</span></th>
            <th width='200'><div class="eur"><h2>EUR</h2><span>Продажа</span></th>
            <th width='200'><div class="rub"><h2>RUB<sup id="hundred">100</sup></h2><span>Покупка</span></th>
            <th width='200'><div class="rub"><h2>RUB</h2><span>Продажа</span></th>
            <th width='200'><div class="usd"><h2>EUR➝</h2><span>Покупка</span></th>
            <th width='200'><div class="eur_usd"><h2>USD</h2><span>Продажа</span></th>
            </tr>
            <tr>
            <th width='200'><div id='belarusBank'><span>Беларусбанк</span></th>
            <th width='200'><div id='belarusBank'>${(data[4].Cur_OfficialRate * 1.05).toFixed(2)}</th>
            <th width='200'><div id='belarusBank'>${(data[4].Cur_OfficialRate * 1.12).toFixed(2)}</th>
            <th width='200'><div id='belarusBank'>${(data[5].Cur_OfficialRate * 1.08).toFixed(2)}</th>
            <th width='200'><div id='belarusBank'>${(data[5].Cur_OfficialRate * 1.13).toFixed(2)}</th>
            <th width='200'><div id='belarusBank'>${(data[16].Cur_OfficialRate * 1.04).toFixed(2)}</th>
            <th width='200'><div id='belarusBank'>${(data[16].Cur_OfficialRate * 1.09).toFixed(2)}</th>
            <th width='200'><div id='belarusBank'>${(data[5].Cur_OfficialRate / data[4].Cur_OfficialRate).toFixed(2)}</th>
            <th width='200'><div id='belarusBank'>${((data[5].Cur_OfficialRate / data[4].Cur_OfficialRate)* 1.2).toFixed(2)}</th>
            </tr>
            <tr>
            <th width='200'><div id='priorBank'><span>Приорбанк</span></th>
            <th width='200'><div id='priorBank'>${(data[4].Cur_OfficialRate * 1.02).toFixed(2)}</th>
            <th width='200'><div id='priorBank'>${(data[4].Cur_OfficialRate * 1.11).toFixed(2)}</th>
            <th width='200'><div id='priorBank'>${(data[5].Cur_OfficialRate * 1.05).toFixed(2)}</th>
            <th width='200'><div id='priorBank'>${(data[5].Cur_OfficialRate * 1.15).toFixed(2)}</th>
            <th width='200'><div id='priorBank'>${(data[16].Cur_OfficialRate * 1.07).toFixed(2)}</th>
            <th width='200'><div id='priorBank'>${(data[16].Cur_OfficialRate * 1.12).toFixed(2)}</th>
            <th width='200'><div id='priorBank'>${((data[5].Cur_OfficialRate / data[4].Cur_OfficialRate)*1.025).toFixed(2)}</th>
            <th width='200'><div id='priorBank'>${((data[5].Cur_OfficialRate / data[4].Cur_OfficialRate)* 1.4).toFixed(2)}</th>
            </tr>
            <tr>
            <th width='200'><div id='statutBank'><span>Статутбанк</span></th>
            <th width='200'><div id='statutBank'>${(data[4].Cur_OfficialRate * 1.0125).toFixed(2)}</th>
            <th width='200'><div id='statutBank'>${(data[4].Cur_OfficialRate * 1.1057).toFixed(2)}</th>
            <th width='200'><div id='statutBank'>${(data[5].Cur_OfficialRate * 1.0325).toFixed(2)}</th>
            <th width='200'><div id='statutBank'>${(data[5].Cur_OfficialRate * 1.117).toFixed(2)}</th>
            <th width='200'><div id='statutBank'>${(data[16].Cur_OfficialRate * 1.04).toFixed(2)}</th>
            <th width='200'><div id='statutBank'>${(data[16].Cur_OfficialRate * 1.1135).toFixed(2)}</th>
            <th width='200'><div id='statutBank'>${((data[5].Cur_OfficialRate / data[4].Cur_OfficialRate)*1.005).toFixed(2)}</th>
            <th width='200'><div id='statutBank'>${((data[5].Cur_OfficialRate / data[4].Cur_OfficialRate)* 1.275).toFixed(2)}</th>
            </tr>
            <tr>
            <th width='200'><div id='agropromBank'><span>Агропромбанк</span></th>
            <th width='200'><div id='agropromBank'>${(data[4].Cur_OfficialRate * 1.02078).toFixed(2)}</th>
            <th width='200'><div id='agropromBank'>${(data[4].Cur_OfficialRate * 1.115).toFixed(2)}</th>
            <th width='200'><div id='agropromBank'>${(data[5].Cur_OfficialRate * 1.1025).toFixed(2)}</th>
            <th width='200'><div id='agropromBank'>${(data[5].Cur_OfficialRate * 1.112).toFixed(2)}</th>
            <th width='200'><div id='agropromBank'>${(data[16].Cur_OfficialRate * 1.0238).toFixed(2)}</th>
            <th width='200'><div id='agropromBank'>${(data[16].Cur_OfficialRate * 1.104).toFixed(2)}</th>
            <th width='200'><div id='agropromBank'>${((data[5].Cur_OfficialRate / data[4].Cur_OfficialRate)*1.007).toFixed(2)}</th>
            <th width='200'><div id='agropromBank'>${((data[5].Cur_OfficialRate / data[4].Cur_OfficialRate)* 1.075).toFixed(2)}</th>
            </tr>
            <tr>
            <th width='200'><div id='alfaBank'><span>Альфабанк</span></th>
            <th width='200'><div id='alfaBank'>${(data[4].Cur_OfficialRate * 1.02).toFixed(2)}</th>
            <th width='200'><div id='alfaBank'>${(data[4].Cur_OfficialRate * 1.17).toFixed(2)}</th>
            <th width='200'><div id='alfaBank'>${(data[5].Cur_OfficialRate * 1.19).toFixed(2)}</th>
            <th width='200'><div id='alfaBank'>${(data[5].Cur_OfficialRate * 1.265).toFixed(2)}</th>
            <th width='200'><div id='alfaBank'>${(data[16].Cur_OfficialRate * 1.12).toFixed(2)}</th>
            <th width='200'><div id='alfaBank'>${(data[16].Cur_OfficialRate * 1.19).toFixed(2)}</th>
            <th width='200'><div id='alfaBank'>${((data[5].Cur_OfficialRate / data[4].Cur_OfficialRate)*1.012).toFixed(2)}</th>
            <th width='200'><div id='alfaBank'>${((data[5].Cur_OfficialRate / data[4].Cur_OfficialRate)* 1.097).toFixed(2)}</th>
            </tr>
            </table>`;
        })
        .catch(() => {
            console.log('Error 404!');
        })
    })
}


export {getData, URL_BYN};

