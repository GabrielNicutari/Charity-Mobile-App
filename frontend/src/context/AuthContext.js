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
    case 'sign_out':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    dispatch({ type: 'authenticate', payload: token });
    navigate('mainFlow');
  } else {
    navigate('SignIn');
  }
};

const signUp =
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

const signIn =
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

const signOut = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'sign_out' });
  navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, signUp, clearErrorMessage, tryLocalSignIn },
  { token: null, errorMessage: '' }
);
