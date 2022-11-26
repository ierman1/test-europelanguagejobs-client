const BASE_URL = 'http://192.168.1.53:8000/api';

function Api() {}

Api.fetch = async (route, data = {}, method = 'get') => {
    let response = null;

    if (method == 'get')
        response = await fetch(BASE_URL + route, { method });
    else
        response = await fetch(BASE_URL + route, { method, body: data });

    return response.json();
}

export default Api;