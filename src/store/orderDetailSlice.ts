import { createSlice } from "@reduxjs/toolkit";

interface FormData {
  firstName?: string;
  lastName?: string;
  age?: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  email?: string;
  payment?: string;
}

const initialState: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  payment: "",
};

const orderDetailSlice = createSlice({
  name: "orderDetail",
  initialState,
  reducers: {
    updateDetail: (state, action: { payload: { [key: string]: string } }) => {
      return { ...state, ...action.payload };
    },
  },
});
export const { updateDetail } = orderDetailSlice.actions;
export default orderDetailSlice.reducer;
