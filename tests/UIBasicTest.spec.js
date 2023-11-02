const {test , expect, chromium} = require('@playwright/test')

test('Playwright Test', async ({browser})=> {
    
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagepractise')
});

test('Playwright Test 1', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagepractise')
})