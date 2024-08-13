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
  // const url2 = await listEmpregaBauru(page);
  const url3 = await listExitusRh(page); //

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

//#region Objeto Map
  // const retorno = JSON.stringify(listaDeVagas);
 
  //#region Rotina para salvar dados em arquivo local com o filesystem
//   Escrever arquivo data.json
//   fs.writeFile("data.json", JSON.stringify(listaDeVagas), 'utf8', function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     res.send("Arquivo gravado com sucesso, vejam em : './data.json'");
// });

  
  // res.send(listaDeVagas);

  // const resultado = retorno.split(',').map((elemento) => {
  //   salvarDados(elemento); 
  // }) ;
  //#endregion

  // const resultado = retorno.split(',').map((elemento) => {
  //   elemento.split(',').map(item => {
  //     salvarDados(item); 
  //   })
  // })  
  //#endregion

  await Vaga.deleteMany();

  listaDeVagas.map((item) => {
    Array.from(item).map(dados => {
      salvarDados(dados);
    });
    
  });

  //#region Transforma os dados em Array  
  /*const resultado =Array.from(listaDeVagas).map((item) => {
    Array.from(item).map((valor) => {
      const retorno = JSON.stringify(valor);
      salvarDados(retorno);
    });
  }); */ 
  //#endregion
  
  res.send(listaDeVagas);
 
  await browser.close();
}

export default main