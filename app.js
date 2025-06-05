let link = "https://catfact.ninja/fact";

h2 = document.querySelector("h2")
p = document.querySelector("#fact")
let b = document.querySelector("button")

b.addEventListener("click", async ()=>{
    p.innerText = await getFact();
})
async function getFact() {
    try {

        let data = await axios.get(link);
        console.log(data.data.fact);
        return data.data.fact;

    }
    catch (e) {
        console.log("Error: ", e);
        return "No Fact Received";
    }
}

function clearFact()
{
    p.innerText = 'Click "New Fact" to load a cat fact!';
}
