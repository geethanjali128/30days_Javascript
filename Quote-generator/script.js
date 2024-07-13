
const quote=document.getElementById('quote')
const author=document.getElementById('author')
const newQuote=document.getElementById('new-quote')



const api_url="https://zenquotes.io/api/random"

async function getQuote(url){
    const response=await fetch(url)
    const data= await response.json()
    console.log(data)
    quote.innerHTML=data[0].q;
    author.innerHTML=data[0].a;
}

getQuote(api_url)

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+"--- By"+author.innerHTML,"Tweet Window","width=600,height=300")
}