import { CardDTO } from '@/pages/index/types/card';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'bookmarkState',
  storage: localStorage,
});

export const bookmarkListState = atom<{ [key: string]: CardDTO }>({
  key: 'bookmarkState',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
