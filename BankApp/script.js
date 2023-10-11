let array = [];
let balance = 0;
AccountCreated = false;
let report = document.getElementById("report");
let report2 = document.getElementById("report2");
document.getElementById("back").style.display = "none";
//CreateAccount
function CreateAccount() {
    let Username = prompt("Hello, Whats Your Name:");
    GeneratedId = Math.floor(Math.random()* 25);
    array.push(GeneratedId);
    setTimeout(function()  {
        report.textContent = "Account Created. Username: " + Username + ". Id: " + GeneratedId + "."; 
        AccountCreated = true;
        document.getElementById("CreateAccountId").style.display = "none";
        console.log(GeneratedId)
    }, 1000);
}
//DepositFunds
function DepositFunds() {
    if(AccountCreated) {
    let DepositFundsAnswer = prompt("Hello Please Type Your Id To Continue");
    
    if(array.includes(parseInt(DepositFundsAnswer))) {
        let moneyTransfer = prompt("Type How Much Money You Want To Deposit");
        balance += parseInt(moneyTransfer);
        setTimeout(function()  {
            report.textContent = "Deposit Succesfull";
        }, 500);
    } else {document.getElementById("report").textContent = "Wrong Id!"}
} else {
    report.textContent = "You Must Create Account Before Deposit";
}
}
//WithdrawFunds 
function WithdrawFunds() {
    if (AccountCreated) {
    let idChecker = prompt("Hello, Please Type Your Id");
    if (array.includes(parseInt(idChecker))) {
        let MoneyWithdraw = prompt("How Much Money You Want To Withdraw");
        if (balance >= MoneyWithdraw) {
            balance -= MoneyWithdraw;
            report.textContent = "Withdraw Succesfull";
        } else {
            report.textContent = "Not Enough Balance";
        }
    } else {
        report.textContent = "Wrong Id!";
    }
} else {
    report.textContent = "You Must Create Account Before Withdraw";
}
}
//CheckBalance 
function CheckBalance() {
    report.textContent = "Balance: " + balance;
}
//exit
function Exit() {
    array = [];
    balance = 0;
    AccountCreated = false;
    document.getElementById("card1").style.display = "none";
    report2.textContent = "You Exited";
    document.getElementById("back").style.display = "block";
    document.getElementById("back").textContent = "Back To BankApp";
    report.textContent = " ";
   
}
function backBankApp() {
    document.getElementById("CreateAccountId").style.display = "block";
    document.getElementById("card1").style.display = "block";
    report2.textContent = "none";
    document.getElementById("back").style.display = "none";
    report2.textContent = " ";
}