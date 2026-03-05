
function checkIncubation(){
 if(typeof accouplements==="undefined") return;
 const today=new Date();
 accouplements.forEach(a=>{
  if(!a.oeufs) return;
  a.oeufs.forEach(o=>{
   if(!o.datePonte) return;
   const ponte=new Date(o.datePonte);
   const eclosion=new Date(ponte);
   eclosion.setDate(eclosion.getDate()+14);
   const diff=Math.floor((eclosion-today)/(1000*60*60*24));
   if(diff===2) sendNotif("🥚 Éclosion dans 2 jours","Couvée "+a.id);
   if(diff===1) sendNotif("🥚 Éclosion demain","Couvée "+a.id);
   if(diff===-5) sendNotif("🐣 Préparer les bagues","Couvée "+a.id);
   if(diff===-7) sendNotif("🐣 Baguage conseillé","Couvée "+a.id);
  });
 });
}
