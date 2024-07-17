import Vaga from "../model/vagas.js";

export async function dados(req, res) {
    try 
    {
        // Recebe o número da página - Default 1
        let { page = 1, limit = 10} = req.query;

        const contagem = await Vaga.countDocuments();

        const listaVagas = await Vaga.find()
            .skip(((page - 1) * limit))
            .limit(limit)
            .exec()
            .then((item) => {
                return res.status(200).json({                    
                    item,
                    contagem,
                    page: page
                });
            });

    } catch (error) {
        throw new Error(error.message);
    }
}

export async function BuscaTitulo(req, res) {
    try {
        const {titulo} = req.query; 

        if (!titulo) {
            return res.status(400).json({ error: "Título não fornecido" }); 
        }

        const resultado = await Vaga.find({ Vaga: new RegExp(titulo, 'i') });

        res.status(200).json(resultado);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Ocorreu um erro no servidor" }); 
    }
}





