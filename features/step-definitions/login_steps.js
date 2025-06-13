const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the login page', async () => {
    await browser.url(`https://the-internet.herokuapp.com/login`);
});

When('I enter my username and password', async () => {
    const usernameInput = await $('#username');
    const passwordInput = await $('#password');

    await usernameInput.setValue('tomsmith');
    await passwordInput.setValue('SuperSecretPassword!');
});

When('I click the login button', async () => {
    const loginButton = await $('button[type="submit"]');
    await loginButton.click();
});

Then('I should see the dashboard', async () => {
    const secureArea = await $('#flash');
    await expect(secureArea).toBeDisplayed();
    await expect(secureArea).toHaveTextContaining('You logged into a secure area!');
});
