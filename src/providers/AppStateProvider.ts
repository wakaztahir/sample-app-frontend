import React from "react";

const DefaultAppState = {
    darkTheme : false,
    signedIn : false
}

export const AppState = React.createContext(DefaultAppState)

const useAppState = () => {
    return React.useContext(AppState)
}