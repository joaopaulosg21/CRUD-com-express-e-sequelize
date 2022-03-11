import Post from "../database/Post.js";
export default class PostController{
    async newPost(req,res){
        try{
            const {titulo,conteudo} = req.body;
            const result = await Post.create({
                titulo,
                conteudo
            });
            res.status(201).json(result);
        }catch(error){
            res.status(500).json(error);
        }
    }
    async viewPosts(req,res){
        try{
            const result = await Post.findAll();
            res.status(200).json(result);
        }catch(error){
            res.status(404).json(error);
        }
    }
    async updatePost(req,res){
        try{
            const post = await Post.findByPk(req.params.id);
            if(post){
                const {titulo,conteudo} = req.body;
                await Post.update({
                    titulo,
                    conteudo,
                },{where:{id:req.params.id}});
                res.status(200).json({msg:"Post atualizado"});
            }else{
                res.status(404).json({msg:"Post não existe"});
            }
        }catch(error){
            res.status(404).json(error);
        }
    }
    async deletePost(req,res){
        try{
            const post = await Post.findByPk(req.params.id);
            if(post){
                await Post.destroy({where:{id:req.params.id}});
                res.status(200).json({msg:"Post deletado"});
            }else{
                res.status(404).json({msg:"Post não existe"});
            }
        }catch(error){
            res.status(404).json(error);
        }
    }

}
