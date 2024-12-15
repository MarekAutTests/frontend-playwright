import {test, expect} from '@playwright/test'
import {faker} from '@faker-js/faker'
import {configDotenv} from "dotenv"

configDotenv()

test.beforeEach(async ({page}) => {
    await page.goto(process.env.URL)
})

test('Check submit enabled', async ({page}) => {
    const submitButton = page.getByTestId('signIn-button')
    await expect(submitButton).toBeEnabled()
})

test('Check PopUp visible', async ({page}) => {
    const userNameField = page.getByTestId('username-input')
    const userEmailField = page.getByTestId('password-input')

    await userNameField.fill("test")
    await userEmailField.fill("test@test.com")
    const submitButton = await page.getByTestId('signIn-button')
    await submitButton.click()
    const authPopUp = page.getByTestId('authorizationError-popup')
    await expect(authPopUp).toBeVisible()
})

test('Check PopUp visible with faker framework', async ({page}) => {
    const userNameField = page.getByTestId('username-input')
    const userEmailField = page.getByTestId('password-input')

    await userNameField.fill(faker.internet.username())
    await userEmailField.fill(faker.internet.email())
    const submitButton = page.getByTestId('signIn-button')
    await submitButton.click()
    const authPopUp = page.getByTestId('authorizationError-popup')
    await expect(authPopUp).toBeVisible()
})
