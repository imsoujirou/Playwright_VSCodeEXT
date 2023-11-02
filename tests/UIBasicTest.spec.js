const {test , expect, chromium} = require('@playwright/test')

test.skip('Playwright Test', async ({browser})=> {
    
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
});

test.skip('Playwright Test 1', async ({page}) => {
    await page.goto('https://www.google.com')
    await expect(page).toHaveURL('https://www.google.com')
    await expect(page).toHaveTitle('Google')
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
})

test('Validation for Incorrect Password', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await expect(page).toHaveURL('https://rahulshettyacademy.com/loginpagePractise/')
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
    console.log(await page.title());
    await page.locator('#username').type('rahulshetty');
    await page.locator("[type='password']").type('learning1');
    await page.locator('Input#signInBtn').click();
    console.log(await page.locator('div.alert.alert-danger.col-md-12').textContent())
})

test('Login Successful', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await expect(page).toHaveURL('https://rahulshettyacademy.com/loginpagePractise/')
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
    console.log(await page.title());
    await page.locator('#username').type('rahulshetty');
    await page.locator("[type='password']").type('learning');
    await page.locator('Input#signInBtn').click();
})