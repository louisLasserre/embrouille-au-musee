import { e as error } from "../../../../../chunks/index.js";
import { p as paintingsData } from "../../../../../chunks/data.js";
const load = ({ params }) => {
  try {
    const { id } = params;
    const tableau = paintingsData[Number(id) - 1];
    return {
      tableau,
      id,
      total: paintingsData.length
    };
  } catch (err) {
    throw error(404, "Not found");
  }
};
export {
  load
};
