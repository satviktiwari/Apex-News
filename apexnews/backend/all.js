const puppeteer = require("puppeteer");

module.exports = async (req, res) => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  await page.goto("https://inshorts.com/en/read", {
    waitUntil: "networkidle2",
  });
  await page.waitForSelector("#load-more-btn");

  await page.click("#load-more-btn");

  await page.waitForSelector("#load-more-btn");

  await page.waitFor(1000);

  let responseJson = await page.evaluate(() => {
    let data = [];

    let cards = document.querySelectorAll(".news-card");

    cards.forEach((ele) => {
      let obj = {
        title: ele.querySelector(".news-card-title a").text.trim(),

        description: ele.querySelector(".news-card-content div").textContent,

        author: ele.querySelector(
          ".news-card-title .news-card-author-time .author"
        ).textContent,

        inshortsLink: ele.querySelector(".news-card-title a").href,

        image: ele
          .querySelector(".news-card-image")
          .style.backgroundImage.split('"')[1],

        timeStamp: ele
          .querySelector(".news-card-title .news-card-author-time .time")
          .getAttribute("content"),

        readMore:
          ele.querySelector(".news-card-footer div a") != null
            ? ele.querySelector(".news-card-footer div a").href
            : "",
      };
      data.push(obj);
    });

    let responseObj = {
      category: "all",
      totalArticles: `${data.length}`,
      data: data,
    };

    return Promise.resolve(responseObj);
  });
  res.json(responseJson);

  await page.close();

  await browser.close();
};
