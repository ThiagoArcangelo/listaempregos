import puppeteer from "puppeteer";
import fs  from "fs";

// Model da aplicação 
import Vaga from "../model/vagas.js";

// Urls
import listBauruEmpregos from "./BauruEmpregos.js";
import listEmpregaBauru from "./EmpregaBauru.js";
import listExitusRh from "./ExistusRh.js";

async function main(req, res) {
  const browser = await puppeteer.launch({headless: "new"});

  const page = await browser.newPage();

  const url1 = await listBauruEmpregos(page);
  // const url2 = await listEmpregaBauru(page);
  const url3 = await listExitusRh(page);

  const listaDeVagas = [];

  listaDeVagas.push(url1);
  listaDeVagas.push(url3);  
  // listaDeVagas.push(url2); 

  fs.writeFile("data.json", JSON.stringify(listaDeVagas), 'utf8', function(err) {
    if(err) {
        return console.log(err);
    }
    res.send("Arquivo gravado com sucesso, vejam em : './data.json'");
});
  
  // res.send(listaDeVagas);
 
  await browser.close();
}

export default main