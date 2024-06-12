import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import AsyncStorage from '@react-native-async-storage/async-storage'


export interface CardI {
  ccNumber: string;
  expiryDate: string;
  cvv: string;
  nameOnCard: string;
}

const storage = createJSONStorage<CardI[] | []>(() => AsyncStorage)

export const cardAtom = atomWithStorage<CardI[] | []>('card', [], storage)
