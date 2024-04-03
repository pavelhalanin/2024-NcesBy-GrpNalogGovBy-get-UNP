export interface GrpNalogGovByUnpRowDto {
  ckodsost: string;
  dlikv: null | string;
  dreg: string;
  nmns: string;
  vkods: string;
  vlikv: null | string;
  vmns: string;
  vnaimk: string;
  vnaimp: string;
  vpadres: string;
  vunp: string;
}

export interface GrpNalogGovByUnpDto {
  row: GrpNalogGovByUnpRowDto;
}

export const emptyGrpNalogGovByUnp: GrpNalogGovByUnpDto = {
  row: {
    ckodsost: '',
    dlikv: null,
    dreg: '',
    nmns: '',
    vkods: '',
    vlikv: null,
    vmns: '',
    vnaimk: '',
    vnaimp: '',
    vpadres: '',
    vunp: '',
  },
};
