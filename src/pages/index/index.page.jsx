import '../../scss/layout.scss';
import './index.page.scss';

import UserData from "../../components/user-data/user-data.component";

const App = () => {

    const UserFormComponent = UserData({ name: 'Jose' });

    /*html*/
    return `
        <header>
            User registration
        </header>

        <main>
            <section class="user-section">
                ${UserFormComponent}
            </section>
        </main>
        
        <footer>
            Copyright 2020
        </footer>
`;
}

export default App;
