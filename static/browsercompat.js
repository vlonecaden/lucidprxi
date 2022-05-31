var useragent=navigator.userAgent
const text=document.querySelector('.lucidtext');
const title=document.querySelector('.lucidtitle')
if (useragent.match(/firefox|fxios/i)) {
    console.log("e")
    //text.setAttribute('id','luctext');
    console.log(text);
    text.style.transform="translate(0.1%,0%)"
    title.style.transform="translate(0.001%,0%)"
    
}