import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './App.module.css';
import BurgerBuiler from "./components/containers/BurgerBuiler";

function App() {
    return (
        <div className="App">
            <nav className={styles.header}>
                <h1 className={styles.logo}>Logo</h1>
            </nav>
            <BurgerBuiler />
        </div>
    );
}

export default App;
