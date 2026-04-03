import { test } from "@playwright/test";

test("", async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    const messageInput =  page.locator("input#user-message")
})