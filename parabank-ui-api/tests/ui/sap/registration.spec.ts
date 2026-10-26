import { expect, test } from '@playwright/test';

test.describe('SAP India - SAP TechEd Berlin registration entry', () => {
  test('Navigate from SAP India to the SAP TechEd Berlin registration/login entry', async ({ page }) => {
    await test.step('Open the SAP India page', async () => {
      await page.goto('https://www.sap.com/india/index.html');
      await expect(page).toHaveURL('https://www.sap.com/india/index.html');
    });

    await test.step('Open registration from the SAP India page', async () => {
      const registerNowLink = page
        .getByRole('link', { name: 'Register now Build things' })
        .describe('Inferred Register now link on the SAP India page');
      await registerNowLink.click();
      await expect(page.getByRole('link', { name: 'Register below', exact: true })).toBeVisible();
    });

    await test.step('Open the registration page', async () => {
      const registerBelowLink = page
        .getByRole('link', { name: 'Register below', exact: true })
        .describe('Register below link on the SAP registration page');
      await registerBelowLink.click();
      const techedBerlinLearnMoreImage = page
        .getByRole('img', { name: 'SAP' })
        .nth(3)
        .describe('Unverified fourth SAP image target used for SAP TechEd Berlin Learn more');
      await expect(techedBerlinLearnMoreImage).toBeVisible();
    });

    await test.step('Open SAP TechEd Berlin details', async () => {
      const techedBerlinLearnMoreImage = page
        .getByRole('img', { name: 'SAP' })
        .nth(3)
        .describe('Unverified fourth SAP image target used for SAP TechEd Berlin Learn more');
      await techedBerlinLearnMoreImage.click();
      await expect(page.getByRole('button', { name: 'Register now SAP TechEd Berlin' })).toBeVisible();
    });

    await test.step('Open the SAP TechEd Berlin registration or login entry', async () => {
      const registerOrLogInButton = page
        .getByRole('button', { name: 'Register now SAP TechEd Berlin' })
        .describe('SAP TechEd Berlin Register or Log In button');
      const urlBeforeClick = page.url();
      await registerOrLogInButton.click();
      await expect(page).not.toHaveURL(urlBeforeClick);
    });
  });
});
