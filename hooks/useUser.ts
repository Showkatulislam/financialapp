import { create } from "zustand"

interface userRole{
    role:string,
    setRole:(s:string)=>void
}

export const useUser = create<userRole>((set) => ({
    role:'GUEST',
    setRole:(s)=>set(()=>({
        role:s
    }))
}))