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

  let retorno = Array.from(listaDeVagas).map(async (item) => {
    let resultados = Array.from(item)//.map(elementos => {return JSON.parse(elementos)})
    // return item;

    // await Promise.all(retorno.split('\n').map((item) => {
            
    //         const vaga = new Vaga(item);   

    //         if(item != null)    {
    //           vaga.save();
    //           message += "Operação realizada com sucesso";
    //         }    
    //         else {
    //           message += "Erro ao processar a requisição"
    //         }
            
    //       }));
    

    // if(resultados != ""){
    //   for(resultado  of resultados){
    //     let vaga = new Vaga({resultado})
  
    //     await vaga.save();

    //     message += "Operação realizada com sucesso";

    //     return message;
    //   } 
    // }
    // else {
    //   message += "Erro ao processar requisição";

    //   return message;
    // }
    
    
  })

  // const resultado = JSON.parse(listaDeVagas, (key, value) => {
  //   return value;
  // });

  // async function inserirDados() {
  //   try {
      
  //     await Promise.all(listaDeVagas.map((item) => {
  //       const objeto = {
  //         vaga: item.vaga,
  //         local: item.local,
  //         url: item.url,
  //       }
  //       const vaga = new Vaga(objeto);   
    
  //       vaga.save();
        
  //     }));

  //     res.send(message);
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // inserirDados();

  res.send(message);
 
  await browser.close();
}

export default main