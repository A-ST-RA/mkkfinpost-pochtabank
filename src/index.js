import './style.sass';

function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}

const buttonClick = (body, popup) => {
    let clicked = false;

    return (e) => {
        clicked = !clicked;
        
        if (!clicked) {
            body.classList.remove('body-no-scroll');
            
            popup.classList.add('header__popup-hidden');

            return;
        }
        
        popup.classList.remove('header__popup-hidden');
        body.classList.add('body-no-scroll');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('.body');
    const popup = document.querySelector('.header__popup');
    const burger = document.querySelector('.header__burger');
    
    burger.addEventListener('click', buttonClick(body, popup))
});