import { ISingleUser } from '../../entities/Users'

export const GET_USERS = 'GET_USERS';

export interface IUserTypes {
    GET_USERS: {
        usersList:ISingleUser[];
    }
}