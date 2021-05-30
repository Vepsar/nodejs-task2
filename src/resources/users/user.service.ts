import * as usersRepo from './user.memory.repository';
import User, { IUserRequest } from './user.model';
/**
 * Service for getting all users
 * @returns {Promise<User[]>}
 */
const getAll = (): Promise<User[]> => usersRepo.getAll();

/**
 * Service for getting user by ID
 * @param {String} id - user ID
 * @returns {Promise<User>}
 */
const getById = (id: string | undefined): Promise<User> =>
  usersRepo.getById(id);

/**
 * Service for creating user
 * @param {User} user - users data
 * @returns {Promise<User>}
 * Return created user
 */
const postUser = (user: User): Promise<User> => usersRepo.postUser(user);

/**
 * Deleting user by his ID
 * @param {String} id - ID of removing user
 */
const deleteUser = (id: string | undefined): Promise<void> =>
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

export { getAll, getById, postUser, deleteUser, updateUser };
