// const playwright = require('playwright');

// test('Verify links and text on sub menu', async () => {
//     jest.setTimeout(40000);

//     const browser = await playwright['chromium'].launch();
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto('https://www.nasa.gov/topics/humans-in-space');
    
//     page.once('load', () => {});
 
//     await page.mouse.up();

//     await page.screenshot({ path: `./images/scroll/down-${browserType}.png` });
//     await page.mouse.down();
     
//     await page.screenshot({ path: `./images/scroll/up-${browserType}.png` });
 
//     await browser.close();
    
// });