class BankAccount {
    constructor(accountNumber, ownerName, balance = 0) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(amount + " has been added to bank account");
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`${amount} has been removed from bank account`);
        } else {
            console.log("Insuficient funds , cant withdraw from bank account");
        }
    }
    getBalance() {
        console.log(`you have ${this.balance} BDT`);
    }
    displayAccountInfo() {
        console.log(`account number: ${this.accountNumber} \nowner name: ${this.ownerName} \nbalance: ${this.balance}`);
    }

}

//=============================================
// ===============Class ends here==============
//=============================================

// declaring two variables for creating instances 
let bankAccount1, bankAccount2;

// First making two instances of BankAccount
bankAccount1 = new BankAccount(2412, "Ahsan Alam", 500)
bankAccount2 = new BankAccount(5741, "Hasin Haydar", 1000)

// user one bank account 
bankAccount1.deposit(20000)
bankAccount1.withdraw(1500)
bankAccount1.getBalance()
bankAccount1.displayAccountInfo()

console.log("\n======================================\n");

// user two bank account 
bankAccount2.deposit(120000)
bankAccount2.withdraw(1500)
bankAccount2.getBalance()
bankAccount2.displayAccountInfo()