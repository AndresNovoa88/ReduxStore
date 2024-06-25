import { createSlice } from "@reduxjs/toolkit";

const estIni = {
    episodios:[],
    infper: ""
};

const reducers = createSlice({
    name: 'holaAPP',
    initialState: estIni,
    reducers: {
        
        setEpisodios: (state, action) => {
            state.episodios = action.payload;
        },
        setInfper: (state,action)=>{
            state.infper = action.payload;
        }
    }

});

export const {setEpisodios,setInfper}=reducers.actions;
export default reducers.reducer;