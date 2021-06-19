import { IUserRequest } from './user.model';
import { deleteByUserId } from '../tasks/task.service';
import { User } from '../entities/user.entity';
import { getRepository } from 'typeorm';

const users: User[] = [];

/**
 * Return array of all users
 * @returns {Promise<User[]>}
 */
const getAll = async (): Promise<User[]> => {
  const userRepo = getRepository(User);
  return userRepo.find({ where: {} });
  // return users
};

/**
 * Function to return user by providing ID
 * @param {*} id - user ID
 * @returns {Promise<User>}
 * Return Object by class User
 */
const getById = async (id: string | undefined): Promise<User | undefined> => {
  const userRepo = getRepository(User);
  const res: User | undefined = await userRepo.findOne(id);
  // const res: User = users.find((user) => user.id === id) as User;
  if (res === undefined) return undefined;
  return res;
};

/**
 * Function for adding user in DB
 * @param {User} data - new user's info
 * @returns {Promise<User>}
 * Return created User
 */
const postUser = async (data: User): Promise<User> => {
  const userRepo = getRepository(User);
  const newUser = userRepo.create(data);
  const savedUser = userRepo.save(newUser);
  // users.push(data);
  return savedUser;
};

/**
 * Funtion for deleteing user by providing ID
 * @param {String} id - ID of deletting user
 * @returns {Promise<void>}
 * Return message about delete
 */
const deleteUser = async (id: string | undefined): Promise<void> => {
  await deleteByUserId(id);
  // const userRepo = getRepository(User);
  // const deletedRes = await userRepo.delete(id)
  const idNum = users.findIndex((user) => user.id === id);
  users.splice(idNum, 1);
  // if (deletedRes.affected)
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
  const idNum = users.findIndex((user) => user.id === id);
  if ((idNum || idNum === 0) && id) {
    const udpUsr = {
      id,
      name: data.name,
      login: data.login,
      password: data.password,
    };
    users.splice(idNum, 1, udpUsr);
    const result = getById(id);
    return result;
  }
  return undefined;
};

export { getAll, getById, postUser, deleteUser, updateUser };
