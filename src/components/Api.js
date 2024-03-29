export class Api {
    constructor({ baseUrl, headers }) {
        this._link = baseUrl;
        this._headers = headers;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`); 
        }
        return res.json();
    }

    getInitialCards() {
        return fetch(`${this._link}cards`, {
            headers: this._headers
        })
        .then(this._getResponseData);

    }

    getUserInfo() {
        return fetch(`${this._link}users/me`, {
            headers: this._headers
        })

        .then(this._getResponseData);
    }

    setUserInfo(data) {
        return fetch(`${this._link}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.username,
                about: data.description
            })
        })

        .then(this._getResponseData);
    }

    addCard(data) {
        return fetch(`${this._link}cards `, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link,
                })
        })

        .then(this._getResponseData);
    }

    deleteCard(id) {
        return fetch(`${this._link}cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })

        .then(this._getResponseData);
    }

    likeCard(cardId) {
        return fetch(`${this._link}cards/likes/${cardId}`, {
            method: 'PUT',
            headers: this._headers,
        })

        .then(this._getResponseData);
    }

    dislikeCard(cardId) {
        return fetch(`${this._link}cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })

        .then(this._getResponseData);
    }

    setAvatar(link) {
        return fetch(`${this._link}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: link
            })
        })

        .then(this._getResponseData);
    }

}