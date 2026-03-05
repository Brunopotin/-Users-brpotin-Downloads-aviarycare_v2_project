
function sendNotif(title,message){
 if(!("Notification" in window)) return;
 if(Notification.permission==="default"){Notification.requestPermission();}
 if(Notification.permission==="granted"){
   try{new Audio("sons/bird_chirp_delicate.wav").play();}catch(e){}
   new Notification(title,{body:message,icon:"icons/icon-192.png"});
 }
}
