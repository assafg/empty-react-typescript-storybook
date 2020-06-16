import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import StartPage from './pages/start-page/StartPage';

const App: React.FC = () => {
    return (
        <Router>
            <header>Haader</header>
            <Route path="/" component={StartPage} />
        </Router>
    );
};

export default App;
