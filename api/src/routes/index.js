const { Router } = require('express');
const { Dog, Temperament } = require("../db");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Traer datos de la api
const getDataApi = async () => {
    const api = await fetch("https://api.thedogapi.com/v1/breeds");
    const apiInfo = await api.json();
    return apiInfo.map((e) => {
        return {
            id: e.id,
            image: e.image.url,
            name: e.name,
            temperament: e.temperament,
            weight: e.weight.imperial,
            height: e.height.imperial,
            life_span: e.life_span,
        };
    });
};

//Traer datos de la base de datos
const getDataBase = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
    });
};


const getInfoDogs = async () => {
    const apiInfo = await getDataApi();
    const bdInfo = await getDataBase();
    const allInfo = apiInfo.concat(bdInfo);
    return allInfo;
};



router.get("/dogs", async (req, res) => {
    const { name } = req.query;
    const allBreeds = await getInfoDogs();
    if (!name) {
        res.status(200).json(allBreeds);
    } else {
        const filtrados = allBreeds.filter((e) => {
            const listName = e.name.toUpperCase();
            if (listName.includes(name.toUpperCase())) return listName;
        });
        filtrados.length ? res.status(200).json(filtrados) : res.status(400).send("Raza no encontrada");
    }
});


module.exports = router;
