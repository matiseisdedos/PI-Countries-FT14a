const { Router } = require("express")
const { Country } = require("../db")
const { Op } = require('sequelize')
const axios = require("axios")

const router = Router();
/* GET /countries?name="...":
Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
Si no existe ningún país mostrar un mensaje adecuado*/


router.get("/countries", async (req, res) => {
    let database = await Country.findAll()
    let api = await axios.get("https://restcountries.eu/rest/v2/all")
    let countries = [...database, ...api.data]
    let firstTen = []
    const name = req.query.name
    console.log(name);
    let search = []
    // if (name !== undefined) {
    //     if (name.length > 0 && name.length < 3) {
    //         search = countries.filter(e => e.alpha2Code === name)
    //         if (search.length === 0) return res.send('No se encontro el pais ingresado')
    //         return res.send(search)
    //     } else if (name.length === 3) {
    //         search = countries.filter(e => e.alpha3Code === name)
    //         if (search.length === 0) return res.send('No se encontro el pais ingresado')
    //         return res.send(search)
    //     }
    //     else {
    //         return res.send('No se encontro el pais ingresado')
    //     }
    // }
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