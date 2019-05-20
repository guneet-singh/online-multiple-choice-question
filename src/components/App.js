import React, { Component } from 'react';
import QuestionsMain from './QuestionsMain';
import style from './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <h3 className={style.title} align='center'>Multiple Choice Questions</h3>
        <QuestionsMain />
      </div>
    );
  }
}



export default App;