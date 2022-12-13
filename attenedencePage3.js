
                                            // THIS PART IS FOR UPDATING ATTENDENCE COUNT //

function updateDATA(){
   document.getElementById("table").style.display = "none";
   document.getElementById("btn").style.display = "none";

   document.getElementById("myTable").style.display = "table";
   document.getElementById("btnU").style.display = "none";
  let sFP_retrived = 0;
  let sFA_retrived  = 0;
  let sAP_retrived   = 0;
  let sAA_retrived    = 0;
  let sIP_retrived  = 0;
  let sIA_retrived   = 0;
  let sAZP_retrived  = 0;
  let sAZA_retrived   = 0;
  let sMP_retrived = 0;
  let sMA_retrived  = 0;
if( document.getElementById("maths").checked){
   sFP_retrived++;
   }
 else
 {
     
   sFA_retrived++;
    
 if( document.getElementById("phy").checked){
     
   sAP_retrived++;
    
 }
 else{
   sAA_retrived++;
   
   
 }
 if( document.getElementById("cs").checked){
     
   sIP_retrived++;
     
 }
 else{
   sIA_retrived++;
    
 }
 if( document.getElementById("urdu").checked){
   sAZP_retrived++;
    
 }
 else{
     
   sAZA_retrived++;
     
 }
 if( document.getElementById("eng").checked){
     
   sMP_retrived++;
     
 }
 else{
     
   sMA_retrived++;
 }
}

let update_sFP_retrived = JSON.parse( localStorage.getItem("sirFaisalPresents_retrived"));
let TOTAL_sFP =  sFP_retrived + update_sFP_retrived;
localStorage.setItem("sirFaisalPresents_retrived",JSON.stringify(TOTAL_sFP));

let update_sFA_retrived = JSON.parse( localStorage.getItem("sirFaisalAbsents_retrived"));
let TOTAL_sFA =  sFA_retrived + update_sFA_retrived;
localStorage.setItem("sirFaisalAbsents_retrived",JSON.stringify(TOTAL_sFA));

let update_sAP_retrived = JSON.parse( localStorage.getItem("sirAsifPresents_retrived"));
let TOTAL_sAP =  sAP_retrived + update_sAP_retrived;
localStorage.setItem("sirAsifPresents_retrived",JSON.stringify(TOTAL_sAP));

let update_sAA_retrived = JSON.parse( localStorage.getItem("sirAsifAbsents_retrived"));
let TOTAL_sAA =  sAA_retrived + update_sAA_retrived;
localStorage.setItem("sirAsifAbsents_retrived",JSON.stringify(TOTAL_sAA));

let update_sIP_retrived = JSON.parse( localStorage.getItem("sirImranPresents_retrived"));
let TOTAL_sIP =  sIP_retrived + update_sIP_retrived;
localStorage.setItem("sirImranPresents_retrived",JSON.stringify(TOTAL_sIP));

let update_sIA_retrived = JSON.parse( localStorage.getItem("sirImranAbsents_retrived"));
let TOTAL_sIA =  sIA_retrived + update_sIA_retrived;
localStorage.setItem("sirImranAbsents_retrived",JSON.stringify(TOTAL_sIA));

let update_sAZP_retrived = JSON.parse( localStorage.getItem("sirAzharPresents_retrived"));
let TOTAL_sAZP =  sAZP_retrived + update_sAZP_retrived;
localStorage.setItem("sirAzharPresents_retrived",JSON.stringify(TOTAL_sAZP));

let update_sAZA_retrived = JSON.parse( localStorage.getItem("sirAzharAbsents_retrived"));
let TOTAL_sAZA =  sAZA_retrived + update_sAZA_retrived;
localStorage.setItem("sirAzharAbsents_retrived",JSON.stringify(TOTAL_sAZA));

let update_sMP_retrived = JSON.parse( localStorage.getItem("sirMumtazPresents_retrived"));
let TOTAL_sMP =  sMP_retrived + update_sMP_retrived;
localStorage.setItem("sirMumtazPresents_retrived",JSON.stringify(TOTAL_sMP));

let update_sMA_retrived = JSON.parse( localStorage.getItem("sirMumtazAbsents_retrived"));
let TOTAL_sMA =  sMA_retrived + update_sMA_retrived;
localStorage.setItem("sirMumtazAbsents_retrived",JSON.stringify(TOTAL_sMA));

                           // THIS PART IS FOR SHOWING ATTENDENCE //

let showSFP = JSON.parse( localStorage.getItem("sirFaisalPresents_retrived"));
document.getElementById("mP").innerHTML = showSFP;
document.getElementById("b").style.backgroundColor = "pink";

let showSFA = JSON.parse( localStorage.getItem("sirFaisalAbsents_retrived"));
document.getElementById("mA").innerHTML = showSFA;
document.getElementById("b").style.backgroundColor = "aquamarine";

let showSAP = JSON.parse( localStorage.getItem("sirAsifPresents_retrived"));
document.getElementById("pP").innerHTML = showSAP;
document.getElementById("b").style.backgroundColor = "pink";


let showSAA = JSON.parse( localStorage.getItem("sirAsifAbsents_retrived"));
document.getElementById("pA").innerHTML = showSAA;
document.getElementById("b").style.backgroundColor = "aquamarine";

let showSIP = JSON.parse( localStorage.getItem("sirImranPresents_retrived"));
document.getElementById("cP").innerHTML = showSIP;
document.getElementById("b").style.backgroundColor = "pink";

let showSIA = JSON.parse( localStorage.getItem("sirImranAbsents_retrived"));
document.getElementById("cA").innerHTML = showSIA ;
document.getElementById("b").style.backgroundColor = "aquamarine";

let showSAZP = JSON.parse( localStorage.getItem("sirAzharPresents_retrived"));
document.getElementById("uP").innerHTML = showSAZP;
document.getElementById("b").style.backgroundColor = "pink";

let showSAZA = JSON.parse( localStorage.getItem("sirAzharAbsents_retrived"));
document.getElementById("uA").innerHTML = showSAZA;
document.getElementById("b").style.backgroundColor = "aquamarine";

let showSMP = JSON.parse( localStorage.getItem("sirMumtazPresents_retrived"));
document.getElementById("eP").innerHTML = showSMP ;
document.getElementById("b").style.backgroundColor = "pink";

let showSMA = JSON.parse( localStorage.getItem("sirMumtazAbsents_retrived"));
document.getElementById("eA").innerHTML = showSMA ;
document.getElementById("b").style.backgroundColor = "aquamarine";

}
// if(sirFaisalPresents === 1){
//     document.getElementById("mP").innerHTML = sirfaisalpresents++;

// }
// if(sirAsifPresents === 1){
//    document.getElementById("pP").innerHTML = 1;

// }
// if(sirMumtazPresents === 1){
//    document.getElementById("eP").innerHTML = 1;

// }
// if(sirAzharPresents === 1){
//    document.getElementById("uP").innerHTML = 1;

// }
// if(sirImranPresents === 1){
//    document.getElementById("cP").innerHTML = 1;

// 
