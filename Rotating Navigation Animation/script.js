const cross=document.getElementById('option-icon');
const option = document.getElementById('cross-icon');
const main_div = document.getElementById('main-div');
const li = document.getElementsByTagName('li');

option.addEventListener('click',()=>{
    option.style.display='none';
    cross.style.display="block"
    // cross.style.transform="rotate(-80deg)"
    // cross.style.transformOrigin="top left"
    main_div.style.transform="rotate(0deg)"
    main_div.style.transformOrigin="0 0"
    li[0].style.transform = "translateX(0px)";
li[0].style.transitionDelay = "0s";
li[1].style.transform = "translateX(0px)";
li[1].style.transitionDelay = "0s";
li[2].style.transform = "translateX(0px)";
li[2].style.transitionDelay = "0s";

})

cross.addEventListener('click',()=>{
    option.style.display='block';
    cross.style.display="none"
    // option.style.transform="rotate(0deg)"
    // option.style.transformOrigin="0 0"
    main_div.style.transform="rotate(-18deg)"
    main_div.style.transformOrigin="top left"
li[0].style.transform = "translateX(10px)";
li[0].style.transitionDelay = "0.38s";
li[1].style.transform = "translateX(18px)";
li[1].style.transitionDelay = "0.42s";
li[2].style.transform = "translateX(26px)";
li[2].style.transitionDelay = "0.46s";
})

// we can add this al property >> we store this all property and add this class bu "addlist" js property
