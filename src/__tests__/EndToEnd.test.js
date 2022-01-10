import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
        jest.setTimeout(30000);
        browser = await puppeteer.launch();
        // beforeAll(async () => {
        //     jest.setTimeout(30000);
        //     const browser = await puppeteer.launch({
        //         headless: false,
        //         slowMo: 250, // slow down by 250ms
        //         ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
        //     });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeNull();
    });

    test('click on a show-details button to expand the event details', async () => {
        await page.click('.event .show-details-btn');
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide its details', async () => {
        await page.click('.event .hide-details-btn');
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeNull();
    });

});