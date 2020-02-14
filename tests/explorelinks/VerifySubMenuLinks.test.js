// const playwright = require('playwright');

// test('Verify links and text on sub menu', async () => {
//     jest.setTimeout(40000);

//     const browser = await playwright['chromium'].launch();
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto('https://www.nasa.gov/topics/humans-in-space');
    
//     page.once('load', () => {});
//     await page.waitForSelector('#ember1181 > a');
//     await page.click('#ember1181 > a');

//     page.once('load', () => {});
//     expect(await page.title()).toBe("Humans in Space Videos | NASA")

//     await page.screenshot({ path: `./images/links/${browserType}.png` });
//     await browser.close();

// });