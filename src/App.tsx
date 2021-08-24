import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { LoginAndRegisterPage } from './pages/LoginAndRegisterPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Route exact path={['/login', '/register']} component={LoginAndRegisterPage} />
            </div>
        </Router>
    );
}

export default App;
