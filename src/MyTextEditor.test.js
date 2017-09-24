import React from 'react';
import ReactDOM from 'react-dom';
import MyTextEditor from './MyTextEditor';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyTextEditor />, div);
});
