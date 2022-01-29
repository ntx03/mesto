export default class Api {
    constructor(url, token) {
        this._url = url;
        this._token = token;
    }
    //* Проверка статуса запроса
    _requestResult(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(
                `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
            );
        }
    }

    getItemsGard() {
        return fetch(`${this._url}cards`, {
            headers: {
                authorization: this._token,
            }
        })
            .then((res) => this._requestResult(res));
    }

    getUserInfo() {
        return fetch(`${this._url}users/me `, {
            headers: {
                authorization: this._token,
            }
        })
            .then((res) => this._requestResult(res));
    }

    editProfile(items) {
        return fetch(`${this._url}users/me`, {
            method: "PATCH",
            headers: {
                authorization: this._token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: items.name,
                about: items.aboutMe,
            }),
        }).then((res) => this._requestResult(res));
    }
    addCard(items) {
        return fetch(`${this._url}cards`, {
            method: "POST",
            headers: {
                authorization: this._token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: items.name,
                link: items.link,
            }),
        })
            .then((res) => this._requestResult(res));
    }

    deleteCard(items) {
        return fetch(`${this._url}cards/${items._id}`, {
            method: "DELETE",
            headers: {
                authorization: this._token,
            },
        })
            .then((res) => this._requestResult(res));
    }

    addLike(items) {
        return fetch(`${this._url}cards/${items._id}/likes`, {
            method: "PUT",
            headers: {
                authorization: this._token,
            },
        })
            .then((res) => this._requestResult(res));
    }

    deleteLike(items) {
        return fetch(`${this._url}cards/${items._id}/likes`, {
            method: "DELETE",
            headers: {
                authorization: this._token,
            },
        })
            .then((res) => this._requestResult(res));
    }

    replaseAvatar(items) {
        return fetch(`${this._url}users/me/avatar`, {
            method: "PATCH",
            headers: {
                authorization: this._token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                avatar: items.avatar,
            }),
        })
            .then((res) => this._requestResult(res));
    }
}



