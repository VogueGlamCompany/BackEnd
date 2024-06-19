const puppeteer = require( "puppeteer")
const fs = require ("fs")

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

const getDataWebPage = async ( ) =>{
    const browser = await puppeteer.launch({
        headless : false,
        slowMo: 400
    })
    const page = await browser.newPage()

    await page.goto("https://www.example.com")
    await page.click(`a[href="/login"]`)
    const result = await page.evaluate(()=> {
       const title =  document.querySelector("h1").innerText 
       const description = document.querySelector("p").innerText 
       const more = document.querySelector("a").innerText 
       return{
        title,
        description,
        more
       }
    })
    
    await browser.close()
}

const handleDynamicWebPage = async ( ) =>{
    const browser = await puppeteer.launch({
        headless : false,
        slowMo: 400
    })
    const page = await browser.newPage()

    await page.goto("https://quotes.toscrape.com")
    await page.click(`a[href="/login"]`)
    const result = await page.evaluate(()=> {
       const quotes =  document.querySelectorAll(".quote")
       const data = [...quotes].map(quote => {
        const quouteText = quote.querySelector(".text").innerText;
        const author = quote.querySelector(".author").innerText;
        const tags = [...quote.document.querySelector(".tag")].map((tag)=> tag.innerText)
        return{
            quouteText,
            author,
            tags
           }
       })
       return data
    })
    console.log(result)

    fs.writeFile("quotes.json", JSON.stringify(result,null,2))
    
    await browser.close()
}

module.exports = navigateWebPage,getDataWebPage,handleDynamicWebPage