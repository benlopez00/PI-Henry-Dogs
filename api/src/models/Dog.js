/* Raza con las siguientes propiedades:
    - ID *
    - Nombre *
    - Altura *
    - Peso *
	- Años de vida
- [ ] Temperamento con las siguientes propiedades:
	- ID
	- Nombre
    */
const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("dog", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
            allowNull: false,
        },
        height: { type: DataTypes.JSON, allowNull: false },
        weight: { type: DataTypes.JSON, allowNull: false },
        life_span: { type: DataTypes.STRING, allowNull: true },
        image: { type: DataTypes.JSON, allowNull: false },
        createdByDB: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    });
};