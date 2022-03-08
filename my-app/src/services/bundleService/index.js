const ENDPOINT = "http://localhost:3500/api/bundles";

export const  getBundlesService = async () => {
    console.log("beginning of service");
    const result =  await fetch(ENDPOINT);
    if(!result.ok) {return {};}
    console.log(`reslt: ${result}`);
    return result.json();
};