const load=()=>{
    fetch('https://api.kanye.rest')
    .then(res=>res.json())
    .then(data=>display(data))
}
function display(quote){
const user=document.getElementById("block")
user.innerHTML=quote.quote;
}