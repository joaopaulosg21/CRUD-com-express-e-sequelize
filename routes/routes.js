import { Router} from "express";
import PostController from "../controllers/postController.js";
const router = Router();
const post = new PostController()
 
router.post('/add',post.newPost)

router.get('/',post.viewPosts);

router.put('/update/:id',post.updatePost);

router.delete('/delete/:id',post.deletePost)


export default router;