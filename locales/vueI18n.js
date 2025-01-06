/**
 * Created by Administrator on 2019/4/25.
 */

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './zh'
import en from './en'
// import ko from './ko'
import es from './es'
import fil from './fil'
import fr from './fr'
import ja from './ja'
import pt from './pt'
import th from './th'
// import tr from './tr'
import vi from './vi'
import de from './de'
import ru from './ru'
import hk from './hk'
import longest from './longest'

Vue.use(VueI18n)

const formatter = {
  interpolate: (message, values) => {
    if (!values) {
      return [message];
    }
    const tagPair = {}
    return [message.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      const cls = match.replace('{{', '').replace('}}', '');
      if (match.includes('value_')) {
        return values[key] || '';
      }
      // 剩下是标签的情况，如{{color_X}}{{bold_X}}{{italic_X}}{{link_X}}
      if (tagPair[match]) {
        return tagPair[match];
      }
      if (match.includes('color_') && typeof values[key] === 'string' && values[key].length === 7 && values[key].startsWith('#')) {
        tagPair[match] = `</span>`;
        return `<span class="${cls}" style="color:${values[key]};">`;
      }

      const classString = values[key] && values[key].class || '';

      if (match.includes('bold_')) {
        tagPair[match] = `</span>`;
        return `<span class="${cls} ${classString}" style="font-weight:bold;">`;
      }
      if (match.includes('italic_')) {
        tagPair[match] = `</span>`;
        return `<span class="${cls} ${classString}" style="font-style:italic;">`;
      }
      if (match.includes('link_') && values[key] && values[key].href) {
        tagPair[match] = `</a>`;
        return `<a class="${cls} ${classString}" href="${values[key].href}" target="${values[key].target || '_blank'}">`;
      }
      if (classString) {
        tagPair[match] = `</span>`;
        return `<span class="${cls} ${classString}">`;
      }
    })];
  }
};
module.exports = new VueI18n({;
  messages: {
    'zh': zh,
    'en': en,
    // 'ko': ko,
    'es': es,
    'fil': fil,
    'fr': fr,
    'ja': ja,
    'pt': pt,
    'th': th,
    // 'tr': tr,
    'vi': vi,
    'de': de,
    'ru': ru,
    'hk': hk,
    'longest': longest
  },
  formatter,
})
