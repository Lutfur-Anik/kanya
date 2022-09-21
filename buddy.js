const load=()=>{
    fetch('https://randomuser.me/api/?results=500')
    .then(res=>res.json())
    .then(data=>display(data))
}

function display(data){
const buddy=document.getElementById('buddy');
const buddies=data.results;
for(const user of buddies){
    
   const userDiv=document.createElement('p')
   userDiv.classList.add('user')
   userDiv.innerHTML=`name:${user.name.first}<br> Email:${user.email}`
   buddy.appendChild(userDiv)
}
}