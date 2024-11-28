import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { RootState } from '../store';

const messagesAdapter = createEntityAdapter();

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
