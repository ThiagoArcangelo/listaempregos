import puppeteer from "puppeteer";
import listCrowler from "./crowlerController.mjs";

async function main(req, res) {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await Promise.all([listCrowler(page)])
    .then((values) => {
      res.status(200).send(values);
    })
    .catch((err) => console.log(err));
  await browser.close();
}

export default main;
