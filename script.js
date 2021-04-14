let type = ['block', 'flex'];


const page1 = document.getElementById('main_page');
const page2 = document.getElementById('settings');
const page3 = document.getElementById('choose-dificulty');

const settingsButton = document.getElementsByClassName('header__text__img');
const back = document.getElementById('back');

settingsButton[0].addEventListener('click',() => openNextPage(page1,page2));
back.addEventListener('click',() => openNextPage(page2,page1));

function openNextPage(prev, next){
    prev.style.display = 'none';
    next.style.display = 'flex';
}