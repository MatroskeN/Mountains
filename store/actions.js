
import { RESET } from './constants';

export const resetStoreAction = () => ({
  type: RESET,
});

const resetStore = () => async (dispatch) => {
  dispatch(resetStoreAction());
};

export default {
  resetStore,
};
