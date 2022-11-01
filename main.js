let button = document.querySelector('.btn');
let ok = document.querySelector('.btn2');
let popup = document.querySelector('.pop-up');


let openPopup=()=>{
popup.style.visibility ='visible';
popup.style.transform = 'translate(-50%,-50%) scale(1)';
popup.style.top = '50%';
}
let closePopup=()=>{
    popup.style.visibility='hidden';
}
button.addEventListener('click',openPopup);
ok.addEventListener('click',closePopup);