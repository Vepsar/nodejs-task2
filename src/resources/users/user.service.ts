import * as usersRepo from './user.memory.repository';
import { User } from '../entities/user';
import { IUserRequest } from '../../utils/types';
/**
 * Service for getting all users
 * @returns {Promise<User[]>}
 */
const getAll = (): Promise<User[] | undefined> => usersRepo.getAll();
/**
 * Service for getting user by ID
 * @param {String} id - user ID
 * @returns {Promise<User>}
 */
const getById = (id: string | undefined): Promise<User | undefined> =>
  usersRepo.getById(id);

/**
 * Service for creating user
 * @param {User} user - users data
 * @returns {Promise<User>}
 * Return created user
 */
const postUser = (user: User): Promise<User | undefined> =>
  usersRepo.postUser(user);

/**
 * Deleting user by his ID
 * @param {String} id - ID of removing user
 */
const deleteUser = (id: string | undefined): Promise<'deleted' | 'not_found'> =>
  usersRepo.deleteUser(id);

/**
 * Service for updating user info
 * @param {String} id - user ID
 * @param {Object} data - new data that need to update
 * @returns {Promise<User>}
 * Return updated object
 */
const updateUser = (
  id: string | undefined,
  data: IUserRequest
): Promise<User | undefined> => usersRepo.updateUser(id, data);

const getUserByLogin = (login: string): Promise<User | undefined> =>
  usersRepo.getUserByLogin(login);

export { getAll, getById, postUser, deleteUser, updateUser, getUserByLogin };
