export class Api {
    constructor({ baseUrl, headers }) {
        this._link = baseUrl;
        this._headers = headers;
    }

    getInitialCards() {
        return fetch(`${this._link}cards`, {
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                
                return Promise.reject(`Ошибка: ${res.status}`);

            });

    }

    getUserInfo() {
        return fetch(`${this._link}users/me`, {
            headers: this._headers
        })

        .then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })
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

        .then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })
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

        .then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    deleteCard(id) {
        return fetch(`${this._link}cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })

        .then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    likeCard(cardId) {
        return fetch(`${this._link}cards/likes/${cardId}`, {
            method: 'PUT',
            headers: this._headers,
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    dislikeCard(cardId) {
        return fetch(`${this._link}cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    setAvatar(link) {
        return fetch(`${this._link}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: link
            })
        })

        .then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

}