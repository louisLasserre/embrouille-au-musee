import { error } from '@sveltejs/kit';
import type { PageLoad } from '../$types';


import Data from '$lib/data.json';

interface ITableau {
  name: string;
  description: string;
}
interface loadParams {
  params: {
    id: string
  }
}

export const load = (({ params }: loadParams) => {


  try {
    const { id } = params
    console.log('server id', id);

    const tableau: ITableau = Data[Number(id) - 1]

    return {
      tableau,
      id,
      total: Data.length
    }

  }catch(err) {

    throw error(404, 'Not found');
  }


}) satisfies PageLoad;
