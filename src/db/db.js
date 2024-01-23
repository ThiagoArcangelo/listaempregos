import mongoose from "mongoose";

mongoose.connect("",{
    useNewParse: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
});

export default db;