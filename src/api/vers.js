import {Client} from './instance';
// get için
export async function getRequest(URL, params) {
  const response = Client.get(URL, {params: params});
  return response;
}
//post için
export async function postRequest(URL, params) {
  const response = Client.post(URL, params);
  return response;
}
