const BASE_URL = 'http://192.168.1.53:8000/api';

function Api() {}

Api.fetch = async (route, method = 'get') => {
    const response = await fetch(BASE_URL + route, { method });

    return response.json();
}

export default Api;