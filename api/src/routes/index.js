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



router.get('/temperaments', async (req, res)=>{
    const temperamentsInfo = await fetch(`https://api.thedogapi.com/v1/breeds`)
    const temperamentsInfoDos = await temperamentsInfo.json();
    const temperamentsBd = temperamentsInfoDos.map((e) => e.temperament)//muchos arrelos
        .toString()//Devuelve una cadena de caracteres (texto)
        .trim()// eliminar espacios en blanco y tablulaciones
        .split(/\s*,\s*/);//Esto imprime dos líneas; la primera línea imprime la cadena original, y la segunda línea imprime el array resultante.
    
    const filtrado = temperamentsBd.filter(e => e);
    const filtradoEach =[... new Set (filtrado)];
    filtradoEach.forEach(e =>{
        Temperament.findOrCreate({// se fija si esta y si no esta lo crea 
            where: {name: e},
        })
    })
    const todosTemperaments =await Temperament.findAll();
    res.json(todosTemperaments);
})



/*
router.post('/dogs', async (req, res) => {
    var { // takes these properties to build the new dog
        name,
        height_min,
        height_max,
        weight_min,
        weight_max,
        life_span,
        temperamentt,
        image,
    } = req.body;

    if (name && height_min && height_max && weight_min && weight_max && temperamentt && image) {
        // takes that data for the new dog  
        const createDog = await Dog.create({
            name: name,
            height_min: parseInt(height_min),
            height_max: parseInt(height_max),
            weight_min: parseInt(weight_min),
            weight_max: parseInt(weight_max),
            life_span: life_span,
            image: image || 'https://dog.ceo/api/breeds/image/random',
        });
        temperamentt.map(async el => {
            const findTemp = await Temperament.findAll({
                where: { name: el }
            });
            createDog.addTemperament(findTemp);
        })
        res.status(200).send(createDog);
    } else {
        res.status(404).send('Data needed to proceed is missing');
    }
})*/

router.post("/dogs", async (req, res) => {
    const {
        name,
        height_min,
        height_max,
        weight_min,
        weight_max,
        life_span,
        temperament,
        image,
    } = req.body;
    const createDog = await Dog.create({
        name:name,
        height_min: height_min,
        height_max: height_max,
        weight_min: weight_min,
        weight_max: weight_max,
        life_span: life_span,
        temperament: temperament,
        image: image,
    });
    if(createDog){
        res.status(200).json(createDog);
    }else{
    res.status(500).send('uncreated dog')
    }
});

module.exports = router;
