let link = "https://catfact.ninja/fact";

h2 = document.querySelector("h2")
function clearFact()
{
    h2.innerText = "Random Cat Facts🐱";
}
async function getFact()
{
    try{
        
        let data = await axios.get(link);
        console.log(data.data.fact);
        h2.innerText = data.data.fact
        
    }
    catch(e){
        console.log("Error: ", e);
    }
}
