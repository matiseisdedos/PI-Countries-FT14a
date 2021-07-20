const { Router } = require("express")
const { Country } = require("../db")
const { Op } = require('sequelize')
const axios = require("axios")
const { v4: uuidv4 } = require('uuid');

const router = Router();
/* GET /countries?name="...":
Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
Si no existe ningún país mostrar un mensaje adecuado*/


router.get("/countries", async (req, res) => {

    let api = await axios.get("https://restcountries.eu/rest/v2/all")
    let database = await Country.findAll()
    console.log(database.length)
    if (database.length === 249) return res.send(database)
    else {
        api.data.map(c => {
            Country.create({
                id: uuidv4(),
                name: c.name,
                imgflag: c.flag,
                continent: c.region,
                capital: c.capital,
                subregion: c.subregion,
                area: c.area,
                population: c.population,
            })
        })
        res.send(database)
    }
})
/*GET /countries/{idPais}:

    Obtener el detalle de un país en particular
    Debe traer solo los datos pedidos en la ruta de detalle de país
    Incluir los datos de las actividades turísticas correspondientes
*/

router.get('/countries/:id', async (req, res) => {
    let idbase = req.params.id
    let database = await Country.findAll({
        where: {
            id: idbase
        }
    })
    res.send(database)
    //res.send(database.filter(e => e.id === id))
    // falta agregar actividades de la base de datos
})
router.get("/countries/filter/:continent", async (req, res) => {
    //let continent = req.params.continent
    let continent = req.params.continent
    let database = await Country.findAll()
    res.send(database.filter(e => e.continent === continent))
})
router.get("/countries/order/:orden", async (req, res) => {
    let orden = req.params.orden
    let database;
    if (orden === "DESCP") {
        database = await Country.findAll({
            order: [['population', 'DESC']]
        })
    }
    if (orden === "ASCP") {
        database = await Country.findAll({
            order: [['population', 'ASC']]
        })
    }
    if (orden === "ASC") {
        database = await Country.findAll({
            order: [['name', 'ASC']]
        })
    }
    if (orden === "DESC") {
        database = await Country.findAll({
            order: [['name', 'DESC']]
        })
    }
    res.send(database)
})

module.exports = router