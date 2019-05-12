const CALCULATING_SERVER_URL = "http://localhost:9000/nextGeneration/calculate";
const HEADERS = { "Content-Type": "application/json; charset=utf-8" };
const REQUEST_TYPE = "POST";

function* fetchNextGeneration(parametersForNextGeneration) {
    const response = yield fetch(CALCULATING_SERVER_URL, {
            headers: HEADERS,
            method: REQUEST_TYPE,
            body: JSON.stringify(parametersForNextGeneration)
    });

    return yield response.json();
}

export default fetchNextGeneration;