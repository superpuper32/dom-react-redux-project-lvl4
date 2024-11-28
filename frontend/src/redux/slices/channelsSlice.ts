import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { RootState } from '../store';

const channelsAdapter = createEntityAdapter();

const initialState = channelsAdapter.getInitialState();

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    addChannels: channelsAdapter.addMany,
    setChannel: channelsAdapter.setOne,
  },
});

export const { addChannels, setChannel } = channelsSlice.actions;
export const channelsSelectors = channelsAdapter.getSelectors<RootState>(
    (state) => state.channels
);
export default channelsSlice.reducer;
