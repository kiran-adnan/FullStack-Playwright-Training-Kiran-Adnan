const { test, expect } = require('@playwright/test');
test('has title', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.locator ('#APjFqb').click();
    await page.locator ('#APjFqb').fill('playwright');
});