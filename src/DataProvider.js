import React, { createContext, useContext, useReducer } from 'react';

export const DataProviderContext = createContext()

export const DataProvider = (
    {
        initialState,
        reducer, 
        children
    }) => (
        <DataProviderContext.Provider value={useReducer( reducer,initialState)}>
            {children}
        </DataProviderContext.Provider>
    )

    export const useDataProviderValue = () => useContext(DataProviderContext)