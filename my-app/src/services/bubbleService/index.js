const ENDPOINT = 'http://localhost:3000/bubbles)';

export const  getBubblesService = () => {
    return fetch(ENDPOINT).then(d=> d.json());
}