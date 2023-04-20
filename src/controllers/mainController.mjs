import puppeteer from "puppeteer";
import list from "./BauruEmpregosController.mjs";
import getData from "./EmpregaBauruController.mjs";
import exitusRh from "./ExistusRhController.js";

async function main(req, res) {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 60,
  });

  const page = await browser.newPage();

  await Promise.all([/*list(page) ,  getData(page)  ,*/ exitusRh(page)])
    .then((values) => {
      res.status(200).json(values);
    })
    .catch((err) => console.log(err));
  await browser.close();
}

export { main };
