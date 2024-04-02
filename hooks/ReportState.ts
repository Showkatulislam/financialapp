import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { report } from "process";
export interface shareholder {
  id?: string;
  name: string;
  percentage: number;
  nationality: string;
}
export interface manager {
  id?: string;
  name: string;
  companyName: string;
  function: string;
  nationality: string;
}
export interface financialdata {
  id?: string;
  year: string;
  turnover: number;
  nprofit: number;
  oprofit: number;
  damorliztion: number;
  equityballocation: number;
  supplieraccounts: number;
  purchases: number;
  clientaccounts: number;
  stocks: number;
  total: number;
}
export interface bank {
  id?: string;
  bank: string;
  agency: string;
}
export interface effective {
  id?: string;
  year: string;
  count: string;
}
export interface report {
  companyName: string;
  client: string;
  object: string;
  reference: string;
  priority: string;
  language: string;
  creditRequested: string;
  Denomination: string;
  address: string;
  tel: string;
  fax: string;
  mobile: string;
  email: string;
  website: string;
  legalStatus: string;
  uniqueIdentifier: string;
  creationData: Date;
  startOfActivity: Date;
  Sharecapital: string;
  Sharecapitaltext: string;
  preShareCapital: string;
  preShareCapitaltext: string;
  riskRating: string;
  paymentExperience: string;
  recommendCredit: string;
  recommendCreditText: string;
  equivalentToCredit: string;
  equivalentToCreditText: string;
  shareholders: shareholder[];
  managers: manager[];
  financialDatas: financialdata[];
  banks: bank[];
  bankComment:string,
  effectives: effective[];
  importText: string;
  suppliersLocal: string;
  exportText: string;
  clientsLocal: string;
  nace: string;
  secondyestablishment: string;
  officailpublication: string;
  conclusion: string;
  status:string
  id:string
}
interface reportState {
  report: report;
  editshareholderrow: shareholder;
  editManagerRow: manager;
  editFinancialDataRow: financialdata;
  editBankRow: bank;
  editEffectiverow: effective;
  setReport: (r: report) => void;
  setTextField: (o: any) => void;
  setShareholder: (s: shareholder) => void;
  deleteShareholder: (id: any) => void;
  editShareholder: (id: any) => void;
  setManager: (s: manager) => void;
  deleteManager: (id: any) => void;
  editManager: (id: any) => void;
  setFinancialData: (f: financialdata) => void;
  deleteFinancialData: (id: any) => void;
  editFinancialData: (id: any) => void;
  setBankData: (b: bank) => void;
  deleteBank: (id: string) => void;
  editBank: (id: string) => void;
  setEffectiveData: (id: effective) => void;
  deleteEffective: (id: string) => void;
  editEffective: (id: string) => void;
}
export const ReportState = create<reportState>((set) => ({
  report: {
    companyName: "",
    client: "",
    object: "",
    reference: "",
    priority: "",
    language: "",
    creditRequested: "",
    Denomination: "",
    address: "",
    tel: "",
    fax: "",
    mobile: "",
    email: "",
    website: "",
    legalStatus: "",
    uniqueIdentifier: "",
    creationData: new Date(),
    startOfActivity: new Date(),
    Sharecapital: "",
    Sharecapitaltext: "",
    preShareCapital: "",
    preShareCapitaltext: "",
    riskRating: "",
    paymentExperience: "",
    recommendCredit: "",
    recommendCreditText: "",
    equivalentToCredit: "",
    equivalentToCreditText: "",
    shareholders: [],
    managers: [],
    financialDatas: [],
    banks: [],
    bankComment:'',
    effectives: [],
    importText: "",
    suppliersLocal: "",
    exportText: "",
    clientsLocal: "",
    nace: "",
    secondyestablishment: "",
    officailpublication: "",
    conclusion: "",
    status:"",
    id:""
  },
  editshareholderrow: {
    name: "",
    percentage: 1,
    nationality: "",
  },
  editManagerRow: {
    name: "",
    companyName: "",
    function: "",
    nationality: "",
  },
  editFinancialDataRow: {
    year: "",
    turnover: 0,
    nprofit: 0,
    oprofit: 0,
    damorliztion: 0,
    equityballocation: 0,
    supplieraccounts: 0,
    purchases: 0,
    clientaccounts: 0,
    stocks: 0,
    total: 0,
  },
  editBankRow: {
    bank: "",
    agency: "",
  },
  editEffectiverow: {
    year: "",
    count: "",
  },
  setReport: (r) =>
    set(() => ({
      report: r,
    })),
  setTextField: (o) =>
    set((state) => ({
      report: { ...state.report, ...o },
    })),
  setShareholder: (s: shareholder) =>
    set((state) => ({
      report: {
        ...state.report,
        shareholders: [...state.report.shareholders, { ...s, id: uuidv4() }],
      },
    })),
  deleteShareholder: (id) =>
    set((state) => ({
      report: {
        ...state.report,
        shareholders: [...state.report.shareholders.filter((f) => f.id != id)],
      },
    })),
  editShareholder: (id) =>
    set((state) => ({
      editshareholderrow: state.report.shareholders.find((s) => s.id === id),
      report: {
        ...state.report,
        shareholders: [...state.report.shareholders.filter((f) => f.id != id)],
      },
    })),
  setManager: (m: manager) =>
    set((state) => ({
      report: {
        ...state.report,
        managers: [...state.report.managers, { ...m, id: uuidv4() }],
      },
    })),
  deleteManager: (id) =>
    set((state) => ({
      report: {
        ...state.report,
        managers: [...state.report.managers.filter((f) => f.id != id)],
      },
    })),
  editManager: (id) =>
    set((state) => ({
      editManagerRow: state.report.managers.find((s) => s.id === id),
      report: {
        ...state.report,
        managers: [...state.report.managers.filter((f) => f.id != id)],
      },
    })),
  setFinancialData: (f: financialdata) =>
    set((state) => ({
      report: {
        ...state.report,
        financialDatas: [
          ...state.report.financialDatas,
          { ...f, id: uuidv4() },
        ],
      },
    })),
  deleteFinancialData: (id) =>
    set((state) => ({
      report: {
        ...state.report,
        financialDatas: [
          ...state.report.financialDatas.filter((f) => f.id != id),
        ],
      },
    })),
  editFinancialData: (id) =>
    set((state) => ({
      editFinancialDataRow: state.report.financialDatas.find(
        (s) => s.id === id
      ),
      report: {
        ...state.report,
        financialDatas: [
          ...state.report.financialDatas.filter((f) => f.id != id),
        ],
      },
    })),
  setBankData: (b: bank) =>
    set((state) => ({
      report: {
        ...state.report,
        banks: [...state.report.banks, { ...b, id: uuidv4() }],
      },
    })),
  deleteBank: (id: string) =>
    set((state) => ({
      report: {
        ...state.report,
        banks: [...state.report.banks.filter((b) => b.id != id)],
      },
    })),
  editBank: (id: string) =>
    set((state) => ({
      editBankRow: state.report.banks.find((b) => b.id === id),
      report: {
        ...state.report,
        banks: [...state.report.banks.filter((b) => b.id != id)],
      },
    })),
  setEffectiveData: (f: effective) =>
    set((state) => ({
      report: {
        ...state.report,
        effectives: [...state.report.effectives, { ...f, id: uuidv4() }],
      },
    })),
  deleteEffective: (id: string) =>
    set((state) => ({
      report: {
        ...state.report,
        effectives: [...state.report.effectives.filter((b) => b.id != id)],
      },
    })),
  editEffective: (id: string) =>
    set((state) => ({
      editEffectiverow: state.report.effectives.find((b) => b.id === id),
      report: {
        ...state.report,
        effectives: [...state.report.effectives.filter((b) => b.id != id)],
      },
    })),
}));
