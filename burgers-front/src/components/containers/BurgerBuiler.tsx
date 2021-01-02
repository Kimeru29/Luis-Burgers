import React, {Component} from 'react';
import styles from './BurgerBuiler.module.css';
import BurgerPresentation from "../BurgerPresentation";

class BurgerBuiler extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.rojo}>Burger Builder</h1>
                <BurgerBuiler />
            </div>
        );
    }
}

export default BurgerBuiler;
