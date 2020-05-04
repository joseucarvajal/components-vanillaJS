import './index.page.scss';

import UserRegistration from "../../components/user-registration/user-registration.component";
import NavBar from '../../components/nav-bar/nav-bar.component';

const App = () => {

    const UserRegistrationComp = UserRegistration({ name: 'Jose' });
    const NavBarComp = NavBar();

    /*html*/
    return `
        <main class="container">
            <section class="user-register-section">                
                ${NavBarComp}
                <div class="user-registration">
                    <div class="user-registration__frm">
                        <div class="u-marg-btm-small">
                            <h2 class="heading-3">
                                SIGN UP
                            </h2>
                        </div>
                        ${UserRegistrationComp}
                    </div>                    
                </div>                                
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
