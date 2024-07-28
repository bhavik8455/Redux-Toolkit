import { createSlice } from "@reduxjs/toolkit"



const CardSlice = createSlice({
    name: "Card",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.fill(action.payload);

        }
    }

});


export default CardSlice.reducer;