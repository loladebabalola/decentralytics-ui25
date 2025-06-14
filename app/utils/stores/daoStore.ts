// stores/daoStore.ts
import { create } from 'zustand'
import { DaoData } from '../interface'

interface DaoStore {
  selectedDao: DaoData | null
  setSelectedDao: (dao: DaoData) => void
}

export const useDaoStore = create<DaoStore>((set) => ({
  selectedDao: null,
  setSelectedDao: (dao) => set({ selectedDao: dao }),
}))
