const { Router } = require('express');
const { Dog, Temperament } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Traer datos de la api
const getDataApi = async () => {
    const api = await fetch(
        "https://api.thedogapi.com/v1/breeds"
    );
    const apiInfo = await api.data.map((e) => {
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
    return apiInfo;
};

//Traer datos de la base de datos
const getBd = async () => {
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


const getBreeds = async () => {
    const apiInfo = await getDataApi();
    const bdInfo = await getBd();
    const allInfo = apiInfo.concat(bdInfo);
    return allInfo;
};



module.exports = router;
