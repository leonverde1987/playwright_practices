import { test, expect } from "@playwright/test"

test("getByRole getByPlaceholder getByText examples", async ({ page })=> {
    await page.goto('/');
    await page.getByRole('menuitem').getByText("Sign in").click();
    await page.getByPlaceholder('Your email').fill("customer@practicesoftwaretesting.com");
    await page.getByPlaceholder('Your password').fill('welcome01');
    await page.getByRole('button').getByText('Login').click();
});

test("toBeVisible toBeEnabled toContainText examples", async ({ page })=> {
    await page.goto('/');
    await page.getByRole('menuitem').getByText("Sign in").click();
    await page.getByPlaceholder('Your email').fill("customer@practicesoftwaretesting.com");
    await page.getByPlaceholder('Your password').fill('welcome01');
    await page.getByRole('button').getByText('Login').click();
    await expect(page.getByRole('button').getByText('Favorites')).toBeVisible();
    await expect(page.getByRole('button').getByText('Profile')).toBeEnabled();
    await expect(page.getByRole('button').getByText('Invoices')).toContainText('Invoices');
});