const puppeteer = require("puppeteer")

const bot = async () => {
    let options = {
        headless: true,
        args: ['--no-sandbox']
    };
  
    let browser = await puppeteer.launch(options);   

    const page = await browser.newPage();
    await page.goto("http://google.com"),{
        waitUntil: 'networkidle2'
    }
   await browser.close()
    return 'Done'

}

module.exports = bot;