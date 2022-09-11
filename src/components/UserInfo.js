export class UserInfo {
    constructor({userNameSelector, userDescriptionSelector, userAvatarSelector}) {
        this._userName = document.querySelector(userNameSelector);
        this._userDescription = document.querySelector(userDescriptionSelector);
        this._userAvatar = document.querySelector(userAvatarSelector);
    }

    getUserInfo() {
        const userInfo = {
            name: this._userName.textContent,
            description: this._userDescription.textContent,
        };

        return userInfo;
    }

    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userDescription.textContent = data.about;
        this._userAvatar.src = data.avatar;
    }
}