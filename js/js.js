let cifSec = document.querySelector('.s'),
    cifMin = document.querySelector('.m'),
    cifHour = document.querySelector('.h'),
    sqHour = document.querySelector('.hours'),
    sqMin = document.querySelector('.minutes');


// Настройка часов
function clock() {
    let currentTime = new Date(),
        currentSec = currentTime.getSeconds() * 6,
        currentMin = currentTime.getMinutes() * 6,
        currentHour = currentTime.getHours() * 30;
    
    cifSec.style = `transform: rotate(${currentSec}deg)`;
    cifMin.style = `transform: rotate(${currentMin}deg)`;
    cifHour.style = `transform: rotate(${currentHour}deg)`;


    sqHour.innerHTML = currentTime.getHours();
    if (sqHour.innerHTML < 10) {
        sqHour.innerHTML = '0' + currentTime.getHours();
    }else {
        sqHour.innerHTML = currentTime.getHours();
    };

    sqMin.innerHTML = currentTime.getMinutes();
    if (sqMin.innerHTML < 10) {
        sqMin.innerHTML = '0' + currentTime.getMinutes();
    }else {
        sqMin.innerHTML = currentTime.getMinutes();
    };

    setTimeout(() => clock(), 1000) 
}
clock();

// Перевключение табсов
let tabsLink = document.querySelectorAll('.tabsItem');
let tabsContent = document.querySelectorAll('.tabsContentItem')


for ( let i = 0; i < tabsLink.length; i++) {
    tabsLink[i].addEventListener('click', function(e) {
        e.preventDefault();

        for(let x = 0; x < tabsLink.length; x++) {
            tabsLink[x].classList.remove('active');
            tabsContent[x].classList.remove('active');
        }
        
        tabsLink[i].classList.add('active');
        tabsContent[i].classList.add('active');
    })
}

// Секундомер

let watchHour = document.querySelector('.stopwatch__hours'),
    watchMin = document.querySelector('.stopwatch__minutes'),
    watchSec = document.querySelector('.stopwatch__seconds'),
    watchBtn = document.querySelector('.stopwatch__btn'),
    watchSpan = document.querySelector('.tabsLink__span');

// Работа с кнопкой Старт 
watchBtn.addEventListener('click', function () {
    if (watchBtn.innerHTML == 'start') {
        watchBtn.innerHTML = 'stop';
        watchSpan.classList.add('active');
        let i = 0;
        let ms = 1000;
        setTimeout(() => timer(this,i,ms), ms)
    }else if (watchBtn.innerHTML == 'stop') {
        watchBtn.innerHTML = 'clear';
        watchSpan.classList.remove('active');
        watchSpan.classList.add('active_clear');
    }else if (watchBtn.innerHTML == 'clear') {
        watchSec.innerHTML = 0;
        watchMin.innerHTML = 0;
        watchHour.innerHTML = 0;
        watchBtn.innerHTML = 'start';
        watchSpan.classList.remove('active_clear');``
    }
})


// Создание Включения Таймера

function timer(el,i,ms) { 
    if (el.innerHTML == 'stop') {
        if (i == 59) {
            i = 0;
            watchSec.innerHTML = i;
            if(watchMin.innerHTML == 59) {
                watchMin.innerHTML = 0;
                watchHour.innerHTML++;
            }else {
                watchMin.innerHTML++;
            }
        }else {
            i++;
            watchSec.innerHTML = i;
        }
        setTimeout(() => timer(el,i,ms), ms);
    }
 }


