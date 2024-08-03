const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const reset = document.querySelector(".reset");
const tweetBtn = document.querySelector(".tweet");

const api_url = "https://api.quotable.io/random";

async function getQuote(url){
    quote.innerHTML = `<div class="loader"></div>`;
    author.innerHTML = "";
    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML = '"' + data.content + '"';
    author.innerHTML = "--" + data.author;
}

reset.addEventListener("click" , ()=>{
    getQuote(api_url);
})

tweetBtn.addEventListener("click",()=>{
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerText} ${author.innerText}` , "Tweet Window" , "width:600px , height:300px");
})

getQuote(api_url);



