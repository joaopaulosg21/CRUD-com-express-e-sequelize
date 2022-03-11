import { DataTypes } from "sequelize";
import sequelize from "./conexao.js";

const Post = sequelize.define('posts',{
    titulo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    conteudo:{
        type:DataTypes.TEXT,
        allowNull:false
    }
});

export default Post;