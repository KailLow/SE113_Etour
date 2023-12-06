import express from 'express';
import demoRouter from './demo';
import imageRouter from './imageStorage/image';
import userLogin from './user/access/login';
import profileRouter from './user/access/profile';
import userSignup from './user/access/signup';
import { companyRouter } from './company';

const router = express.Router();

router.use('/user/signup', userSignup);
router.use('/user/login', userLogin);
router.use('/user/profile', profileRouter);
router.use('/images', imageRouter);
router.use('/company', companyRouter)

router.use('/demo', demoRouter);

export default router;
