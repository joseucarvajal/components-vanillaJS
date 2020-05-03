import './nav-bar.styles.scss';

import svg from '../../../public/img/symbol-defs.svg';

document.NavBar = document.NavBar || {};
document.NavBar.itemClick = (navBarElem) => {
    
    const navBarElements = document.querySelectorAll('.nav-bar__item');
    navBarElements.forEach((elem)=>{
        elem.classList.remove('nav-bar__item--active');
    });

    navBarElem.classList.add('nav-bar__item--active');
}

const NavBar = () => {
    
    /*html*/
    return `
    <nav class="nav-bar">
        <ul class="nav-bar__list">
            <li class="nav-bar__item nav-bar__item--active" onclick="document.NavBar.itemClick(this)">
                <a href="#" class="nav-bar__link">
                    <svg class="nav-bar__icon">
                        <use xlink:href="${svg}#icon-home"></use>
                    </svg>
                    HOME
                </a>
            </li>
            <li class="nav-bar__item" onclick="document.NavBar.itemClick(this)">
                <a href="#" class="nav-bar__link">
                    <svg class="nav-bar__icon">
                        <use xlink:href="${svg}#icon-mail2"></use>
                    </svg>
                    CONTACT
                </a>
            </li>
            <li class="nav-bar__item" onclick="document.NavBar.itemClick(this)">
                <a href="#" class="nav-bar__link">
                    <svg class="nav-bar__icon">
                        <use xlink:href="${svg}#icon-question"></use>
                    </svg>
                    ABOUT
                </a>
            </li>
        </ul>
    </nav> 
`;
};

export default NavBar;