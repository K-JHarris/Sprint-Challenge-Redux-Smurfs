/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
  ADD_SMURFS,
  GET_SMURFS,
  FETCHING,
  CREATING,
  FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: `im giving her all shes got captain!`
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return { ...state, smurfs: [...action.payload], fetchingSmurfs: false };

    case ADD_SMURFS:
      return { ...state, smurfs: [...action.payload] };

    case FETCHING:
      return { ...state, fetchingSmurfs: true };

    case CREATING:
      return { ...state, addingSmurf: true };

    case FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
