/**
 * What we need ;
 * Input to calculate tips. INPUT : BILL AMOUNT,RATE
 * Round formuls to round the tip amount.
 * 
 * Process:
 * 1.Take from user bill amount.
 * 2.Take from user tip rate.
 * 3.Calculate tip rate.
 * 4.Round the tip rate as 000.00 // smallest cent is 5.
 * 5.Give to user tip rate
 * 
 * CORNERCASE:
 * If the bill amount is decimal.
 * If the tip rate is decimal.
 * If the users want to give us separate bill amount.
 * If the tip rate or bill amount are given as minus.
 * 
 * 
 * EDGECASE:
 * If the tip rate is 100%.
 * 
 * FROM SUSANNE KOENIG
 * 
 * TipCalculator    
 * Initialize billAmount = 0    
 * Initialize tipRate = 0    
 * Initialize tip = 0    
 * Initialize totalAmount = 0    
 * Initialize excludeVAT = 18    
 * Initialize billAmountExVAT = 0
    Prompt billAmount with "Please enter your bill amount as number, e.g. 230.50"    
    Prompt tipRate with "Please enter the tip rate as number, e.g. 15%"    
    Prompt excludeVAT with "Do you want to exlude the VAT (18%)"
    Validate if billAmount is an integer or decimal    
    Validate if tipRate is an integer or decimal
    Convert billAmount to decimal in format 00.00 rounding up to the nearest 0.05 step (Rappen)    
    Convert tipRate to decimal in format 00.00 rounding up to the nearest 0.05 step (Rappen)
        If excludeVAT is yes        billAmountExVAT = billAmount - (billAmount * excludeVat / 100)        
        tip = billAmountExVAT * tipRate / 100    Else        tip = billAmount * tipRate / 100    End
    Convert tip to decimal in format 00.00 rounding up to the nearest 0.05 step (Rappen)
    totalAmount = billAmount + tip
    Display "Calculated tip to pay (in CHF): " + tip    
    Display "Calculated total amount to pay  is " + totalAmount + " CHF."End
 * 
 */

 /** 

 FIRST OPTION 

 var billAmount = Number(window.prompt("Please put in here bill amount."));
 var tipRate = Number(window.prompt("Please put in here your tip rate without procent symbol"));

 function calculateBillAmount (billAmount,tipRate){

     let roundedBillAmount = Math.floor(billAmount);
     let roundedTipRate = Math.floor(tipRate);

     return Math.floor((roundedBillAmount*roundedTipRate)/100);
 }
 
 alert(calculateBillAmount(billAmount,tipRate));
*/



function calculateBillAmount (){

    let billAmount = parseInt(document.querySelector("#billAmount").value);
    let tipRate = parseInt(document.querySelector("#tipRate").value);

    let roundedBillAmount = Math.round(billAmount * 20) / 20; // I showed from Internet but I don't know if it does work!!
    let roundedTipRate = Math.round(tipRate * 20) / 20;

    let result =  (roundedBillAmount*roundedTipRate)/100;
    return document.querySelector('#result').innerHTML="The tip rate is" + " " + result; 
}


