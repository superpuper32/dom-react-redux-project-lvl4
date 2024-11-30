import { configureStore } from '@reduxjs/toolkit';

import channelsReducer from './slices/channelsSlice.ts';
import messagesReducer from './slices/messagesSlice.ts';

const store = configureStore({
  reducer: {
    channels: channelsReducer,
    messages: messagesReducer,
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store;