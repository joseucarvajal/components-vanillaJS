import './nav-bar.styles.scss';

import svg from '../../../public/img/symbol-defs.svg';

const NavBar = () => {

    /*html*/
    return `
        <nav class="nav-bar">
            <ul class="nav-bar__nav">
                <li class="nav-bar__opt">
                    <svg class="nav-bar__icon">
                        <use xlink:href="${svg}#icon-home"></use>
                    </svg>
                    <span class="nav-bar__lbl">HOME</span>
                </li>
                <li class="nav-bar__opt">
                    <svg class="nav-bar__icon">
                        <use xlink:href="${svg}#icon-question"></use>
                    </svg>
                    <span class="nav-bar__lbl">CONTACT</span>
                </li>
                <li class="nav-bar__opt">
                    <svg class="nav-bar__icon">
                        <use xlink:href="${svg}#icon-question"></use>
                    </svg>
                    <span class="nav-bar__lbl">ABOUT</span>
                </li>
            </ul>
        </nav> 
    `;
};

export default NavBar;