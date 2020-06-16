// import { setLocale, getLocale } from 'umi';

import zh from './lang/zh';
import en from './lang/en';

// console.log(getLocale(), setLocale());

const lang = 'zh-CN';

const message = {
  'zh-CN': zh,
  'en-US': en,
};

export const i18n = () => {
  console.log(message[lang], '565665');
  // setLocale(message[lang]);
  return message[lang];
};
