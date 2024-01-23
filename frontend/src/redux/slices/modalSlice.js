/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpened: false,
  type: null, // addChannel, removeChannel, renameChannel
  extra: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (_, { payload: { type, extra } }) => ({ isOpened: true, type, extra }),
    closeModal: () => ({ isOpened: false, type: null, extra: null }),
  },
});

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
