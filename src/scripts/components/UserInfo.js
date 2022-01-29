export default class UserInfo {
    constructor({ nameTitle, aboutMe }) {
        this._nameTitle = nameTitle;
        this._aboutMe = aboutMe;
        this._avatar = document.querySelector('.profile__avatar');
    }
    getUserInfo() {
        const userInfo = {
            name: this._nameTitle.textContent,
            aboutMe: this._aboutMe.textContent,
        };
        return userInfo;
    }

    setUserInfo(userInfo) {
        this._nameTitle.textContent = userInfo.name;
        this._aboutMe.textContent = userInfo.about;
        this._avatar.src = userInfo.avatar;

    }
}

