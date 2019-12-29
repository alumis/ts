import styles from "./index.scss";
import { Component } from "@alumis/elastic-ts/JSX";

export class MainHeaderForMediumAndUp extends Component<HTMLElement> {
    constructor() {
        super();
        this.node = (
            <header className={styles.mainHeaderForMediumAndUp}>
                <div className={styles.brand}>Elastic.js</div>
                <div>Hello, world!</div>
            </header>
        );
    }
}