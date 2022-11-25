const BASE_URL = 'http://192.168.1.53:8000/api';

function Api() {}

Api.fetch = (route, method = 'get') => {
    return fetch(BASE_URL + route, {
        method
    }).then((response) => response.json());
}

export default Api;