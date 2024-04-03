import { combineReducers } from 'redux';
import { GrpNalogGovByReducer } from './GrpNalogGovByReducer';

export const rootReducer = combineReducers({
  GrpNalogGovByReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
