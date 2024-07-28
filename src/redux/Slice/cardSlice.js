import { createSlice } from "@reduxjs/toolkit"



const CardSlice = createSlice({
    name: "Card",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);

        },
    },

});

export const { addItem } = CardSlice.actions;
export default CardSlice.reducer;