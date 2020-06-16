import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IntlProvider } from 'react-intl';
import { locale } from './i18n/index';

// 日期国际化
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');

const lang = window.localStorage.getItem('lang') || 'zh';

ReactDOM.render(
  <IntlProvider
    locale={lang}
    messages={locale(lang)}
  >
    <App />
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
