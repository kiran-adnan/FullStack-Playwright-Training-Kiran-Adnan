import { test, expect } from '@playwright/test';
import {URL, USERNAME, PASSWORD} from '../fixtures/constants.js';

test('test', async ({ page }) => {
  //Vist URL
  await page.goto(URL);

  //Sign Up
  await signUp(page);

  //Login
  await Login(page);

  // Assertion
  await expect (page.getByRole('link', { name: 'log out' })).toBeVisible();
});

async function signUp(page) {
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill(USERNAME);
  await page.getByLabel('Password:').fill(PASSWORD);
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Sign up' }).click();
}

async function Login(page) {
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill(USERNAME);
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill(PASSWORD);
  await page.getByRole('button', { name: 'Log in' }).click(); 
}