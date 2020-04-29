import "./user-data.styles.scss";
const UserData = (user) => {    

    /*html*/
    return `
        <div class="user-data">
            <form class="user-data__form">
                <div class="user-data__form-group">
                    <label class="user-data__lbl">
                        Name
                    </label>
                    <input type="text" class="user-data__input app-input-req">
                </div>
                <div class="user-data__form-group">
                    <label class="user-data__lbl">
                        Age
                    </label>
                    <input type="text" class="user-data__input app-input-req">
                </div>
                <div class="user-data__form-group">
                    <label class="user-data__lbl">
                        Social stratum
                    </label>
                    <input type="text" class="user-data__input app-input-req">
                </div>
                <div class="user-data__form-group">
                    <span class="user-data__gender">
                        <input type="radio">
                        <label>Female</label>
                    </span>
                    <span class="user-data__gender">
                        <input type="radio">
                        <label>Male</label>
                    </span>
                </div>
                <div class="user-data__form-group">
                    <span class="app-btn-primary">Save</span class="app-btn">
                </div>
            </form>
        </div>
`
}

export default UserData;