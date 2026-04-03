import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]")
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('prabhatplay@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test123$');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('prabhat singh');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]")
  //await page.getByRole('link', { name: 'Logout', exact: true }).click();
  await page.locator('span:has-text("Logout")').click();
});