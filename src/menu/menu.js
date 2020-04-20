let monExch = document.getElementById('monExch');
let goToMain = document.getElementById('main');

function menu(){
    document.getElementById('convert').style.display = 'none';
    document.getElementById('calculater').style.display = 'none';
    monExch.addEventListener('click', function(){
        document.getElementById('bank').style.display = 'none';
        document.getElementById('convert').style.display = 'block';
    });
    goToMain.addEventListener('click', function(){
        document.getElementById('bank').style.display = 'block';
        document.getElementById('btn').style.display = 'inline-block';
        document.getElementById('convert').style.display = 'none';
        document.getElementById('log_in').style.display = 'none';
    });
}

export {menu};