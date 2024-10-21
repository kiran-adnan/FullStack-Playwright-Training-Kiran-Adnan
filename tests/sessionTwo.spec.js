const { test, expect } = require('@playwright/test');
test('has title', async ({ page }) => {
    await page.goto('https://www.coldplay.com/');
    await page.getByRole('button', { name: 'Sign up' });
    await expect(page.locator('h1')).toContainText('MAiLER');
});