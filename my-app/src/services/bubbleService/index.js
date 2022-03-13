const ENDPOINT = "http://localhost:3500/api/bubbles";

export const  getBubblesService = async () => {
    const result =  await fetch(ENDPOINT);
    if(!result.ok) {return {};}
    console.log(`reslt: ${result}`);
    return result.json();
};

export const getBubbleById = async (id) => {
    const result = await fetch('http://localhost:3500/api/bubbles/'+id);
    if(!result.ok) {return {};}
    console.log(`reslt: ${result}`);
    return (await result).json();

}