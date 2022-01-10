const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch(); // Launches the browser
    const page = await browser.newPage(); // Opens a new tab
    await page.goto('https://example.com'); // Navigates to https://example.com
    await page.screenshot({ path: 'example.png' }); // Takes a screenshot and saves it as “example.png”

    await browser.close(); // Closes the browser
})();

// you can also specify a different version of Chromium (or even Chrome!) via the executablePath config option, like so:
const browser = await puppeteer.launch({ executablePath: '/path/to/Chrome' });

// One important feature of Puppeteer you’ll want to take advantage of is called “headless mode.”
// it runs them without showing you the results in the browser however, if you want to watch each of the individual tests take place before your eyes(like magic!), 
// you can turn it off via the following config option:
const browser = await puppeteer.launch({ headless: false }); // default is true

// Turning off headless mode also makes available a slowMo option for running your tests.You can turn on the slowMo option by tweaking your headless config option like so:
// The larger the number, the slower the tests will run
const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250 // slow down by 250ms
});

