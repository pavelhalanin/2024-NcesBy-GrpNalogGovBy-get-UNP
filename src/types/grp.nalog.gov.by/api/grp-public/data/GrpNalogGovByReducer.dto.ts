import { GrpNalogGovByUnpDto } from './GrpNalogGovByUnp.dto';

export interface GrpNalogGovByState {
  unp: {
    data: GrpNalogGovByUnpDto;
    loading: boolean;
    isNotFound: boolean;
    error: string | null;
  };
}

export enum GrpNalogGovByTypes {
  FETCH_GRP_NALOG_GOV_BY_UNP = 'FETCH_GRP_NALOG_GOV_BY_UNP',
  FETCH_GRP_NALOG_GOV_BY_UNP_NOT_FOUND = 'FETCH_GRP_NALOG_GOV_BY_UNP_NOT_FOUND',
  FETCH_GRP_NALOG_GOV_BY_UNP_SUCCESS = 'FETCH_GRP_NALOG_GOV_BY_UNP_SUCCESS',
  FETCH_GRP_NALOG_GOV_BY_UNP_ERROR = 'FETCH_GRP_NALOG_GOV_BY_UNP_ERROR',
}

interface GrpNalogGovByUnp {
  type: GrpNalogGovByTypes.FETCH_GRP_NALOG_GOV_BY_UNP;
}

interface GrpNalogGovByUnpSuccess {
  type: GrpNalogGovByTypes.FETCH_GRP_NALOG_GOV_BY_UNP_NOT_FOUND;
}

interface GrpNalogGovByUnpNotFound {
  type: GrpNalogGovByTypes.FETCH_GRP_NALOG_GOV_BY_UNP_SUCCESS;
  payload: GrpNalogGovByUnpDto;
}

interface GrpNalogGovByUnpError {
  type: GrpNalogGovByTypes.FETCH_GRP_NALOG_GOV_BY_UNP_ERROR;
  payload: string;
}

export type GrpNalogGovByAction =
  | GrpNalogGovByUnp
  | GrpNalogGovByUnpNotFound
  | GrpNalogGovByUnpSuccess
  | GrpNalogGovByUnpError;
