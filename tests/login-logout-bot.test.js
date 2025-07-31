import { test, expect } from '@playwright/test';
// import { USER_NAME, PASSWORD } from './secrets.js';

test('test', async ({ page }) => {
    // navigate to Portal login page
  await page.goto('https://serve.mlf.org/s/');
    // Click Login or Register button
  await page.getByRole('button', { name: 'Login or Register' }).click();
    // Click Username text box
  await page.getByRole('textbox', { name: 'Username' }).click();
    // Enter Username
  await page.getByRole('textbox', { name: 'Username' }).fill(USER_NAME);
    // Click Password text box
  await page.getByRole('textbox', { name: 'Password' }).click();
    // Enter Password
  await page.getByRole('textbox', { name: 'Password' }).fill(PASSWORD);
    // Click Log in button
  await page.getByRole('button', { name: 'Log in' }).click();
    // After redirect to Portal login page, click User Profile button
  await page.getByRole('button', { name: 'User Profile' }).click();
    // In dropdown menu, click Logout option
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});
