import { SuccessResponse } from '../../core/ApiResponse';
import {
  StaffModel
} from '../../database/model/Company/Staff';
import asyncHandler from '../../helpers/asyncHandler';
import { ProtectedStaffRequest } from '../../types/app-request';

export const viewStaffList = asyncHandler(
  async (req: ProtectedStaffRequest, res) => {
    const staffList = await StaffModel.find({ });

    return new SuccessResponse('Success', staffList).send(res);
  },
);
