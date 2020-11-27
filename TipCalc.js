// for tip calculations

var btn =  document.getElementById("btn")
btn.addEventListener('click',cal_bill);



function cal_bill(){
    let bill_amt = document.getElementById("BillAmt").value;
    let Ser_Per = document.getElementById("SerPer").value;
    let Share_Bill = document.getElementById("ShareBill").value;
    //calculation
    let cal_bill = document.getElementById("ValCal").value=bill_amt * Ser_Per / Share_Bill;
 
    console.log("Variable values")
    console.log(bill_amt);
    console.log(Ser_Per);
    console.log(Share_Bill);
    console.log(cal_bill)
}
// for clearing the screen
var btnClear =  document.getElementById("btnclear")
btnClear.addEventListener('click',clear_setfocus);

function clear_setfocus(){
//    b_amt = document.getElementById("BillAmt").autofocus = true;
    location.reload();
    console.log ("Get Focus");
}
