import express from 'express';
import { getById, index, updateById } from '../controller/user';
const router = express.Router();


router.get('/', index);

router.get('/getUser/:id', getById);

router.put('/updateUser/:id', updateById);

router.post('/createUser', (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json({ error: err.message }));
});

router.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete(id)
        .then(user => res.json(user))
        .catch(err => res.json(err));
});


export default router;