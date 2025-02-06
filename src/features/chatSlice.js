import { createSlice } from "@reduxjs/toolkit";
import mockData from "../mockData.json";

const initialState = {
  groups: mockData.groups,
  activeGroupId: 1, // Initially selecting group 1
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setActiveGroup: (state, action) => {
      state.activeGroupId = action.payload;
    },
    addMessage: (state, action) => {
      const group = state.groups.find(
        (group) => group.id === state.activeGroupId
      );
      group.messages.push(action.payload);
    },
  },
});

export const { setActiveGroup, addMessage } = chatSlice.actions;

export const selectActiveGroup = (state) =>
  state.chat.groups.find((group) => group.id === state.chat.activeGroupId);

export default chatSlice.reducer;
