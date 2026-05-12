import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // AUTH
  user: null,

  token: null,

  isAuthenticated: false,

  // CURRENT USER LOCATION
  currentLocation: {
    lat: null,

    lng: null,

    city: "",

    state: "",

    pincode: "",
  },

  // SAVED ADDRESSES
  savedAddresses: [],
};

const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    // LOGIN USER
    setUser: (state, action) => {
      state.user = action.payload.user;

      state.token = action.payload.token;

      state.isAuthenticated = true;
    },

    // LOGOUT USER
    logoutUser: () => {
      return initialState;
    },

    // SET CURRENT LOCATION
    setCurrentLocation: (state, action) => {
      state.currentLocation = {
        ...state.currentLocation,
        ...action.payload,
      };
    },

    // SET ALL SAVED ADDRESSES
    setSavedAddresses: (state, action) => {
      state.savedAddresses = action.payload;
    },

    // ADD NEW ADDRESS
    addSavedAddress: (state, action) => {
      state.savedAddresses.push(action.payload);
    },

    // REMOVE ADDRESS
    removeSavedAddress: (state, action) => {
      state.savedAddresses =
        state.savedAddresses.filter(
          (item) => item.id !== action.payload
        );
    },
  },
});

export const {
  setUser,
  logoutUser,
  setCurrentLocation,
  setSavedAddresses,
  addSavedAddress,
  removeSavedAddress,
} = userSlice.actions;

export default userSlice.reducer;