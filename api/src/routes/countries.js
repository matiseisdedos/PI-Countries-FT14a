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
    let database = await Country.findAll()
    // let countries = [...database, ...api.data]
    // let firstTen = []
    // const name = req.query.name
    // console.log(name);
    // let search = []


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
    // if (name !== undefined) {

    //     countries.forEach(e => {
    //         if (e.name.includes(name)) {
    //             search.push(e)
    //         }
    //     })
    //     return res.send(search)
    // }
    // for (let i = 0; i < 10; i++) {
    //     firstTen.push(countries[i])
    // }
    res.send(database)
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