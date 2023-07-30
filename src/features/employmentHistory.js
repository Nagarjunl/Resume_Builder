import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  eduHistory: [],
};

export const employmentHistory = createSlice({
  name: "EmploymentHistory",
  initialState,
  reducers: {
    setProDetail: (state, { payload }) => {
      return payload.map((data) => {
        return {
          ...data,
        };
      });
    },
  },
});

export const { setProDetail } = employmentHistory.actions;
export default employmentHistory.reducer;
