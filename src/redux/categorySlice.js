import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name : "category",
    initialState : {
        category : "New York" ,
        page : 0,
    },
    reducers : {
        addCategory : (state , action) => {
            state.category = action.payload;
        },
        addPage : (state,action) => {
            if(action.payload === 0){
                state.page = 0;
            }
            else{
                state.page = state.page+3;
            }
        }
    }
})

export const {addCategory , addPage} = categorySlice.actions;

export default categorySlice.reducer;