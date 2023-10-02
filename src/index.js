import './style.sass';

const linkClick = (popup, burger, body) => {
    setTimeout(() => {
        body.classList.remove('body-no-scroll');
        popup.classList.add('header__popup-hidden');
        burger.classList.remove('header__burger-open');
    });

    return false;
}

const categoryClick = () => {
    let clicked = false;

    return (e) => {
        clicked = !clicked;
        console.log(clicked);

        if (!clicked) {
            setTimeout(() => {
                e.target.querySelector('.docs__links').classList.remove('docs__links-visible');
                e.target.querySelector('.docs__title').classList.remove('docs__title-open');
            })
            
            return false;
        }

        setTimeout(() => {
            e.target.querySelector('.docs__links').classList.add('docs__links-visible');
            e.target.querySelector('.docs__title').classList.add('docs__title-open');
        })
        
        return false;
    }
}

const burgerClick = (body, popup, burger) => {
    let clicked = false;

    return (e) => {
        clicked = !clicked;
        
        if (!clicked) {
            setTimeout(() => {
                body.classList.remove('body-no-scroll');
                popup.classList.add('header__popup-hidden');
                burger.classList.remove('header__burger-open');
            });

            return false;
        }

        setTimeout(() => {
            burger.classList.add('header__burger-open');
            popup.classList.remove('header__popup-hidden');
            body.classList.add('body-no-scroll');
        });
            
        return false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('.body');
    const popup = document.querySelector('.header__popup');
    const burger = document.querySelector('.header__burger');
    const category = document.querySelectorAll('.docs__category');
    const links = document.querySelectorAll('.header__link');

    links.forEach(link => {
        link.addEventListener('click', () => linkClick(popup, burger, body));
    });
    
    category.forEach((el) => {
        el.addEventListener('click', categoryClick());
    })

    burger.addEventListener('click', burgerClick(body, popup, burger));
});