import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addtoBasket: (state, action) => {},
    removefromBasket: (state, action) => {},
  },
});

export const { addtoBasket, removefromBasket } = basketSlice.actions;
// selectors : this is how we pull information from global store

export const selectItems = (state) => state.basket.items;
export default basketSlice.reducer;
