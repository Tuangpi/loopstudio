const humbergur = document.querySelector('.humbergur');
const closeBtn = document.querySelector('.close');
const blackModal = document.querySelector('.black-modal');
const navBar = document.querySelector('.nav-bar');
const lis = document.querySelectorAll('.nav-bar li');
const logo = document.querySelector('.logo');

humbergur.addEventListener('click', showHumbergur);
closeBtn.addEventListener('click', closeDrawer);

function showHumbergur() {
    if(window.matchMedia('(max-width: 756px)').matches){
        blackModal.style.display = 'block';
        closeBtn.style.display = 'block';
        navBar.style.flexDirection = 'column';
        lis.forEach( element => element.style.display = 'block');
        document.documentElement.style.setProperty('--height', '0');
        humbergur.style.display = 'none';
    }
}

function closeDrawer(){
    if(window.matchMedia('(max-width: 756px)').matches){
        lis.forEach( element => element.style.display = 'none');
        blackModal.style.display = 'none';
        closeBtn.style.display = 'none';
        humbergur.style.display = 'block';
        navBar.style.flexDirection = 'row';
        logo.style.display = 'block';
        document.documentElement.style.setProperty('--height', '0');
    }
}
