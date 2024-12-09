import { test, expect } from '@playwright/test';
import {URL, USERNAME, PASSWORD} from '../fixtures/constants.js';
//import loginClass from '../pages/loginPage.js';
const { loginClass } = require('../page/loginPage.js');

// test.describe('Page Object Modal', () => {

//     const randomUsername = Math.random().toString(36).substring(2,7);
//     console.log(randomUsername);
//     const randomPassword = Math.random().toString(36).substring(2,7);
//     console.log(randomPassword);

    test('Verify user can sign up', async ({ page }) => {

        // Object of loginClass
        const loginObject = new loginClass(page);

        // Visit webite function
        await loginObject.gotoSite();

        // SignUp Flow
        await loginObject.userSignUp();
  
        // Login Flow
        await loginObject.userLogin();
  
        //await loginObject.signUp()
  
        //Login Assertions
        await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
        console.log('First assertion passed...');
        await expect(page.locator('#logout2')).toContainText('Log out');
        console.log('Second assertion passed...');
    });

    // test.skip('Verify user can Login', async ({ page }) => {

    //     // Object of loginClass
    //     const loginObject = new loginClass(page);

    //     // Visit webite function
    //     await loginObject.gotoSite();

    //     // Login Flow
    //     await loginObject.userLogin(randomUsername, randomPassword);

    //     //await loginObject.signUp()

    //     //Login Assertions
    //     await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
    //     console.log('First assertion passed...');
    //     await expect(page.locator('#logout2')).toContainText('Log out');
    //     console.log('Second assertion passed...');
    // });
//});