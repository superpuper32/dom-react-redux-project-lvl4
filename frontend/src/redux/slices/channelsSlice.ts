import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { TChannel } from '../../types';

const channelsAdapter = createEntityAdapter({
  selectId: (channel: TChannel) => channel.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

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
