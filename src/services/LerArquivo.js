// import Vaga from "../model/vagas";
import fs from "fs";

async function LerDados(req, res){
    try {
        fs.readFile("data.json", (err, data) => {
            if(err){ throw new Error(err.message)}

                res.send(data);
            
        });       

        
    } catch (error) {
        console.log(error);
    }
}

export default LerDados