import css from '../Sass/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

//polyfill to make fetchAPI work in all browser

require('isomorphic-fetch');
ReactDom.render(<App />, document.getElementById('root'));