const page = require('../../page');
const helper = require('../../helper')

const fromAddress = 'East 2nd Street, 601';
const toAddress = '1300 1st St';
const message = 'Bring me a JavaScript studybook, please';
const iceCreamCount = 2;

describe('Create an order', () => {
    /*
    it('should set addresses correctly', async () => {
        await browser.url(`/`);
        await page.fillAddresses(fromAddress, toAddress);

        const fromFieldValue = await $(page.fromField).getValue();
        const toFieldValue = await $(page.toField).getValue();

        const isFilledCorrectly = fromFieldValue === fromAddress && toFieldValue === toAddress;
        await expect(isFilledCorrectly).toBe(true);
    })

    it('should select supportive plan', async () => {
        await browser.url(`/`);
        await page.fillAddresses(fromAddress, toAddress);
        await page.callATaxi();
       
        if (!(await page.isSupportivePlanSelected())) {
            await page.selectSupportivePlan();
        }

        await expect(await page.isSupportivePlanSelected()).toBe(true);
    })

    it('should fill phone number', async () => {
        await browser.url(`/`);
        await page.fillAddresses(fromAddress, toAddress);
        await page.callATaxi();

        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);

        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('should add a credit card', async () => {
        await browser.url(`/`);
        await page.fillAddresses(fromAddress, toAddress);
        await page.callATaxi();
        await page.addCard(123400004321, 12);

        const cardRow = await $(page.cardRow);
        await cardRow.waitForDisplayed();

        await expect(cardRow).toBeDisplayed();
    })

    it('should write a message to the driver', async () => {
        await browser.url(`/`);
        await page.fillAddresses(fromAddress, toAddress);
        await page.callATaxi();
        await page.fillMessageToTheDriver(message);

        const messageToTheDriverField = await $(page.messageToTheDriverField);
        await messageToTheDriverField.waitForDisplayed();

        await expect(await messageToTheDriverField.getValue()).toBe(message);
    })

    it('should select a blanket and handkerchiefs', async () => {
        await browser.url(`/`);
        await page.fillAddresses(fromAddress, toAddress);
        await page.callATaxi();

        if (!(await page.isSupportivePlanSelected())) {
            await page.selectSupportivePlan();
        }

        const blanketAndHandkerchiefsSwitch = await $(page.blanketAndHandkerchiefsSwitch);
        await blanketAndHandkerchiefsSwitch.waitForDisplayed();
        await blanketAndHandkerchiefsSwitch.click();

        const blanketAndHandkerchiefsSwitchInput = await $(page.blanketAndHandkerchiefsSwitchInput);
        //await blanketAndHandkerchiefsSwitchInput.waitForDisplayed();

        await expect(blanketAndHandkerchiefsSwitchInput).toBeChecked();
    })

    it('should add two ice creams', async () => {
        await browser.url(`/`);
        await page.fillAddresses(fromAddress, toAddress);
        await page.callATaxi();

        if (!(await page.isSupportivePlanSelected())) {
            await page.selectSupportivePlan();
        }

        await page.addIceCream(iceCreamCount);

        const iceCreamCountLabel = await $(page.iceCreamCountLabel);
        iceCreamCountLabel.waitForDisplayed();
        await expect(Number(await iceCreamCountLabel.getText())).toBe(iceCreamCount);
    })
   */

    it('car search modal should appear', async () => {
        await browser.url(`/`)
        await browser.url(`/`);
        await page.fillAddresses(fromAddress, toAddress);
        await page.callATaxi();

        if (!(await page.isSupportivePlanSelected())) {
            await page.selectSupportivePlan();
        }

        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);

        await page.addCard(123400004321, 12);
        const closeAddCardButton = await $(page.closeAddCardButton);
        //await closeAddCardButton.waitForDisplayed();
        await closeAddCardButton.click();

        await page.fillMessageToTheDriver(message);

        const blanketAndHandkerchiefsSwitch = await $(page.blanketAndHandkerchiefsSwitch);
        await blanketAndHandkerchiefsSwitch.waitForDisplayed();
        await blanketAndHandkerchiefsSwitch.click();

        await page.addIceCream(iceCreamCount);
    })
})

