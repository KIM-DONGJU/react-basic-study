import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import WebFont from 'webfontloader';

WebFont.load({
  custom: {
    families: ['Spoqa Han Sans', 'Spoqa Han Sans NEO'],
    urls: [
      '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css',
      '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css',
    ],
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
