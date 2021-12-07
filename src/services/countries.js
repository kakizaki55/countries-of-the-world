import { checkError, client } from './client';

export async function getCountries() {
  const countires = await client.from('countries').select();
  return checkError(countires);
}
