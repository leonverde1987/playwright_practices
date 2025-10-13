import { expect, test} from '@playwright/test';
import { LoginPage } from '../PageObjectModel/page.login';
import { DashboardPage } from '../PageObjectModel/page.dashboard';


test('Login with correct credentials', async({page})=> {

  const loginPage = new LoginPage(page);
  const dashPage = new DashboardPage(page);

  await loginPage.openURL();
  await loginPage.login('customer@practicesoftwaretesting.com','welcome01');

  await dashPage.validateSesion("Jane Doe","My account");

});