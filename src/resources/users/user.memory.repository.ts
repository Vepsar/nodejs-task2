import { IUserRequest, IUserResp } from '../../utils/types';
import { User } from '../entities/user';
import { getRepository } from 'typeorm';
import { deleteByUserId } from '../tasks/task.service';

// type toResp = Promise<Omit<User, 'password'> | undefined>;

// const users: User[] = [];
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
  // const res: User | undefined = await userRepo.findOne(id);
  // if (res !== undefined) return res;
  // return undefined;
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
  // return savedUser;
};

/**
 * Funtion for deleteing user by providing ID
 * @param {String} id - ID of deletting user
 * @returns {Promise<void>}
 * Return message about delete
 */
const deleteUser = async (
  id: string | undefined
  // ): Promise<'deleted' | 'not_found'> => {
): Promise<void> => {
  await deleteByUserId(id);
  const userRepo = getRepository(User);
  const resp = userRepo.findOne(id);
  if (id === undefined || resp === undefined) {
    // return 'not_found';
    return;
  }
  // const deletedRes = await userRepo.delete(id);
  await userRepo.delete(id);
  // return;
  // const idNum = users.findIndex((user) => user.id === id);
  // users.splice(idNum, 1);
  // if (deletedRes.affected) {
  //   // return 'deleted';
  //   return ;
  // }
  // return 'not_found';
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

  // const idNum = users.findIndex((user) => user.id === id);
  // if ((idNum || idNum === 0) && id) {
  //   const udpUsr = {
  //     id,
  //     name: data.name,
  //     login: data.login,
  //     password: data.password,
  //   };
  //   users.splice(idNum, 1, udpUsr);
  //   const result = getById(id);
  //   return result;
  // }
  // return undefined;
};
export { getAll, getById, postUser, deleteUser, updateUser };
