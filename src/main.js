import {sumCredits} from './calculater/calculater.js';
import {enterUser, btnIn, checkUser, clickIn} from './login/login';
import {getData, URL_BYN} from './exchange/exchange';
import {converter, inpMoney} from './converter/converter';
import {menu} from '../src/menu/menu';


//credits
document.getElementById('credits').addEventListener('change', sumCredits);
//logIn
btnIn.addEventListener('click', enterUser);
//check pass and log
clickIn.addEventListener('click', checkUser);
//
getData(URL_BYN);
//при нажатии enter после ввода имеющейся валюты вызывает функцию конвертера
inpMoney.addEventListener('keypress', function(kePressed){
    if (kePressed.which == 13){
        converter(URL_BYN);
    } else ;
});
//
menu();


