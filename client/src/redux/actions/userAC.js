import axios from "axios"
import { SET_USER } from "../types/usersTypes"

export const setUser = (value) => {
  return {
      type: SET_USER,
      payload: value
  }
}

export const getUser = (input) => async (dispatch) => {
    const res = await axios.post('/user/signup', input)
    dispatch(setUser(res.data.user))
}

export const signInUser = ( input ) => async ( dispatch ) => {
  const res = await axios.post('/user/signin', input)
  dispatch(setUser(res.data.user))
}

export const userLogout = () => async (dispatch) => {
  await axios.post('/user/logout')
  dispatch(setUser(null))
}
export const checkUser = () => async (dispatch) => {

  try {
    const res = await axios.post('/user/check')
  
    dispatch(setUser(res.data.user))
    
  } catch (error) {

    dispatch(setUser(null))
    
  }
  // console.log(res)
  // if(res.statusText){
  //   console.log(res.statusText);
  // } else {
  //   console.log(res.statusText);
  // }
}
