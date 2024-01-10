
class AuthService {
    private userName: string ='admin'
    private password: string ='foo'

    public getUserName(): string {
        return this.userName
    }

}
let authService = new AuthService()
//authService.userName='admin'
console.log(authService.getUserName())