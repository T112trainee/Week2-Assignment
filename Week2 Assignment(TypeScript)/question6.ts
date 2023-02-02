//Type of Profit that we have to choose
enum ProfitType {
  Monthly = 'Month',
  Quarterly = 'Quarterly',
  SemiAnnually = 'Semester',
  Yearly = 'Annually',
}

function CalculateBankProfit(
  accountNumber: string,
  accountHolderName: string,
  amountInAccount: number,
  profitType: ProfitType
) {
  let profitRate: number; //Single varible for Profit rate of all types
  let amountOfProfit: number; //Calculated Profit
  let totalAmountWithProfit: number; //Calculated total amount in account with profit
  let ammountDetails: string;

  //Select the profit rate
  switch (profitType as ProfitType) {
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

let accountHolderName: string = 'John'; //Name of the account holder
let accountNumber: string = 'SBI0001'; //Account Number
let amountInAccount: number = 10_000_000; //Amount in account
let profitType: ProfitType = ProfitType.Monthly;

console.log(
  CalculateBankProfit(
    accountNumber,
    accountHolderName,
    amountInAccount,
    profitType
  )
);
