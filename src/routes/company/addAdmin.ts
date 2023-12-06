import { SuccessResponse } from '../../core/ApiResponse';
import { StaffPermission, StaffRole } from '../../database/model/Company/Staff';
import StaffRepo from '../../database/repository/Company/StaffRepo/StaffRepo';
import { uploadImageToS3 } from '../../database/s3';
import asyncHandler from '../../helpers/asyncHandler';
import { ProtectedStaffRequest } from '../../types/app-request';

export const addAdmin = asyncHandler(
  async (req: ProtectedStaffRequest, res) => {
    const data = req.body;

    const staff = await StaffRepo.create({
      staff: { ...data, permissions: Object.values(StaffPermission), role: StaffRole.ADMIN },
      username: data.username,
      password: data.password,
    });

    return new SuccessResponse('Success', staff).send(res);
  },
);
