import createDataContext from './createDataContext';
import API from '../api/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ACTIONS = {
  GET_ORGANISATIONS: 'get_organisations',
  GET_ERROR: 'get_error'
};

const organisationReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_ORGANISATIONS:
      return { organisations: action.payload };
    case ACTIONS.GET_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const getOrganisations = (dispatch) => async () => {
  try {
    const token = await AsyncStorage.getItem('token');

    const result = await API.get('/organisations', {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    });
    dispatch({ type: ACTIONS.GET_ORGANISATIONS, payload: result.data });
  } catch (error) {
    dispatch({ type: ACTIONS.GET_ERROR, payload: 'Server connection ERROR' });
  }
};

export const { Provider, Context } = createDataContext(
  organisationReducer,
  { getOrganisations },
  { organisations: [] }
);
