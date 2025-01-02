import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../api/vers';
import {ALL_PRODUCTS, CATEGORY_URL} from '../../api/url';

const getProducts = createAsyncThunk('products/getProducts', async params => {
  let url = params.category
    ? `${ALL_PRODUCTS}/${CATEGORY_URL}/${params.category}`
    : ALL_PRODUCTS;
  const response = await getRequest(url, params);

  return response.data;
});
const getProductInfo = createAsyncThunk(
  'products/getProductInfo',
  async params => {
    let url = `${ALL_PRODUCTS}/${params.id}`;
    const response = await getRequest(url, params);
    return response.data;
  },
);

export {getProducts, getProductInfo};
