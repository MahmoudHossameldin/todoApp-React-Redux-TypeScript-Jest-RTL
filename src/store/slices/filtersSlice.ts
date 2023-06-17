import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState } from '../../types';

interface FiltersState {
  filter: FilterState;
}

const initialState: FiltersState = {
  filter: 'All',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterState>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
