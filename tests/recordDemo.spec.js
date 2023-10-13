import { test, expect } from '@playwright/test';

test('test', async({page}) => {
  await page.goto('https://web-cs-react-git-er-bugfix-clean-up-implementa-d74cc2-metromart.vercel.app/welcome/cities/show');
  await page.getByText('LOGIN').click();
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill('armand@metromart.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Avalu Residences P. Guanzon, Poblacion, Makati, Metro Manila, Philippines dasas' }).click();
  await page.locator('div:nth-child(2) > div > .MuiPaper-root > div > div > .MuiButtonBase-root').first().click();
  await page.getByRole('button', { name: 'Add to Cart Bear Brand Sterilized 1% off ₱ 400.95₱ 405.00 Bear Brand Sterilized 7.5 inches x 6.9 inches x 5.5 inches Get ₱100 Off' }).getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('group', { name: 'Update Item Quantity' }).getByRole('button').nth(2).click({
    clickCount: 5
  });
  await page.getByRole('button', { name: 'bag 2' }).click();
  await page.frameLocator('iframe[title="Close message"]').getByRole('button', { name: 'Close message' }).click();
  await page.getByRole('link', { name: 'Checkout' }).click();
  await page.getByRole('button', { name: 'I don\'t want Free Delivery' }).click();
  await page.getByRole('button', { name: 'I don\'t want Free Delivery' }).click();
  await page.getByRole('button', { name: 'Select' }).first().click();
  await page.getByRole('button', { name: 'Choose', exact: true }).click();
  await page.getByRole('button', { name: 'Select' }).nth(2).click();
  await page.locator('div').filter({ hasText: /^Visa 2474$/ }).first().click();
  await page.getByRole('button', { name: 'Confirm Payment Method' }).click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('button', { name: 'Choose', exact: true }).click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.goto('https://payments-web-sandbox.paymaya.com/authenticate?id=1718426b-7c21-435e-9609-f24260815e8e');
  await page.goto('https://staging2.metromart.com/checkout-payments/payment-card/success');
  await page.goto('https://staging2.metromart.com/welcome/cities/show');

  // ---------------------
  await context.close();
  await browser.close();
});