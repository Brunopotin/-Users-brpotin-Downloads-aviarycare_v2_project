document.addEventListener("DOMContentLoaded",()=>{

try{
checkIncubation()
}catch(e){
console.log(e)
}

})

function marquerFait(btn){
btn.parentElement.style.display="none"
}
