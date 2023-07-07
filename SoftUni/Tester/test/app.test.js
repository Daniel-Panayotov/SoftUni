let { expect } = require('chai');
const { chromium } = require('playwright-chromium');

let browser;
let page;

describe('E2E', async function () {
	before(async () => {
		browser = await chromium.launch({ headless: false });
	});
	after(async () => {
		await browser.close();
	});
	beforeEach(async () => {
		page = await browser.newPage();
	});
	afterEach(async () => {
		await page.close();
	});

	it('loads', async () => {
		await page.goto('http://localhost:5500');

		await page.locator('button', { hasText: 'LOAD ALL BOOKS' }).click();

		page.locator('tbody tr').nth(0);
		page.locator('tbody tr').nth(1);
		await page.screenshot({ path: 'pic.png' });
	});
});
