export class LoginUser {
  constructor(
    public phone: string = '',
    public password: string = '',
    public autoLogin: boolean = false,
  ) {  }
}
