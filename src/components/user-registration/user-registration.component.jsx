import "./user-registration.styles.scss";

const UserRegistration = (user) => {

    /*html*/
    return `                    
        <form class="user-reg-form" autocomplete="off">
        <input autocomplete="off" name="hidden" type="text" style="display:none;">
            <div class="user-reg-form__group">
                <input autocomplete="new-password" id="ur-name" type="text" class="form-input user-reg-form__input" autocomplete="off" placeholder="Name" required>
                <label class="form-lbl" for="ur-name">
                    Name
                </label>
            </div>
            <div class="user-reg-form__group">
                <input autocomplete="new-password" id="ur-zip-code" class="form-input user-reg-form__input" placeholder="Zip code">
                <label for="ur-zip-code" class="form-lbl">
                    Zip Code
                </label>
            </div>
            <div class="user-reg-form__group">
                <input autocomplete="new-password" id="ur-email" type="email" class="form-input user-reg-form__input" required placeholder="Email">
                <label for="ur-email" class="form-lbl">
                    Email
                </label>
            </div>
            <div class="user-reg-form__group user-reg-form__gender-group">
                <span class="user-reg-form__gender">
                    <input id="ur-gender_f" type="radio">
                    <label for="ur-gender_f">Female</label>
                </span>
                <span class="user-reg-form__gender">
                    <input id="ur-gender_m" type="radio">
                    <label for="ur-gender_m">Male</label>
                </span>
            </div>
            <div class="user-reg-form__group">
                <span class="button-terciary user-reg-form__save-btn">Save</span>
            </div>
        </form>
`
}

export default UserRegistration;