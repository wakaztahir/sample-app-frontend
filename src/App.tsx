import React from "react";
import {AppState} from "./providers/AppStateProvider";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import MainPage from "./pages/MainPage";
import {createGlobalStyle} from "styled-components";
import SignUpPage from "./pages/SignUpPage";

interface AppProps {

}

interface AppState {
    signedIn: boolean
    darkTheme: boolean
}

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
  }
`

class App extends React.Component<AppProps, AppState> {
    state: AppState = {
        signedIn: false,
        darkTheme: false,
    }

    render() {
        return (
            <AppState.Provider value={{
                signedIn: this.state.signedIn,
                darkTheme: this.state.darkTheme
            }}>
                <GlobalStyles/>
                <Router>
                    <Switch>
                        <Route exact path={"/signin"}>
                            <SignInPage/>
                        </Route>
                        <Route exact path={"/signup"}>
                            <SignUpPage/>
                        </Route>
                        <Route exact path={"forgot-password"}>

                        </Route>
                        <Route exact path={"/"}>
                            <MainPage/>
                        </Route>
                    </Switch>
                </Router>
            </AppState.Provider>
        )
    }
}

export default App