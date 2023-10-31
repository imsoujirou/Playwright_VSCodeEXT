const {test, expect} = require('@playwright/test')

test('Home Page Test', async ({page}) => {

    await page.goto('https://www.demoblaze.com');
    expect(page).toHaveTitle('Store')
    expect(page).toHaveURL('https://www.demoblaze.com');

})