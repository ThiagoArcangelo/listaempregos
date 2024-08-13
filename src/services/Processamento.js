import puppeteer from "puppeteer";
// import fs  from "fs";

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
  const url3 = await listExitusRh(page);

  const listaDeVagas = [];

  listaDeVagas.push(url1);
  listaDeVagas.push(url3);  

  const salvarDados = async (dt) => {
    const info = new Vaga({
      Vaga: dt.vaga,
      Local: dt.local,
      Url: dt.url
    });

    await info.save();
  }

  await Vaga.deleteMany();

  listaDeVagas.map((item) => {
    Array.from(item).map(dados => {
      salvarDados(dados);
    });
    
  });
  
  res.send(listaDeVagas);
 
  await browser.close();
}

export default main