import { Cluster } from "puppeteer-cluster";

// Model da aplicação 
import Vaga from "../model/vagas.js";

// Urls
import listBauruEmpregos from "./BauruEmpregos.js";
import listEmpregaBauru from "./EmpregaBauru.js";
import listExitusRh from "./ExistusRh.js";

const listaDeVagas = [];

async function main(req, res) 
{ //
    try
    {

        const cluster = await Cluster.launch({concurrency: Cluster.CONCURRENCY_CONTEXT, maxConcurrency: 2, headless: "new"});

        let result = await cluster.task(async ({page, data: url}) => 
        {

            const url1 = await listBauruEmpregos(page);
            const url3 = await listExitusRh(page); 

            // listaDeVagas.push(url1);
            // listaDeVagas.push(url3);  


            // await Promise.all(listaDeVagas.map((item) => 
            // {
            //     const objeto = {
            //         vaga: item.vaga,
            //         local: item.local,
            //         url: item.url,
            //     }

            //     const vaga = new Vaga(objeto);   
            
                cluster.queue(url1);
                cluster.queue(url3);
                
            // }
            // );



        });

        let message = "";

    
        res.send(result);
    } 
    catch (error)
    {
        console.log(error);
    }
  

}

export default main