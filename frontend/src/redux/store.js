import { configureStore } from '@reduxjs/toolkit';

import channelsReducer from './slices/channelsSlice';
import messagesReducer from './slices/messagesSlice';
import modalReducer from './slices/modalSlice';

const store = configureStore({
  reducer: {
    channels: channelsReducer,
    messages: messagesReducer,
    modal: modalReducer,
  },
});

export default store;
