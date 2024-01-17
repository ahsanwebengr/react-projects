import express from 'express';
import { createUser, deleteUser, getById, index, updateById } from '../controller/user.js';
const router = express.Router();


router.get('/', index);

router.get('/getUser/:id', getById);

router.put('/updateUser/:id', updateById);

router.post('/createUser', createUser);

router.delete('/deleteUser/:id', deleteUser);


export default router;