// const playwright = require('playwright');

// test('capturing the webpage humans in space from NASA ', async () => {
//   jest.setTimeout(25000);
//   for (const browserType of ['chromium', 'firefox', 'webkit']) {
//     const browser = await playwright[browserType].launch();
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto('https://www.nasa.gov/topics/humans-in-space');
    
//     expect(await page.title()).toBe("Humans in Space | NASA")
//     await page.screenshot({ path: `./images/his/${browserType}.png` });
//     await browser.close();
    
//   }
// });