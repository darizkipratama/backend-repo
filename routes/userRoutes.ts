import { Router } from 'express';
import { verifyToken } from '../middleware/authMiddleware';
import * as userController from '../controller/userController';

const router = Router();

router.post('/', verifyToken, userController.createUser);
router.get('/', verifyToken, userController.getAllUsers);
router.put('/:id', verifyToken, userController.updateUser);

export default router;
