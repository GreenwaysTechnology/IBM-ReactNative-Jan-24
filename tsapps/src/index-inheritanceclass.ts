class Account {
    constructor() {
        console.log('Account class')
    }
    protected deposit(): number {
        return 100
    }
}
class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('Savings account')
    }
    public deposit(): number {
        return 1000 * super.deposit()
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit());
