const puppeteer = require('puppeteer');

module.exports = async function favorites(url){
    let attempt = 0

    const browser = await puppeteer.launch({ headless: false, protocolTimeout: 60000 * 5 })
    const page = await browser.newPage()
    await page.goto('http://zefoy.com')
    await page.waitForSelector('.t-favorites-button')

    const process = async() => {
        console.log(`[${attempt}] attempting brute favorite...`)
        attempt++

        try {
            await page.click('.t-favorites-menu .input-group-append button')
            await new Promise(r => setTimeout(r, 2000));
    
            let timerEl = await page.$('.t-favorites-menu div[id] span')
            let timer = await page.evaluate(el => el.textContent, timerEl)
            if(timer.includes('Please wait')) {
                await page.waitForFunction(`document.querySelector('.t-favorites-menu div[id] span') ? document.querySelector('.t-favorites-menu div[id] span').textContent.includes('READY') : false`, { timeout: 60000 * 5 })
                return await process()
            }
    
            await page.click('.t-favorites-menu .input-group-append button')
            await page.waitForSelector('.t-favorites-menu div[id] button')
            let viewsEl = await page.$(`.t-favorites-menu div[id] button`)
            let views = await page.evaluate(el => el.textContent, viewsEl)
            console.log(`${views} favorites, adding 100 favorite`)
    
            await page.click('.t-favorites-menu div[id] button')
            await new Promise(r => setTimeout(r, 5000));
            await page.waitForSelector('.t-favorites-menu div[id] span')
    
            return process()
        } catch (error) {
            console.log(`[${attempt}] Attempt brute favorite failed!`)
            await process()
        }
    }
    
    setTimeout(async() => {
        let button = await page.$('.t-favorites-button')
        await button.click()

        await page.waitForSelector('input[type="search"]');
        await page.type('.t-favorites-menu input', url)

        await process()
    }, 2000);
}