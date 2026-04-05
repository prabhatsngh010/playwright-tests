import { expect, test } from "@playwright/test";

test("handling alerts", async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");

    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);
        await alert.accept();
    })

    await page.locator("button:has-text('Click Me')").nth(0).click();
})

test.only("handling alerts type 2", async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");

    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);
        await alert.dismiss();
    })

    await page.locator("button:has-text('Click Me')").nth(1).click();
    await expect(page.locator("#confirm-demo")).toHaveText("You pressed Cancel!");
})
