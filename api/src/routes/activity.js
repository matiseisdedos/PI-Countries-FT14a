const { Router } = require("express")
const { Activity } = require("../db")
const axios = require("axios")
const { Op } = require("sequelize")
const { v4: uuidv4 } = require('uuid');
const { Country } = require("../db");

const router = Router();

/* POST /activity:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
Crea una actividad turística en la base de datos*/

router.post("/activity", async (req, res) => {
    const activity = req.body

    console.log(activity)
    const newActivity = await Activity.create({
        ...activity,
        id: uuidv4()
    })
    const countries = await Country.findAll({
        where: { name: { [Op.in]: activity.countries } }
    })
    await newActivity.addCountry(countries)
    res.send(newActivity)
})


module.exports = router