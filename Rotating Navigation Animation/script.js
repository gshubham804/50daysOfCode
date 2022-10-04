const cross=document.getElementById('option-icon');
const option = document.getElementById('cross-icon');
const main_div = document.getElementById('main-div');
const nav = document.getElementsByTagName('nav');

option.addEventListener('click',()=>{
    option.style.display='none';
    cross.style.display="block"
    main_div.style.transform="rotate(0deg)"
    // nav[0].style.display='block'
})

cross.addEventListener('click',()=>{
    option.style.display='block';
    cross.style.display="none"
    main_div.style.transform="rotate(-15deg)"
    main_div.style.transformOrigin="top left"

    // nav[0].style.display='none'
})
