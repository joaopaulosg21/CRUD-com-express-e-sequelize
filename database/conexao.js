import {Sequelize} from "sequelize";
const sequelize = new Sequelize("database","user","password",{
    host:"localhost",
    dialect:"mysql"
});

/* sequelize.authenticate().then(()=>{
    console.log("conectado")
}) */

export default sequelize;

