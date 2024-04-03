import { thunk } from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { GrpNalogGovByState } from '../types/grp.nalog.gov.by/api/grp-public/data/GrpNalogGovByReducer.dto';

export interface RootStoreDto {
  GrpNalogGovByReducer: GrpNalogGovByState;
}

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk), // Включаем Thunk Middleware в список middleware
});
