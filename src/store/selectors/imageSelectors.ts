import axios from 'axios';
import { atom, selector } from 'recoil';

import { searchState } from '@/store/atoms/searchState';
import { pageState } from '@/store/atoms/pageState';
import { CardData } from '@/pages/index/types/card';

export const imageData = atom<CardData>({
  key: 'imageData',
  default: {} as CardData,
});

export const getImageData = selector({
  key: 'getImageData',
  get: async ({ get }) => {
    const API_URL = 'https://api.unsplash.com/search/photos';
    const API_KEY = 'gaq4XONIvPaa_WuLnHy3O1QSiRTAg2WPvHQY_DE-MYI';
    const PER_PAGE = 30;

    const searchValue = get(searchState);
    const pageValue = get(pageState);

    try {
      const res = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`,
      );
      const results = res.data as CardData;

      return results;
    } catch (error) {
      console.error(error);
    }
  },
});
