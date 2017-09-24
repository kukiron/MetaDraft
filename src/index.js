import React from 'react';
import ReactDOM from 'react-dom';
import MyTextEditor from './MyTextEditor';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(<MyTextEditor />, document.getElementById('root'));
registerServiceWorker();
