import mongoose from "mongoose";

const Vaga = new mongoose.Schema({
    // id: {
    //     type: Number,
    //     required: true,
    //     unique: true
    // },
    Vaga: {
        type: String,
    },
    Local: {
        type: String,
    },
    Url: {
        type: String,
    }
});

export default mongoose.model("Vaga", Vaga)