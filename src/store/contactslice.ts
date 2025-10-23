import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ContactState {
  name: string;
  email: string;
  message: string;
  status: "idle" | "submitting" | "success" | "error";
}

const initialState: ContactState = {
  name: "",
  email: "",
  message: "",
  status: "idle",
};

// ✅ Async thunk for form submission (simulates API call)
export const submitForm = createAsyncThunk(
  "contact/submitForm",
  async (_, { getState }) => {
    const state = getState() as { contact: ContactState };
    const { name, email, message } = state.contact;

    console.log("Form submitted:", { name, email, message });

    // simulate async API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return true;
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.status = "submitting";
      })
      .addCase(submitForm.fulfilled, (state) => {
        state.status = "success";
        state.name = "";
        state.email = "";
        state.message = "";
      })
      .addCase(submitForm.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { setName, setEmail, setMessage } = contactSlice.actions;
export default contactSlice.reducer;