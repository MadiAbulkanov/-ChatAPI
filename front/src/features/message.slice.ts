import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../api/client";
import { MessageData } from "../components/AddMessagePage/AddMessagePage";

export interface MessageState {
  messages: IMessage[];
  loading: boolean;
  error: string | null;
}

const initState: MessageState = {
  messages: [],
  loading: false,
  error: null,
};

export const fetchMessages = createAsyncThunk('fetch/messages', async () => {
  const { data } = await client.get('/messages');
  return data;
});


export const fetchNewMessages = createAsyncThunk('fetch/messages', async (date: string) => {
  const { data } = await client.get(`/messages?datetime=${date}`);
  return data;
});

export const createMessage = createAsyncThunk('post/messages', async (payload: MessageData) => {
  const { data } = await client.post<IMessage>('/messages', payload);
  return data;
});

export const messageSlice = createSlice({
  name: 'messages',
  initialState: initState,
  reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchMessages.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchMessages.fulfilled, (state, action) => {
            state.loading = false;
            state.messages = action.payload;
        })
        .addCase(fetchMessages.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'error exception in fetchProducts';
        });
  },
});

export default messageSlice.actions;
