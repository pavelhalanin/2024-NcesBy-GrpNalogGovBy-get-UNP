import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './UnpPage.module.css';
import { RootStoreDto } from '../../store';
import fetchDePaByGetUNP from '../../utils/fetch-grp-nalog-gov-by/fetch-de-pa-by-get-UNP';
import { GrpNalogGovByTypes } from '../../types/grp.nalog.gov.by/api/grp-public/data/GrpNalogGovByReducer.dto';

export default function UnpPage() {
  const dispatch = useDispatch();
  const unpReduxData = useSelector(
    (state: RootStoreDto) => state.GrpNalogGovByReducer.unp,
  );
  const unpData = unpReduxData.data.row;
  const [unp, setUnp] = useState<string>('');

  useEffect(() => {
    (async function () {
      dispatch({ type: GrpNalogGovByTypes.FETCH_GRP_NALOG_GOV_BY_UNP });

      if (unp.length === 0) {
        dispatch({
          type: GrpNalogGovByTypes.FETCH_GRP_NALOG_GOV_BY_UNP_NOT_FOUND,
        });
      }

      try {
        const data = await fetchDePaByGetUNP(unp);
        dispatch({
          type: GrpNalogGovByTypes.FETCH_GRP_NALOG_GOV_BY_UNP_SUCCESS,
          payload: data,
        });
      } catch (exception: any) {
        if (exception.message === '400' || exception.message === '404') {
          dispatch({
            type: GrpNalogGovByTypes.FETCH_GRP_NALOG_GOV_BY_UNP_NOT_FOUND,
          });
          return;
        }
        dispatch({
          type: GrpNalogGovByTypes.FETCH_GRP_NALOG_GOV_BY_UNP_ERROR,
          payload: '' + exception,
        });
      }
    })();
  }, [unp]);

  return (
    <div className={styles.wrapper}>
      <div>
        {unpReduxData.error ? (
          <>
            <h2 className={styles.error__title}>Информация об ошибке</h2>
            <p className={styles.error__text}>{unpReduxData.error}</p>
          </>
        ) : null}
        <h2>Данные УНП</h2>
        <div className={styles.item}>
          <p
            className={styles.item__title}
            custom-unp-not-found={unpReduxData.isNotFound ? '1' : '0'}>
            УНП*
          </p>
          <input
            className={styles.item__value}
            type="text"
            value={unp}
            onChange={event => setUnp(event.target.value)}
            custom-unp-not-found={unpReduxData.isNotFound ? '1' : '0'}
          />
        </div>
        <div className={styles.item}>
          <p className={styles.item__title}>Полное наименование плательщика</p>
          <input
            className={styles.item__value}
            type="text"
            value={unpData.vnaimp}
            readOnly
          />
        </div>
        <div className={styles.item}>
          <p className={styles.item__title}>Адрес</p>
          <input
            className={styles.item__value}
            type="text"
            value={unpData.vpadres}
            readOnly
          />
        </div>
        <div className={styles.item}>
          <p className={styles.item__title}>Дата поставки на учет</p>
          <input
            className={styles.item__value}
            type="text"
            value={unpData.dreg}
            readOnly
          />
        </div>
        <div className={styles.item}>
          <p className={styles.item__title}>Статус</p>
          <input
            className={styles.item__value}
            type="text"
            value={unpData.vkods}
            readOnly
          />
        </div>
        <details>
          <summary>Больше информации</summary>
          <ul>
            <li>
              ckodsost = {unpData.ckodsost}
              <span className={styles.details__descriptions}>код (1|L)</span>
            </li>
            <li>
              dlikv = {unpData.dlikv}
              <span className={styles.details__descriptions}>
                дата изменения состояния (YYYY-MM-DD)
              </span>
            </li>
            <li>
              dreg = {unpData.dreg}
              <span className={styles.details__descriptions}>
                дата постановки на учет (YYYY-MM-DD)
              </span>
            </li>
            <li>
              nmns = {unpData.nmns}
              <span className={styles.details__descriptions}>код ИМНС</span>
            </li>
            <li>
              vkods = {unpData.vkods}
              <span className={styles.details__descriptions}>
                состояние (Действующий|Ликвидирован)
              </span>
            </li>
            <li>
              vlikv = {unpData.vlikv}
              <span className={styles.details__descriptions}>
                причина ликвидации
              </span>
            </li>
            <li>
              vmns = {unpData.vmns}
              <span className={styles.details__descriptions}>
                наименование ИМНС
              </span>
            </li>
            <li>
              vnaimk = {unpData.vnaimk}
              <span className={styles.details__descriptions}>
                краткое наименование юридического лица / фамилия, имя, отчество
                (если таковое имеется) индивидуального предпринимателя
              </span>
            </li>
            <li>
              vnaimp = {unpData.vnaimp}
              <span className={styles.details__descriptions}>
                наименование юридического лица / фамилия, собственное имя,
                отчество (если таковое имеется индивидуального предпринимателя
              </span>
            </li>
            <li>
              vpadres = {unpData.vpadres}
              <span className={styles.details__descriptions}>
                место нахождения юридического лица / место нахождения
                индивидуального предпринимателя
              </span>
            </li>
            <li>
              vunp = {unpData.vunp}
              <span className={styles.details__descriptions}>УНП</span>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
}
