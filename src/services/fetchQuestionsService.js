const path = './src/data/questions.json';

export const fetchQuestionsService = () => {
    return fetch(path).then(response => response.json());
}