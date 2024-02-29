import cluster, { Cluster } from "puppeteer-cluster";

// Model da aplicação 
import Vaga from "../model/vagas.js";

// Urls
import listBauruEmpregos from "./BauruEmpregos.js";
import listEmpregaBauru from "./EmpregaBauru.js";
import listExitusRh from "./ExistusRh.js";

async function ClusterMain(req, res) {
  const browser = await cluster.launch({concurrency: Cluster.CONCURRENCY_CONTEXT, maxConcurrency : 10});

  await cluster.task(async ({page, data: url}) => {
    await page.goto(url)

    const listaDeVagas = [];

    listaDeVagas.push(url1);
    listaDeVagas.push(url3);  
    // listaDeVagas.push(url2);
  
    const url1 = await listBauruEmpregos(page);
    // const url2 = await listEmpregaBauru(page);
    const url3 = await listExitusRh(page);
  })



//   const page = await browser.newPage();

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

export default ClusterMain