import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TextCom from './components/firstCom/textCom.js'
import SliderCom from './components/secondCom/sliderCom.js'


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TextCom />
    <hr/>
    <SliderCom />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
