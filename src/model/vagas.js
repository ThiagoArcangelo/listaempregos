import mongoose from "mongoose";

const Vaga = new mongoose.Schema({
    // id: {
    //     type: Number,
    //     required: true,
    //     unique: true
    // },
    vaga: {
        type: String,
        required: true,
    },
    local: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

export default mongoose.model("Vaga", Vaga)