import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyTextEditor from './MyTextEditor';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyTextEditor />, document.getElementById('root'));
registerServiceWorker();
