const { Router } = require("express")
const { Country } = require("../db")
const axios = require("axios")

const router = Router();

router.get("/countries", async (req, res) => {
    let database = await Country.findAll()
    let api = await axios.get("https://restcountries.eu/rest/v2/all")
    let countries = [...database, ...api.data]
    let firstTen = []
    for (let i = 0; i < 10; i++) {
        firstTen.push(countries[i])
    }
    res.send(firstTen)
})
/*GET /countries/{idPais}:

    Obtener el detalle de un país en particular
    Debe traer solo los datos pedidos en la ruta de detalle de país
    Incluir los datos de las actividades turísticas correspondientes
*/

router.get('/countries/:id', async (req, res) => {
    let id = req.params.id
    id = id.toLowerCase()
    let database = await Country.findAll()
    let api = await axios.get(`https://restcountries.eu/rest/v2/alpha/${id}`)
    console.log(id)
    res.send(api.data)
    // falta agregar actividades de la base de datos
})

module.exports = router