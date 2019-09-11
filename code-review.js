import { Selector, t } from "testcafe";

export default class LoginPageModel {
  constructor() {
    this.emailFieldText = Selector("#session_email");
    this.passwordFieldText = Selector("#session_password");
    this.logInButton = Selector("input").withAttribute("name", "commit");
    alert("This is a test 2-1")
    console.log("XD")
  }

  async login(userInformation) {
    await t
      .typeText(this.emailInputText, userInformation.email, { paste: false })
      .typeText(this.passwordInputText, userInformation.password)
      .click(this.logInButton);
      console.log("Hello World 2019-1")
      console.error("Error")
  }
}
