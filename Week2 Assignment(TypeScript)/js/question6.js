"use strict";
//Type of Profit that we have to choose
var ProfitType;
(function (ProfitType) {
    ProfitType["Monthly"] = "Month";
    ProfitType["Quarterly"] = "Quarterly";
    ProfitType["SemiAnnually"] = "Semester";
    ProfitType["Yearly"] = "Annually";
})(ProfitType || (ProfitType = {}));
function CalculateBankProfit(accountNumber, accountHolderName, amountInAccount, profitType) {
    let profitRate; //Single varible for Profit rate of all types
    let amountOfProfit; //Calculated Profit
    let totalAmountWithProfit; //Calculated total amount in account with profit
    let ammountDetails;
    //Select the profit rate
    switch (profitType) {
        case ProfitType.Monthly:
            profitRate = 4;
            break;
        case ProfitType.Quarterly:
            profitRate = 6;
            break;
        case ProfitType.SemiAnnually:
            profitRate = 8;
            break;
        case ProfitType.Yearly:
            profitRate = 10;
            break;
    }
    //Calculate Profit
    amountOfProfit = (amountInAccount * profitRate) / 100;
    totalAmountWithProfit = amountInAccount + amountOfProfit;
    //Message preparation for Console
    ammountDetails = `${accountHolderName} gets ${amountOfProfit} with the rate of
  ${profitRate}% for first ${profitType}, And total amount
  in bank becomes ${totalAmountWithProfit}.`;
    console.log(ammountDetails);
}
let accountHolderName = 'John'; //Name of the account holder
let accountNumber = 'SBI0001'; //Account Number
let amountInAccount = 10000000; //Amount in account
let profitType = ProfitType.Monthly;
console.log(CalculateBankProfit(accountNumber, accountHolderName, amountInAccount, profitType));
