const puppeteer = require( "puppeteer")

const navigateWebPage = async ( ) =>{
    const browser = await puppeteer.launch({
        headless : false,
        slowMo: 400
    })
    const page = await browser.newPage()

    await page.goto("https://quotes.toscrape.com")
    await page.click(`a[href="/login"]`)
    await new Promise(r = setTimeout(r, 500))
    await browser.close()
}

module.exports = navigateWebPage