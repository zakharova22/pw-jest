const { chromium } = require('playwright')


let browser
let page

beforeAll(async () => {
    browser = await chromium.launch();
}, 20000);

afterAll(async () => {
    if(browser) {
        await browser.close();
    }
});

beforeEach(async () => {
    page = await browser.newPage();
});

afterEach(async () => {
    await page.close();
});

it("Jest with playwright demo", async () => {
    await page.goto("https://example.com");
    expect (await page.title()).toBe('Example Domain')
}, 20000);