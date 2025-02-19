/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
//axios import
import axios from "axios";

//declare action names
export const ADD_SMURFS = "ADD_SMURFS";
export const GET_SMURFS = "GET_SMURFS";
export const FETCHING = "FETCH";
export const CREATING = "CREATING";
export const FAILURE = "FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: GET_SMURFS, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};

export const addSmurfs = newSmurf => dispatch => {
  dispatch({ type: CREATING });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => dispatch({ type: ADD_SMURFS, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};
