import { create } from 'zustand'

interface BearState {
  bears: number
  increase: () => void
}

export const zusAppStore = create<BearState>((set) => ({
  bears: 0,
  increase: () => {}
}))
