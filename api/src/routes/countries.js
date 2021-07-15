const { Router } = require("express")
const { Country } = require("../db")
const axios = require("axios")

const router = Router();

router.get("/countries", async (req, res) => {
    let database = await Country.findAll()
    let api = await axios.get("https://restcountries.eu/rest/v2/all")
    let countries = [...database, ...api.data]
    res.send(countries)
})

module.exports = router