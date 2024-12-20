import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { TMessage } from '../../types';

const messagesAdapter = createEntityAdapter({
    selectId: (message: TMessage) => message.id,
    sortComparer: (a, b) => a.channelId.localeCompare(b.channelId),
});

const initialState = messagesAdapter.getInitialState();

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessages: messagesAdapter.addMany,
    addMessage: messagesAdapter.addOne,
  },
});

export const { addMessages, addMessage } = messagesSlice.actions;
export const messagesSelectors = messagesAdapter.getSelectors<RootState>(
    (state) => state.messages
);
export default messagesSlice.reducer;
