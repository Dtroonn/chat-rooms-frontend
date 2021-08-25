import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { LoginAndRegisterPage } from "./pages/LoginAndRegisterPage";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="App">
                    <Route exact path={["/login", "/register"]} component={LoginAndRegisterPage} />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
