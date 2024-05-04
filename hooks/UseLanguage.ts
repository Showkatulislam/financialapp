import { create } from 'zustand'

export type language="EN" | "FN"

type Store = {
    LAN:language
    setLanguage: (v:language) => void
}
export const useLanguage = create<Store>()((set) => ({
    LAN:"EN",
    setLanguage: (v) =>  set(()=>({LAN:v})),
  }))

