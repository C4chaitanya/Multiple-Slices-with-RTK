import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    data: [],
    searchTerm: "",
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar(state, action) {
      const updated = state.data.filter((car) => car.id !== action.payload);
      state.data = updated;
    },
  },
});

const carsReducer = carsSlice.reducer;
export default carsReducer;

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
