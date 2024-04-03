import {
  GrpNalogGovByAction,
  GrpNalogGovByState,
  GrpNalogGovByTypes,
} from '../../types/grp.nalog.gov.by/api/grp-public/data/GrpNalogGovByReducer.dto';
import { emptyGrpNalogGovByUnp } from '../../types/grp.nalog.gov.by/api/grp-public/data/GrpNalogGovByUnp.dto';

const defaultStore: GrpNalogGovByState = {
  unp: {
    data: emptyGrpNalogGovByUnp,
    isNotFound: false,
    loading: false,
    error: null,
  },
};

export function GrpNalogGovByReducer(
  state = defaultStore,
  action: GrpNalogGovByAction,
): GrpNalogGovByState {
  switch (action.type) {
    case GrpNalogGovByTypes.FETCH_GRP_NALOG_GOV_BY_UNP:
      return {
        ...state,
        unp: {
          data: emptyGrpNalogGovByUnp,
          isNotFound: false,
          loading: true,
          error: null,
        },
      };
    case GrpNalogGovByTypes.FETCH_GRP_NALOG_GOV_BY_UNP_NOT_FOUND:
      return {
        ...state,
        unp: {
          data: emptyGrpNalogGovByUnp,
          isNotFound: true,
          loading: false,
          error: null,
        },
      };
    case GrpNalogGovByTypes.FETCH_GRP_NALOG_GOV_BY_UNP_SUCCESS:
      return {
        ...state,
        unp: {
          data: action.payload,
          isNotFound: false,
          loading: false,
          error: null,
        },
      };
    case GrpNalogGovByTypes.FETCH_GRP_NALOG_GOV_BY_UNP_ERROR:
      return {
        ...state,
        unp: {
          data: emptyGrpNalogGovByUnp,
          isNotFound: false,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
}
