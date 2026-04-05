import { expect, test } from "@playwright/test";

test("Interaction with inputs", async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    const messageInput =  page.locator("input#user-message")
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message")
    console.log('Before entering the data' + await messageInput.inputValue());
    await messageInput.type("Hi Prabhat you wil be succeed");
    console.log('After entering the data: ' + await messageInput.inputValue());
})

////////////////////////////////////////////////////////////////////////////////////////////
// this code is teach by the instructor in youtube but this is not working as of now
// test("Sum", async ({ page }) => {
//     await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
//     const sum1input = page.locator("#sum1")
//     const sum2input = page.locator("#sum2")

//     const getValuesBtn = page.locator("//button[normalize-space(text())='Get Sum']")

//     let num1 = 121;
//     let num2 = 546;

//    await sum1input.type("" + num1);
//    await sum2input.type("" + num2);
//    await getValuesBtn.click()
//    const result = page.locator("#addmessage")
//    console.log(await result.textContent());
//    let expectedResult = num1 + num2;
//    expect(result).toHaveText("" + expectedResult)
// })

//// "" + it will do the string interpolation and return result in string format only
////////////////////////////////////////////////////////////////////////////////////

test("Sum", async ({ page }) => {
    // Navigate to the target page
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");

    // Scope to the correct section to avoid duplicate/hidden elements
    const container = page.locator("text=Two Input Fields").locator("..");

    // Locate elements inside the scoped container
    const sum1input = container.locator("#sum1");
    const sum2input = container.locator("#sum2");
    const getValuesBtn = container.locator("button:has-text('Get Sum')");

    // Test data
    let num1 = 121;
    let num2 = 546;

    // --- Enter first number ---
    await sum1input.click();              // Focus the input field
    await sum1input.clear();              // Clear any existing value
    await sum1input.type(num1.toString(), { delay: 100 }); 
    // Type like a real user (triggers JS events)

    // --- Enter second number ---
    await sum2input.click();              // Focus the input field
    await sum2input.clear();              // Clear any existing value
    await sum2input.type(num2.toString(), { delay: 100 }); 
    // Delay ensures app captures input events properly

    // Debug: verify what values are actually entered
    console.log("Input1:", await sum1input.inputValue());
    console.log("Input2:", await sum2input.inputValue());

    await page.pause();

    // Click the "Get Sum" button
    await getValuesBtn.click();

    // Locate result element inside same container
    const result = container.locator("#addmessage");

    // Debug: print result text
    console.log("Result:", await result.textContent());

    // Calculate expected result
    let expectedResult = num1 + num2;

    // Assertion: verify UI result matches expected sum
    // Playwright will auto-wait until the text matches or timeout occurs
    await expect(result).toHaveText(expectedResult.toString());
});



///checkbox interaction
test("checkbox", async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/checkbox-demo/");
    const singleCheckbox = page.locator("(//input[@type='checkbox'])[1]")
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();
})
