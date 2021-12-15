import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import serverApi from '../api/server';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'authenticate':
      return { errorMessage: '', token: action.payload }; // we don't need to persist state; signin and signup are the same
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('mainFlow');
  } else {
    navigate('Signin');
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    // implicit return, doesn't have to be specified
    try {
      const response = await serverApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'authenticate', payload: response.data.token });

      navigate('mainFlow');
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up.' });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await serverApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'authenticate', payload: response.data.token });

      navigate('mainFlow');
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign in.' });
    }
  };

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
);
