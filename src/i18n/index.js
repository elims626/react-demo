import zh from './lang/zh';
import en from './lang/en';

const messages = {
  zh,
  en,
};

export const locale = (lang) => {
  return messages[lang];
};
