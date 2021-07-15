const { Router } = require("express")
const { Activity } = require("../db")
const axios = require("axios")
const { v4: uuidv4 } = require('uuid');

const router = Router();

/* POST /activity:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
Crea una actividad turística en la base de datos*/

router.post("/activity", async (req, res) => {
    const country = req.body
    /*const countryActivity;
    const match = await country_activity.findAll({
        where: {
            activityId: activity.id
        }
    })*/
    res.send(await Activity.create({
        ...country,
        id: uuidv4()
    }))
})


module.exports = router