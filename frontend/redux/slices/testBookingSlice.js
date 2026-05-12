import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // SELECTED TEST
  selectedTest: null,

  // SELECTED LAB
  selectedLab: null,

  // NUMBER OF PATIENTS
  patientCount: 1,

  // BOOKING SLOT
  bookingDate: null,

  bookingTime: null,

  // FIXED PAYMENT MODE
  paymentMethod: "PAY_AT_LAB",

  collectionAddress: null, 

  // PRICE DETAILS
  pricing: {
    testPrice: 0,

    collectionFee: 0,

    discount: 0,

    totalAmount: 0,
  },

  // BOOKING STATUS
  bookingStatus: null,
};

const testBookingSlice = createSlice({
  name: "testBooking",

  initialState,

  reducers: {
    // SELECT TEST
    setSelectedTest: (state, action) => {
      state.selectedTest = action.payload;
    },

    // SELECT LAB
    setSelectedLab: (state, action) => {
      state.selectedLab = action.payload;
    },

    // PATIENT COUNT
    setPatientCount: (state, action) => {
      state.patientCount = action.payload;
    },

    // BOOKING DATE
    setBookingDate: (state, action) => {
      state.bookingDate = action.payload;
    },

    // BOOKING TIME
    setBookingTime: (state, action) => {
      state.bookingTime = action.payload;
    },
      
    // ADDRESS SELECT KARNA (saved ya new dono ke liye same action)
setCollectionAddress: (state, action) => {
  state.collectionAddress = action.payload;
},

    // PRICING
    setPricing: (state, action) => {
      state.pricing = {
        ...state.pricing,
        ...action.payload,
      };
    },

    // BOOKING STATUS
    setBookingStatus: (state, action) => {
      state.bookingStatus = action.payload;
    },

    // CLEAR BOOKING
    clearBooking: () => {
      return initialState;
    },
  },
});

export const {
  setSelectedTest,
  setSelectedLab,
  setPatientCount,
  setBookingDate,
  setBookingTime,
  setPricing,
  setBookingStatus,
  clearBooking,
} = testBookingSlice.actions;

export default testBookingSlice.reducer;