(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{"./node_modules/codemirror/mode/mathematica/mathematica.js":function(e,a,t){!function(e){"use strict";e.defineMode("mathematica",function(e,a){var t="(?:\\.\\d+|\\d+\\.\\d*|\\d+)",n="(?:`(?:`?"+t+")?)",m=new RegExp("(?:(?:\\d+)(?:\\^\\^(?:\\.\\w+|\\w+\\.\\w*|\\w+)"+n+"?(?:\\*\\^[+-]?\\d+)?))"),o=new RegExp("(?:"+t+n+"?(?:\\*\\^[+-]?\\d+)?)"),r=new RegExp("(?:`?)(?:[a-zA-Z\\$][a-zA-Z0-9\\$]*)(?:`(?:[a-zA-Z\\$][a-zA-Z0-9\\$]*))*(?:`?)");function c(e,a){var t;return'"'===(t=e.next())?(a.tokenize=i,a.tokenize(e,a)):"("===t&&e.eat("*")?(a.commentLevel++,a.tokenize=z,a.tokenize(e,a)):(e.backUp(1),e.match(m,!0,!1)?"number":e.match(o,!0,!1)?"number":e.match(/(?:In|Out)\[[0-9]*\]/,!0,!1)?"atom":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/,!0,!1)?"meta":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/,!0,!1)?"string-2":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/,!0,!1)?"variable-2":e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)?"variable-2":e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/,!0,!1)?"variable-2":e.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)?"variable-2":e.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/,!0,!1)?"variable-3":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/,!0,!1)?"variable-2":e.match(r,!0,!1)?"keyword":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/,!0,!1)?"operator":(e.next(),"error"))}function i(e,a){for(var t,n=!1,m=!1;null!=(t=e.next());){if('"'===t&&!m){n=!0;break}m=!m&&"\\"===t}return n&&!m&&(a.tokenize=c),"string"}function z(e,a){for(var t,n;a.commentLevel>0&&null!=(n=e.next());)"("===t&&"*"===n&&a.commentLevel++,"*"===t&&")"===n&&a.commentLevel--,t=n;return a.commentLevel<=0&&(a.tokenize=c),"comment"}return{startState:function(){return{tokenize:c,commentLevel:0}},token:function(e,a){return e.eatSpace()?null:a.tokenize(e,a)},blockCommentStart:"(*",blockCommentEnd:"*)"}}),e.defineMIME("text/x-mathematica",{name:"mathematica"})}(t("./node_modules/codemirror/lib/codemirror.js"))}}]);