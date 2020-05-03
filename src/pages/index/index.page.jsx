import '../../scss/layout.scss';
import './index.page.scss';

import UserData from "../../components/user-data/user-data.component";
import NavBar from '../../components/nav-bar/nav-bar.component';

const App = () => {

    const UserRegisterComp = UserData({ name: 'Jose' });
    const NavBarComp = NavBar();

    /*html*/
    return `
        <main class="container">
            <section class="user-register-section">                
                ${NavBarComp}
            </section>
            <section class="tech-info-section">
            tech info
            </section>
            <section class="social-med-section">
            Social media
            </section>
        </main>
`;
}



export default App;
