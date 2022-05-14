import express from 'express';
import { getPosts, updatePost, createPost, interestedPost, deletePost } from '../controllers/post.js';
import auth from '../middleware/auth';


const router = express.Router();

router.get('/', getPosts );
router.post('/', auth, createPost );
router.patch('/id', auth, updatePost);


router.delete('/:id', auth, deletePost);
router.patch('/InterestedPost', auth, interestedPost);


export default router;