import {Prestation} from "../../app/lib/definitions";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Booking {
    selectedPrestations: Prestation[],
    date: string | undefined,
};

const initialState: Booking = {
    selectedPrestations: [],
    date: undefined,
};

export const BookingSlice = createSlice({
    name: 'handleBooking',
    initialState,
    reducers: {
        updatePrestations(state, action: PayloadAction<Prestation[]>) {
            state.selectedPrestations = action.payload;
        },
        setDate(state, action: PayloadAction<string>) {
            state.date = action.payload;
        }
    },
});

export const { updatePrestations, setDate } = BookingSlice.actions;
export default BookingSlice.reducer;