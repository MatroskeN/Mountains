import { combineReducers } from 'redux';
import defaultReducers from '~/core/store/reducers';

const rootReducer = combineReducers({
  ...defaultReducers,
});

export default rootReducer;
