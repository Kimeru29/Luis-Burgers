import React, {Component} from 'react';
import styles from './BurgerBuiler.module.css';
import BurgerPresentation from "../BurgerPresentation";

class BurgerBuiler extends Component {
    render() {
        return (
            <React.Fragment>
                <BurgerPresentation />
                <h1>Placeholder de los controles</h1>
            </React.Fragment>
        );
    }
}

export default BurgerBuiler;
