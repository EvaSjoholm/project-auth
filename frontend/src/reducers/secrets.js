import { createSlice } from "@reduxjs/toolkit";
// Här e vi osäkra om det ska vara items eller message
    
export const Secrets = createSlice({
        username: "secrets", 
        initialState: {
         items: [],
         error: null,
        },
    
        reducers: {
            setError: (store, action) => {
                store.error = action.payload
            },
            setItems: (store, action) => {
                store.items = action.payload
            }

        }
    });