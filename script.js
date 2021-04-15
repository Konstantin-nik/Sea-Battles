const page1 = document.getElementById('main_page');
const page2 = document.getElementById('settings');
const page3 = document.getElementById('online-option');
const page4 = document.getElementById('choose-dificulty');

let openedPage = page1;

const settingsButton = document.getElementsByClassName('header__text__img');
const multiButton = document.getElementById('multi');
const backSettings = document.getElementById('back-settings');
const backMultiplayer = document.getElementById('back-multiplayer');

settingsButton[0].addEventListener('click',() => openNextPage(openedPage,page2));
multiButton.addEventListener('click',()=>openNextPage(page1,page3));
backSettings.addEventListener('click',() => openNextPage(openedPage,page1));
backMultiplayer.addEventListener('click',() => openNextPage(openedPage,page1));

function openNextPage(prev, next){
    prev.style.display = 'none';
    next.style.display = 'flex';
	openedPage = next;
}