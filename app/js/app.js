import React from 'react';
import styles from '../css/app.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div class={styles.app}>
        bar
      </div>
    );
  }
}
