const search = document.getElementById('search-icon');
const textarea = document.getElementById('textarea');
let ans =true;
search.addEventListener('click',()=>{
    if(ans)
    {
        textarea.style.display="block"
        ans=false;
    }
    else{
    textarea.style.display="none"
    ans=true;
    }
})