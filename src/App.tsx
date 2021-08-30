import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { LoginAndRegisterPage } from './pages/LoginAndRegisterPage';
import { theme } from './theme';
import { ThemeProvider } from '@material-ui/core';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/index';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="App">
                    <Header />
                    <main style={{ paddingTop: 100 }}>
                        <Route
                            exact
                            path={['/login', '/register']}
                            component={LoginAndRegisterPage}
                        />
                        <Route exact path="/" component={HomePage} />
                    </main>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
