export const fetchAnswerKey = setNumber => {
    const path = `./src/data/answerKey${setNumber}.json`;
    return fetch(path).then(response => response.json());
}