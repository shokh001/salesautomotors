import { createContext, useReducer } from "react";
import CreateNewJobReducer from "./creatNewJobReducer";


const INITIAL_STATE = {
    data: [],
};

export const CreatNewJobContext = createContext(INITIAL_STATE);

export const CreatNewJobContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CreateNewJobReducer, INITIAL_STATE);

    return (
        <CreatNewJobContext.Provider value={{ data: state.data, dispatch }}>
            {children}
        </CreatNewJobContext.Provider>
    );
};