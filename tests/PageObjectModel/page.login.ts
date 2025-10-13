import {type Locator, type Page, type expect} from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){
        this.page=page;
        this.emailInput=page.getByRole('textbox', {name: 'email'});
        this.passwordInput=page.getByRole('textbox', {name: 'password'});
        this.loginButton=page.getByRole("button").getByText("Login");
    }

    async openURL(){
        await this.page.goto("https://practicesoftwaretesting.com/auth/login");
    }

    async login(email: string, password: string){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}