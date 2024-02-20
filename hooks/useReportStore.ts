import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
interface orderdetail {
  client: string;
  object: string;
  reference: string;
  priority: string;
  language: string;
  creditRequested: string;
}

interface companycontactinfo {
  Denomination: string;
  address: string;
  tel: string;
  fax: string;
  mobile: string;
  email: string;
  website: string;
}

interface officalinfo {
  legalStatus: string;
  uniqueIdentifier: string;
  creationData: string;
  startOfActivity: string;
  activityStatus: string;
  Sharecapital: string;
  Sharecapitaltext: string;
  preShareCapital: string;
  preShareCapitaltext: string;
}

interface summaryinfo {
  riskRating: string;
  paymentExperience: string;
  recommendCredit: string;
  recommendCreditText: string;
  equivalentToCredit: string;
  equivalentToCreditText: string;
}

interface shareholder {
  id?: string;
  name: string;
  percentage: number;
  nationality: string;
}
interface manager {
  id?: string;
  name: string;
  companyName: string;
  function: string;
  nationality: string;
}
interface financialdata {
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
interface bank {
  id?: string;
  bank: string;
  agency: string;
  comment: string;
}
interface commercialinfo {
  importText: string;
  suppliersLocal: string;
  exportText: string;
  clientsLocal: string;
}

interface extreinfo {
  nace: string;
  secondyestablishment: string;
  officailpublication: string;
}

interface reportState {
  orderdetail: orderdetail;
  companydetail: companycontactinfo;
  officaldata: officalinfo;
  summeryinfo: summaryinfo;
  shareholders: shareholder[];
  managers: manager[];
  financialdata: financialdata[];
  commercialdata: commercialinfo;
  banks: bank[];
  extrainfo: extreinfo;
  setOrderinfo: (pro: any) => void;
  setcompanyinfo: (pro: any) => void;
  setofficailinfo: (pro: any) => void;
  setsummeryinfo: (pro: any) => void;
  setShareholder: (s: shareholder) => void;
  DeleteShareholder: (id:string) => void;
  setManager: (m: manager) => void;
  DeleteManager: (id: string) => void;
  setFinancialData: (f: financialdata) => void;
  DeleteFinancialData: (id: string) => void;
  setCommercialData: (pro: any) => void;
  setBank: (b: bank) => void;
  DeleteBank: (id:string) => void;
  setExtreInfo: (pro: any) => void;
}

export const useReportStore = create<reportState>((set) => ({
  orderdetail: {
    client: "",
    object: "",
    reference: "",
    priority: "",
    language: "",
    creditRequested: "",
  },
  companydetail: {
    Denomination: "",
    address: "",
    tel: "",
    fax: "",
    mobile: "",
    email: "",
    website: "",
  },
  officaldata: {
    legalStatus: "",
    uniqueIdentifier: "",
    creationData: "",
    startOfActivity: "",
    activityStatus: "",
    Sharecapital: "",
    Sharecapitaltext: "",
    preShareCapital: "",
    preShareCapitaltext: "",
  },
  summeryinfo: {
    riskRating: "",
    paymentExperience: "",
    recommendCredit: "",
    recommendCreditText: "",
    equivalentToCredit: "",
    equivalentToCreditText: "",
  },
  shareholders: [],
  managers: [],
  financialdata: [],
  commercialdata: {
    importText: "",
    suppliersLocal: "",
    exportText: "",
    clientsLocal: "",
  },
  banks: [],
  extrainfo: {
    nace: "",
    secondyestablishment: "",
    officailpublication: "",
  },
  setOrderinfo: (f) =>
    set((state) => ({
      orderdetail: { ...state.orderdetail, ...f },
    })),
  setcompanyinfo: (c) =>
    set((state) => ({
      companydetail: { ...state.companydetail, ...c },
    })),
  setofficailinfo: (o) =>
    set((state) => ({
      officaldata: { ...state.officaldata, ...o },
    })),
  setsummeryinfo: (s) =>
    set((state) => ({
      summeryinfo: { ...state.summeryinfo, ...s },
    })),
  setShareholder: (s) =>
    set((state) => ({
      shareholders: [...state.shareholders, { ...s, id: uuidv4() }],
    })),
  DeleteShareholder:(id)=>set(
    (state)=>({
      shareholders:[...state.shareholders.filter(s=>s.id!=id)]
    })
  ),
  setManager: (m) =>
    set((state) => ({
      managers: [...state.managers, { ...m, id: uuidv4() }],
    })),
  DeleteManager: (id) =>
    set((state) => ({
      managers: [...state.managers.filter(m=>m.id!==id)],
    })),
  setFinancialData: (f) =>
    set((state) => ({
      financialdata: [...state.financialdata, { ...f, id: uuidv4() }],
    })),
    DeleteFinancialData: (id) =>
    set((state) => ({
      financialdata: [...state.financialdata.filter(f=>f.id!==id)],
    })),
  setCommercialData: (s) =>
    set((state) => ({
      commercialdata: { ...state.commercialdata, ...s },
    })),
  setBank: (b) =>
    set((state) => ({
      banks: [...state.banks, { ...b, id: uuidv4() }],
    })),
  DeleteBank: (id) =>
    set((state) => ({
      banks: [...state.banks.filter(b=>b.id!==id)],
    })),
  setExtreInfo: (s) =>
    set((state) => ({
      extrainfo: { ...state.extrainfo, ...s },
    })),
}));
