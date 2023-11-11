import { BadRequestError } from '../../../core/ApiError';
import { SuccessResponse } from '../../../core/ApiResponse';
import { ICard } from '../../../database/model/User/User';
import CardRepo from '../../../database/repository/User/CardRepo';
import asyncHandler from '../../../helpers/asyncHandler';
import { ProtectedUserRequest } from '../../../types/app-request';

export const createNewCard = asyncHandler(
  async (req: ProtectedUserRequest, res) => {
    const userId = req.user?._id;
    const cardInfo = req.body as ICard;
    if (!userId) throw new BadRequestError('userId not found');

    const newCard = await CardRepo.create(userId, cardInfo);

    if (!newCard) throw new BadRequestError('card is already exists');

    return new SuccessResponse('success', newCard).send(res);
  },
);
