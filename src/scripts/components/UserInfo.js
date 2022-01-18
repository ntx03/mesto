export default class UserInfo {
    constructor({ nameTitle, aboutMe }) {
        this._nameTitle = nameTitle;
        this._aboutMe = aboutMe;
    }
    getUserInfo() {
        const userInfo = {
            name: this._nameTitle.textContent,
            about_me: this._aboutMe.textContent,
        };
        return userInfo;
    }

    setUserInfo(userInfo) {
        this._nameTitle.textContent = userInfo.name;
        this._aboutMe.textContent = userInfo.about_me;
    }
}

