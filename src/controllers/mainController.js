import puppeteer from "puppeteer";
import listBauruEmpregos from "./BauruEmpregosController.js";
import listEmpregaBauru from "./EmpregaBauruController.js";
import listExitusRh from "./ExistusRhController.js";

async function main(req, res) {
  const browser = await puppeteer.launch({
    headless: "new",
    // slowMo: 60,
  });

  const page = await browser.newPage();

  const url1 = await listBauruEmpregos(page);
  const url2 = await listEmpregaBauru(page);
  const url3 = await listExitusRh(page);

  // const bauruEmpregosAlreadyExists = Promise.resolve(url1);
 /*  const bauruEmpregosAlreadyExists = new Promise((resolve, reject) => {
    if(!url1) {
      reject("Conteúdo não disponível");
    }
    resolve("O conteúdo existe mas não foi renderizado por algum motivo.");
  })
  .then((data) => {return data})
  .catch(err => console.log(err))

   const empregaBauruAlreadyExists = Promise.resolve(url2);
  const exitusRhAlreadyExists = Promise.resolve(url3);  */

/*   const resolvePromise = Promise.all([bauruEmpregosAlreadyExists , empregaBauruAlreadyExists, exitusRhAlreadyExists ])
    .then((values) => {
      return values;
    })
    .catch(error => console.log(error)); */
 

  // res.status(200).json(bauruEmpregosAlreadyExists);
   res.status(200).json(url2);

  await browser.close();
}

export default main