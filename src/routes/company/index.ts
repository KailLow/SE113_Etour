import express from 'express';
// import nodemailer from 'nodemailer';

import multer from 'multer';
import authorization from '../../auth/authorization';
import { StaffPermission } from '../../database/model/Company/Staff';
import validator from '../../helpers/validator';
import { addStaff } from './addStaff';
import { editStaff } from './editStaff';
import companyLogin from './login';
import { removeStaff } from './removeStaff';
import { viewStaffList } from './viewStaffList';
import schema from './schema';
import { addAdmin } from './addAdmin';

const upload = multer({ storage: multer.memoryStorage() });

export const companyRouter = express.Router();

companyRouter.use('/login', companyLogin);


companyRouter.get(
  '/',
  authorization([StaffPermission.VIEW_STAFF]),
  viewStaffList,
);

companyRouter.put(
  '/:id',
  authorization([StaffPermission.EDIT_STAFF]),
  upload.fields([{ name: 'image', maxCount: 1 }]),
  editStaff,
);

companyRouter.delete(
  '/:id',
  authorization([StaffPermission.DELETE_STAFF]),
  removeStaff,
);

companyRouter.post(
  '/',
  authorization([StaffPermission.ADD_STAFF]),
  upload.fields([{ name: 'image', maxCount: 1 }]),
  addStaff,
);

companyRouter.post(
  '/create-admin',
  validator(schema.createAdmin),
  addAdmin,
);
