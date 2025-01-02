import {createAsyncThunk} from '@reduxjs/toolkit';
import {ALL_CATEGORİES, ALL_PRODUCTS} from '../../api/url';
import {getRequest} from '../../api/vers';

const getCategories = createAsyncThunk(
  'categories/getCategories',
  async params => {
    const url = `${ALL_PRODUCTS}/${ALL_CATEGORİES}`;
    const response = await getRequest(url, params);

    return response.data;
  },
);

export {getCategories};
