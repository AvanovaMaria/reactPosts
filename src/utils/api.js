import { config } from './config';

class Api {
    constructor({ url, token }) {
        this._url = url;
        this._token = token;
};

getPosts() {
    return fetch(`${this._url}`, {
        headers: {
            authorization: `Bearer ${this._token}`,
        },
    })
}
}