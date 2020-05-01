import hljs from 'highlight.js';
import js_lang from 'highlight.js/lib/languages/javascript';
import bash_lang from 'highlight.js/lib/languages/bash';
import css_lang from 'highlight.js/lib/languages/css';
hljs.registerLanguage('javascript', js_lang);
hljs.registerLanguage('bash', bash_lang);
hljs.registerLanguage('css', css_lang);

export const highlight = (code, lang) => {
  let result = hljs.highlight(lang, code).value;
  result = result.replace(/<span class="(javascript|css)">/g,"$&&nbsp;");
  return result;
};
