import { config } from './config';

const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка : ${res.status}`);
};

class Api {
    constructor({ url, token }) {
        this._url = url;
        this._token = token;
}

getPosts(itemID) {
    const requestUrl = itemID ? `${this._url}/posts/${itemID}` : `${this._url}/posts`
    return fetch(requestUrl, {
        headers: {
            authorization: `Bearer ${this._token}`,
        },
    }).then(onResponce);
}

getCurentUser() {
    return fetch(`${this._url}/users/me`, {
        headers: {
            authorization: `Bearer ${this._token}`,
        },
    }).then(onResponce);
}

}

export default new Api(config);