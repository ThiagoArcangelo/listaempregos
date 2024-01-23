import puppeteer from "puppeteer";
import listBauruEmpregos from "./BauruEmpregosController.mjs";
import listEmpregaBauru from "./EmpregaBauruController.mjs";
import listExitusRh from "./ExistusRhController.js";

async function main(req, res) {
  const browser = await puppeteer.launch({
    /*  headless: false,
    slowMo: 60, */
  });

  const page = await browser.newPage();

  await Promise.all([
    /*listBauruEmpregos(page),*/ listEmpregaBauru(
      page
    ) /*, listExitusRh(page),*/,
  ])
    .then((values) => {
      res.status(200).json(values);
    })
    .catch((err) => console.log(err));
  await browser.close();
}

export { main };
