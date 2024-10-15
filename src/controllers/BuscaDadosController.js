import Vaga from "../model/vagas.js";

export async function RetornaDados(req, res) {
    try 
    {
        // Recebe o número da página - Default 1
        let { page = 1, limit = 25} = req.query;

        const contagem = await Vaga.countDocuments();

        const listaVagas = await Vaga.find()
            .skip(((page - 1) * limit))
            .limit(limit)
            .exec()
            .then((item) => {
                return res.status(200).json({                    
                    item,
                    contagem,
                    page: page,
                    limit
                });
            });

    } catch (error) {
        throw new Error(error.message);
    }
}

export async function BuscaTitulo(req, res) {
    try {
        const {page = 1, limit = 25, titulo} = req.query; 
        const contagem = await Vaga.countDocuments({ Vaga: new RegExp(titulo, 'i') });

        if (!titulo) {
            return res.status(400).json({ error: "Título não fornecido" }); 
        }

        const resultado = await Vaga.find({ Vaga: new RegExp(titulo, 'i') })
            .skip(((page - 1) * limit))
            .limit(limit)
            .then((item) => {
                return res.status(200).json({                    
                    item,
                    contagem,
                    page: page,
                    limit
                });     
            });                     

    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: "Nenhum registro encontrado" }); 
    }
}





