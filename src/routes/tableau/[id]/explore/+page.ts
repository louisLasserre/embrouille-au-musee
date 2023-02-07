import { error } from '@sveltejs/kit';
import type { PageLoad } from '../$types';

import { paintingsData } from '$lib/data.ts';


interface ITableau {
  name: string;
  description: string;
  fileName: string;
  itemId: number;
  missingItemId: number;
  transcription: string


}
interface loadParams {
  params: {
    id: string
  }
}

export const load = (({ params }: loadParams) => {


  try {
    const { id } = params
    const tableau: ITableau = paintingsData[Number(id) - 1]

    return {
      tableau,
      id,
      total: paintingsData.length
    }

  }catch(err) {

    throw error(404, 'Not found');
  }


}) satisfies PageLoad;
