

export async function ListaEmpregos(req, res) {
    try {
        return res.redirect("/lista");
    } catch (error) {
        console.log(error);
    }
}