class Account {
    constructor() {
        console.log('account')

    }
    deposit() {
        return 100
    }
}
class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('savings account')
    }
    //override
    deposit() {
        return 1000 + super.deposit()
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit())