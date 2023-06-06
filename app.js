let btn = document.getElementById("submitbutton");
btn.addEventListener('click', shorten);
async function shorten(){
    let longURL=document.getElementById("long-link-url").value;
    let shortURL=document.getElementById("short-link-url");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
    const data = await result.json();
    shortURL.value=data.result.short_link2;

}

let newUrl = document.getElementById("short-link-url");
let copybtn=document.getElementById("copybutton");
copybtn.onclick = ()=>{
    newUrl.select();
    window.navigator.clipboard.writeText(newUrl.value)
}