import { ISingleUser } from "../entities/Users";
import * as actionTypes from "../actions/actionTypes/userTypes";

export interface IUsersReducer {
  usersList: ISingleUser[];
}

const defaultState = (): IUsersReducer => ({
  usersList: ['maciek'] as any
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
  switch (action.type) {
    
    case actionTypes.GET_USERS: {
      const data: actionTypes.IUserTypes["GET_USERS"] = action;
      return {
        ...state,
        usersList: data.usersList
      };
    }

    default: {
      return state;
    }
  }
};
