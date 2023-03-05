import { defaultAxios } from '../defaultInstance';
import { championListParams } from './interface';

export const getChampionList = async ({ size, locale }: championListParams) => {
  try {
    const data = await defaultAxios.get('/championList', {
      headers: {
        'Cache-Control': 'max-age=3600', // cache for 1 hour
      },
      params: { size, locale },
    });

    return data;
  } catch (error) {
    throw error;
  }
};
