import mongoose from "mongoose";

const url_conexao = `mongodb+srv://webvagas:${process.env.DB_PASSWORD}@webvagas.vgk83du.mongodb.net/?retryWrites=true&w=majority`;

async function conexaoDb () {  
        
      // await mongoose.connect(url_conexao,{
      //     useUnifiedTopology: true
      // });

      await mongoose.connect(url_conexao)
      .then(() => console.log("Banco de dados conectado!"))
      .catch(error => {
         console.log({message: "Não foi possível conectar o banco de dados" , erro: error})
      });
      

   
      // const db = mongoose.connection;
   
      // db.on("error", console.error.bind(console, "connection error:"));
      // db.once("open", () => {
      //     console.log("Conexão com o banco de dados estabelecida com sucesso!");
      // });


}

export default conexaoDb;