import { test, expect } from '@playwright/test';
// import { USER_NAME, INCORRECT_PASSWORD } from './secrets.js';

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
    // Enter incorrect Password
  await page.getByRole('textbox', { name: 'Password' }).fill(INCORRECT_PASSWORD);
    // Click Log in button. Test should fail here
  await page.getByRole('button', { name: 'Log in' }).click();
    // Redirect to Portal login page never happens. Timeout error occurs here
  await page.getByRole('button', { name: 'User Profile' }).click();
    // In dropdown menu, click Logout option
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});
