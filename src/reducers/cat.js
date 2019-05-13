import theCatApi from './../services/theCatApi';


export const types = {
  PIC_REQUEST: 'CAT/PIC_REQUEST',
  PIC_SUCCESS: 'CAT/PIC_SUCCESS',
  PIC_FAILURE: 'CAT/PIC_FAILURE',
  FETCH: 'CAT/FETCH',
  CLEAR: 'CAT/CLEAR',
};


export const initialState = {
  loading: false,
  error: false,
  pic: null,
};


export default function(state = initialState, action) {
  switch (action.type) {
    case types.PIC_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        pic: null,
      };

    case types.PIC_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        pic: action.pic,
      };

    case types.PIC_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        pic: null,
      };

    case types.CLEAR:
      return { ...initialState };

    default:
      return state;
  }
}


const requestCat = () => ({ type: types.PIC_REQUEST });
const failureCat = () => ({ type: types.PIC_FAILURE });
const successCat = (pic) => ({ type: types.PIC_SUCCESS, pic });


export const actions = {
  fetchCat: (dispatch) => {
    return function () {
      dispatch(requestCat());

      theCatApi
        .fetchRandomCatPic()
        .then(response => {
          const pic = response.data[0].url;
          dispatch(successCat(pic));
        })
        .catch(failureCat);
    }
  },
  clear: () => ({ type: types.CLEAR }),
};


export const picSelector = state => state.cat.pic;
export const loadingSelector = state => state.cat.loading;
export const errorSelector = state => state.cat.error;