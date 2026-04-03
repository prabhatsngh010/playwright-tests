import { chromium, test } from "@playwright/test"

test("Login test demo", async () => {

    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]")
    //await page.click("text=Login")
    await page.click("'Login'")

    await page.fill("input[name='email']", "prabhatplay@yopmail.com")
    await page.fill("input[name='password']", "Test123$")
    await page.click("input[value='Login']");

    await page.waitForTimeout(5000);

    // ////////////////////////////////
    // //the below code open a new window and the session is going to preserved
    // const page1 = await context.newPage();
    // await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")

    // await page.waitForTimeout(5000);
    // //////////////////////////////


    //now we will learn if a new browser open so the session should be logged out automatically (just like incognitio)
    const newContext = await browser.newContext()

    const newPage = await newContext.newPage();
    await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")

    await page.waitForTimeout(5000);

})