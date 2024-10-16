import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('kiran.adnan1');
  await page.getByLabel('Password:').fill('Test123');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Username:').fill('kiran.adnan1');
  await page.getByLabel('Password:').fill('Test123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Welcome kiran.adnan1' });
});