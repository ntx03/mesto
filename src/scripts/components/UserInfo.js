export default class UserInfo {
    constructor({ nameTitle, aboutMe, avatar }) {
        this._nameTitle = nameTitle;
        this._aboutMe = aboutMe;
        this._avatar = avatar;
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

