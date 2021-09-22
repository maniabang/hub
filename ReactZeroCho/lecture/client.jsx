import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root'

import NumberBaseball from 'RenderTest';

const Hot = hot(NumberBaseball);

ReactDOM.render(<NumberBaseball />, document.querySelector('#root'));