
const accessKey="6E_ZmP0DjuSd6QX-FUue4UGwTIXMxlV78BYd8Vy60KI"
const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const showMoreBtn=document.getElementById("show-more-btn");



let keyword=""
let page=1

async function searchImages(){
    keyword=searchBox.value

    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    try{
         const response=await fetch(url)

        const data=await response.json()

        if(page === 1) searchResult.innerHTML="";

        const results=data.results

        results.map( result =>{
            const img=document.createElement("img")
            img.src=result.urls.small;
            const imageLink=document.createElement("a")
            imageLink.href=result.links.html
            imageLink.target="_blank"

            imageLink.appendChild(img)
            searchResult.appendChild(imageLink)

           showMoreBtn.style.display="block";


        })
        
    }
   
    catch(error){
        console.log(error.message)
    }
   
}

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    page=1

    searchImages()
})

showMoreBtn.addEventListener('click',()=>{
    page++;

    searchImages()
})