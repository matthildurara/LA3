// const ENDPOINT = 'http://127.0.0.1:3500/api/bubbles';
const ENDPOINT = "http://localhost:3500/api/bubbles";

export const  getBubblesService = async () => {
    console.log("beginning of service");
    const result =  await fetch(ENDPOINT);
    if(!result.ok) {return {};}
    console.log(`reslt: ${result}`);
    return result.json();
};

// export const getBubbleById = async id => {

// }
export const getBubbleById = async (id) => {
    const result = await fetch('http://localhost:3500/api/bubbles/'+id);
    if(!result.ok) {return {};}
    console.log(`reslt: ${result}`);
    return result.json();
}