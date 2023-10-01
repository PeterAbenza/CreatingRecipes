import { createSlice } from "@reduxjs/toolkit";
import typeUserLogado from "./allTypes"

const initialState = {
    dadosLogado: [],
}

const userSlice = createSlice({
    name: 'userLogado',
    initialState, 
    reducers: {
        addUser: (state, action) => {
            if(typeUserLogado.typeUserLogado){
                state.dadosLogado = action.payload

                return;
            }

            return state;
        }
    }
});

export default userSlice.reducer
export const {addUser} = userSlice.actions
