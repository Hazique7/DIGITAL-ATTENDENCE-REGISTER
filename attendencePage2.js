let maths;
let phy;
let cs;
let urdu;
let eng;
let sirFaisalPresents = 0;
let sirFaisalAbsents   = 0;
let sirAsifPresents    = 0;
let sirAsifAbsents     = 0;
let sirMumtazPresents  = 0;
let sirMumtazAbsents   = 0;
let sirAzharPresents   = 0;
let sirAzharAbsents    = 0;
let sirImranPresents   = 0;
let sirImranAbsents    = 0;
let mathsp = 0;
let mathsa = 0;
let phyP = 0;
let phyA = 0;
let engp = 0;
let enga = 0;
let urduP = 0;
let urduA = 0;
let csP = 0;
let csA = 0;
function countAttendence(){
    maths = document.getElementById("maths").value;
    phy = document.getElementById("phy").value;
    cs = document.getElementById("cs").value;
    urdu = document.getElementById("urdu").value;
    eng = document.getElementById("eng").value;

    if( document.getElementById("maths").checked){
      sirFaisalPresents++;
      
    
    }
    else
    {
        
        sirFaisalAbsents++;
        // let myTable = document.getElementById('myTable');
        // myTable.rows[0].cells[1].innerHTML = sirFaisalAbsents;
    }
    if( document.getElementById("phy").checked){
        
        sirAsifPresents++;
       
    }
    else{
        sirAsifAbsents++;
        // alert(sirAsifAbsents);
      
    }
    if( document.getElementById("cs").checked){
        
        sirImranPresents++;
        
    }
    else{
        sirImranAbsents++;
       
    }
    if( document.getElementById("urdu").checked){
        sirAzharPresents++;
       
    }
    else{
        
        sirAzharAbsents++;
        
    }
    if( document.getElementById("eng").checked){
        
        sirMumtazPresents++;
        
    }
    else{
        
        sirMumtazAbsents++;
    }
    JSON.stringify(sirFaisalPresents);
 localStorage.setItem("sirFAISALpresets",JSON.stringify(sirFaisalPresents));

  JSON.stringify(sirFaisalAbsents);
 localStorage.setItem("sirFAISALabsents",JSON.stringify(sirFaisalAbsents));

  JSON.stringify(sirAsifPresents);
 localStorage.setItem("sirASIFpresents",JSON.stringify(sirAsifPresents));

  JSON.stringify(sirAsifAbsents);
  localStorage.setItem("sirASIFabsents",JSON.stringify(sirAsifAbsents));

   JSON.stringify(sirMumtazPresents);
  localStorage.setItem("sirMUMTAZpresents",JSON.stringify(sirMumtazPresents));

   JSON.stringify(sirMumtazAbsents);
  localStorage.setItem("sirMUMTAZabsents",JSON.stringify(sirMumtazAbsents));

   JSON.stringify(sirAzharPresents);
   localStorage.setItem("sirAZHARpresents",JSON.stringify(sirAzharPresents));

  JSON.stringify(sirAzharAbsents);
  localStorage.setItem("sirAZHARabsents",JSON.stringify(sirAzharAbsents));

   JSON.stringify(sirImranPresents);
   localStorage.setItem("sirIMRANpresents",JSON.stringify(sirImranPresents));

  JSON.stringify(sirImranAbsents);
  localStorage.setItem("sirIMRANabsents",JSON.stringify(sirImranAbsents));

 
}

//   document.getElementById("table").style.display = "none";
//   document.getElementById("btn").style.display = "none";
//   document.getElementById("myTable").style.display = "table";

//   if( sirFaisalPresents === 1){
//     document.getElementById("mP").innerHTML = sirFaisalPresents;
//     document.getElementById("b").style.backgroundColor = "pink";
//     console.log("working");
// }
// else{
//     document.getElementById("mA").innerHTML = sirFaisalAbsents;
//     document.getElementById("b").style.backgroundColor = "aquamarine";
//     console.log("working");
// }
// if( sirAsifPresents === 1){
//     document.getElementById("pP").innerHTML = sirAsifPresents;
//     document.getElementById("b").style.backgroundColor = "pink";
//     console.log("working");
// }
// else{
//     document.getElementById("pA").innerHTML = sirAsifAbsents;
//     document.getElementById("b").style.backgroundColor = "aquamarine";
//     console.log("working");
// }
// if( sirMumtazPresents === 1){
//     document.getElementById("eP").innerHTML = sirMumtazPresents;
//     document.getElementById("b").style.backgroundColor = "pink";
//     console.log("working");
// }
// else{
//     document.getElementById("eA").innerHTML = sirMumtazAbsents;
//     document.getElementById("b").style.backgroundColor = "aquamarine";
//     console.log("working");
// }
// if( sirAzharPresents === 1){
//     document.getElementById("uP").innerHTML = sirAzharPresents;
//     document.getElementById("b").style.backgroundColor = "pink";
//     console.log("working");
// }
// else{
//     document.getElementById("uA").innerHTML = sirAzharAbsents;
//     document.getElementById("b").style.backgroundColor = "aquamarine";
//     console.log("working");
// }
// if( sirImranPresents === 1){
//     document.getElementById("cP").innerHTML = sirImranPresents;
//     document.getElementById("b").style.backgroundColor = "pink";
//     console.log("working");
// }
// else{
//     document.getElementById("cA").innerHTML = sirImranAbsents;
//     document.getElementById("b").style.backgroundColor = "aquamarine";
//     console.log("working");
// }
// }
