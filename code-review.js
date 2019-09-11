import { Selector, t } from "testcafe";

export default class LoginPageModel {
  constructor() {
    this.emailFieldText = Selector("#session_email");
    this.passwordFieldText = Selector("#session_password");
    this.logInButton = Selector("input").withAttribute("name", "commit");
  }

  async login(userInformation) {
    await t
      .typeText(this.emailInputText, userInformation.email, { paste: false })
      .typeText(this.passwordInputText, userInformation.password)
      .click(this.logInButton);
      console.log("Hello mundo")
  }
}
