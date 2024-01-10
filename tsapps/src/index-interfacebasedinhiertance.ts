interface Account {
    calculateInterest(): number
}
interface Loan {
    getLoan(): string
}

class GoldLoanAccount implements Account, Loan {
    calculateInterest(): number {
        return 10
    }
    getLoan(): string {
        return "GoldLoan"
    }
}
class HousingLoanAccount implements Account {
    calculateInterest(): number {
        return 15
    }
}
let loan = new GoldLoanAccount()
console.log(loan.calculateInterest())