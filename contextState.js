import React from "react";

export const initialState = {
    token: "",
    menu:{
        precioMenu:0,
        promedioPreparacion:0,
        tiempoTotalPreparacion: 0,
        platoNoVeganos:0,
        platoVeganos:0,
        cantidadPlatos:0,
        listaPlatos:[]
    }
}

export const ActionTypes = {
    setMenu:'SET_MENU',
    setToken:'SET_TOKEN'
}

export const reducer = (state = {}, action) => {
    switch(action.type){
        case ActionTypes.setMenu:
            return{
                ...state,
                menu: action.value
            };
        case ActionTypes.setToken:
            return{
                ...state,
                token:action.value
            }
    }
}

export const initialContext = {
    contextState: initialState,
    setContextState: () => {},
}

const Cont = React.createContext(initialContext)

export function ContextProvider ({children,initial=initialState}){
    const [state,dispatch] = React.useReducer(reducer,initial);

    const contextState = state
    const setContextState = dispatch;

    return <Cont.Provider value={{contextState,setContextState}}>{children}</Cont.Provider>
}

export const useContextState = () => React.useContext(Cont)