
//  function func(){


// let a = document.getElementById("check").value;
// let b = 0;
// if(document.getElementById("check").checked){
// b++;
// JSON.stringify(b);
// localStorage.setItem("b",JSON.stringify(b));
// let updateCheck = localStorage.getItem("b");
//  let conv = JSON.parse(updateCheck);
// let j = conv+b;
//  console.log(j);
// }

// }
function func(){
    let count = 0
if(document.getElementById("check").checked)
{
    count++;
    console.log(count);
    JSON.stringify(count);
localStorage.setItem("count",JSON.stringify(count));
}}


function update(){
    let newCheck = 0;
    if(document.getElementById("check").checked)
    {
        newCheck++;
        console.log( newCheck);
    }
    let updateCheck = localStorage.getItem("b");
    let retrivedChecks = JSON.parse(updateCheck);
    let totalChecks = retrivedChecks + newCheck;
    localStorage.setItem("b", JSON.stringify(totalChecks));
    let show  = JSON.parse(localStorage.getItem("b"));

console.log(show);
}
