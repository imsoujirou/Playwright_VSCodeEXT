import {test, expect} from '@playwright/test'

test('Home Page Test', async ({page}) => {

    await page.goto('https://www.demoblaze.com');
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://www.demoblaze.com');
    console.log('Page URL is ', page.url());
    await page.locator('id=login2').click();
    await page.locator('id=loginusername').fill('pavanol');
    await page.locator('id=loginpassword').fill('pavanol');

    await expect(page.locator(':has-text("Username:")')).toHaveText("Username:");

})