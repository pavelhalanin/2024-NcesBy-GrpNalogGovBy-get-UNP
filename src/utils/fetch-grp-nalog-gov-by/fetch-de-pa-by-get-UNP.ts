import axios from 'axios';
import { GrpNalogGovByUnpDto } from '../../types/grp.nalog.gov.by/api/grp-public/data/GrpNalogGovByUnp.dto';

/**
 *
 * @param unp
 *
 * Возвращает объект
 *  - {
 *      - row: {
 *          - ckodsost: string;       // код (1|L)
 *          - dlikv: null;            // Дата изменения состояния (YYYY-MM-DD)
 *          - dreg: string;           // Дата постановки на учет (YYYY-MM-DD)
 *          - nmns: string;           // Код ИМНС
 *          - vkods: string;          // Состояние (Действующий|Ликвидирован)
 *          - vlikv: null;            // Причина ликвидации
 *          - vmns: string;           // Наименование ИМНС
 *          - vnaimk: string;         // Краткое наименование юридического лица,
 *                                       фамилия, имя, отчество (если таковое имеется)
 *                                       индивидуального предпринимателя
 *          - vnaimp: string;         // vnaimp + vpadres смотри ниже
 *          - vpadres: string;        // Наименование и место нахождения юридического лица,
 *                                       фамилия, собственное имя, отчество (если таковое имеется)
 *                                       индивидуального предпринимателя
 *          - vunp: string;           // УНП
 *      - }
 *  - }
 *
 * @returns GrpNalogGovByUnpDto
 */
export default async function fetchDePaByGetUNP(unp: string) {
  try {
    const URL = `https://de-pa.by/api/v1/portal-nalog-gov-by/${unp}`;
    const response = await axios.get(URL);
    const json: GrpNalogGovByUnpDto = response.data;
    return json;
  } catch (exception: any) {
    if (exception.response) {
      throw new Error('' + exception.response.status);
    }
    throw new Error(exception);
  }
}
