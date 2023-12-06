import { SuccessResponse } from '../../core/ApiResponse';
import { StaffModel } from '../../database/model/Company/Staff';
import asyncHandler from '../../helpers/asyncHandler';
import { ProtectedStaffRequest } from '../../types/app-request';

export const removeStaff = asyncHandler(
  async (req: ProtectedStaffRequest, res) => {
    const { id } = req.params;

    const staff = await StaffModel.findOneAndDelete({ _id: id });

    return new SuccessResponse('Success', staff).send(res);
  },
);
