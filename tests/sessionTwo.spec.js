const { test, expect } = require('@playwright/test');
test('has title', async ({ page }) => {
    await page.goto('https://www.coldplay.com/');
    await page.getByRole('button', { name: 'Accept All Cookies' }).click();
    await page.getByRole('link', { name: 'SiGN UP', exact: true }).click();
    await expect(page.locator('h1')).toContainText('MAiLER');
});