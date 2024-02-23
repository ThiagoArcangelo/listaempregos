import puppeteer from "puppeteer";

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

  let message = "";

  // const resultado = JSON.stringify(listaDeVagas);

  async function inserirDados() {
    try {
      
      await Promise.all(listaDeVagas.map((item) => {
        const vaga = new Vaga(item);   
    
        vaga.save(err => {
          if(err) return console.error(err);      
    
          message = "Arquivos salvos no banco de dados!";
          // return item;
        });
        
      }));

      res.send(message);
      
    } catch (error) {
      console.log(error);
    }
  }

  inserirDados();

  res.send(message);
 
  await browser.close();
}

export default main