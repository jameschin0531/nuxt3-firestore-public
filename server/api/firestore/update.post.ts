import { useQuery, useBody } from "h3";
import { update } from "../../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const query = useQuery(event.req);
    const body = await useBody(event.req);

    const docRef = await update(query.col as string, query.id as string, body);

    return { result: docRef };
  } catch (error) {
    return { error: error.message }
  } 
});