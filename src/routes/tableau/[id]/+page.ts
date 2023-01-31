import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {


  try {
    return {
      title: `Hello world! comming from id: ${params.id}`,
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    };

  }catch(err) {

    throw error(404, 'Not found');
  }


}) satisfies PageLoad;
