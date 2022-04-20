const path = require("path");

const puppeteer = require("puppeteer");

module.exports = (async function createView() {
    const browser = await puppeteer.launch({"headless": true});
    const page = await browser.newPage();
    await page.goto(`file:///${path.resolve(path.dirname(require.main.filename), "view_build/index.html")}`);
    await page.setViewport({"width": 640, "height": 360});
    async function createView(type, players){
        await page.waitForSelector("#btn-game-info");
        await page.$eval("#input-game-info", (element, type, players) => {
            element.value = JSON.stringify({"type": type, "players": players});
        }, type, players);
        await page.click("#btn-game-info");
        return await page.screenshot({
            "type": "webp",
            "quality": 75
        });
    }
    return { createView };
})();