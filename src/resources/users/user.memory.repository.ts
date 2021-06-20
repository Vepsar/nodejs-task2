import { IUserRequest, IUserResp } from '../../utils/types';
import { User } from '../entities/user';
import { getRepository } from 'typeorm';
import { deleteByUserId } from '../tasks/task.service';

/**
 * Return array of all users
 * @returns {Promise<User[]>}
 */
const getAll = async (): Promise<User[] | undefined> => {
  const userRepo = getRepository(User);
  return await userRepo.find({ where: {} });
};

/**
 * Function to return user by providing ID
 * @param {*} id - user ID
 * @returns {Promise<User>}
 * Return Object by class User
 */
const getById = async (id: string | undefined): Promise<User | undefined> => {
  const userRepo = getRepository(User);
  return userRepo.findOne(id);
};

/**
 * Function for adding user in DB
 * @param {User} data - new user's info
 * @returns {Promise<User>}
 * Return created User
 */
const postUser = async (data: IUserResp): Promise<User | undefined> => {
  const userRepo = getRepository(User);
  const newUser = userRepo.create(data);
  const savedUser = userRepo.save(newUser);

  return userRepo.findOne((await savedUser).id);
};

/**
 * Funtion for deleteing user by providing ID
 * @param {String} id - ID of deletting user
 * @returns {Promise<void>}
 * Return message about delete
 */
const deleteUser = async (id: string | undefined): Promise<void> => {
  await deleteByUserId(id);
  const userRepo = getRepository(User);
  const resp = userRepo.findOne(id);
  if (id === undefined || resp === undefined) {
    return;
  }
  await userRepo.delete(id);
};

/**
 * Function for update informtaion about User by ID
 * @param {String} id - user ID
 * @param {IUserRequest} data - info to update
 * @returns {Promise<User>}
 * Return updated object
 */
const updateUser = async (
  id: string | undefined,
  data: IUserRequest
): Promise<User | undefined> => {
  const userRepo = getRepository(User);
  const resp = await userRepo.findOne(id);
  if (resp === undefined || id == undefined) return undefined;
  const updUser = await userRepo.update(id, data);
  return updUser.raw;
};
export { getAll, getById, postUser, deleteUser, updateUser };
