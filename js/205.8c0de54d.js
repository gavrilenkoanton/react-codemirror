(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{"./node_modules/codemirror/mode/r/r.js":function(e,t,n){!function(e){"use strict";e.registerHelper("wordChars","r",/[\w.]/),e.defineMode("r",function(t){function n(e){for(var t={},n=0;n<e.length;++n)t[e[n]]=!0;return t}var r=["NULL","NA","Inf","NaN","NA_integer_","NA_real_","NA_complex_","NA_character_","TRUE","FALSE"],i=["list","quote","bquote","eval","return","call","parse","deparse"],a=["if","else","repeat","while","function","for","in","next","break"];e.registerHelper("hintWords","r",r.concat(i,a));var o,c=n(r),l=n(i),u=n(a),f=n(["if","else","repeat","while","function","for"]),s=/[+\-*\/^<>=!&|~$:]/;function d(e,t){o=null;var n=e.next();if("#"==n)return e.skipToEnd(),"comment";if("0"==n&&e.eat("x"))return e.eatWhile(/[\da-f]/i),"number";if("."==n&&e.eat(/\d/))return e.match(/\d*(?:e[+\-]?\d+)?/),"number";if(/\d/.test(n))return e.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),"number";if("'"==n||'"'==n)return t.tokenize=function(e){return function(t,n){if(t.eat("\\")){var r=t.next();return"x"==r?t.match(/^[a-f0-9]{2}/i):("u"==r||"U"==r)&&t.eat("{")&&t.skipTo("}")?t.next():"u"==r?t.match(/^[a-f0-9]{4}/i):"U"==r?t.match(/^[a-f0-9]{8}/i):/[0-7]/.test(r)&&t.match(/^[0-7]{1,2}/),"string-2"}for(var i;null!=(i=t.next());){if(i==e){n.tokenize=d;break}if("\\"==i){t.backUp(1);break}}return"string"}}(n),"string";if("`"==n)return e.match(/[^`]+`/),"variable-3";if("."==n&&e.match(/.[.\d]+/))return"keyword";if(/[\w\.]/.test(n)&&"_"!=n){e.eatWhile(/[\w\.]/);var r=e.current();return c.propertyIsEnumerable(r)?"atom":u.propertyIsEnumerable(r)?(f.propertyIsEnumerable(r)&&!e.match(/\s*if(\s+|$)/,!1)&&(o="block"),"keyword"):l.propertyIsEnumerable(r)?"builtin":"variable"}return"%"==n?(e.skipTo("%")&&e.next(),"operator variable-2"):"<"==n&&e.eat("-")||"<"==n&&e.match("<-")||"-"==n&&e.match(/>>?/)?"operator arrow":"="==n&&t.ctx.argList?"arg-is":s.test(n)?"$"==n?"operator dollar":(e.eatWhile(s),"operator"):/[\(\){}\[\];]/.test(n)?(o=n,";"==n?"semi":null):null}function p(e,t,n){e.ctx={type:t,indent:e.indent,flags:0,column:n.column(),prev:e.ctx}}function m(e,t){var n=e.ctx;e.ctx={type:n.type,indent:n.indent,flags:n.flags|t,column:n.column,prev:n.prev}}function x(e){e.indent=e.ctx.indent,e.ctx=e.ctx.prev}return{startState:function(){return{tokenize:d,ctx:{type:"top",indent:-t.indentUnit,flags:2},indent:0,afterIdent:!1}},token:function(e,t){if(e.sol()&&(0==(3&t.ctx.flags)&&(t.ctx.flags|=2),4&t.ctx.flags&&x(t),t.indent=e.indentation()),e.eatSpace())return null;var n=t.tokenize(e,t);return"comment"!=n&&0==(2&t.ctx.flags)&&m(t,1),";"!=o&&"{"!=o&&"}"!=o||"block"!=t.ctx.type||x(t),"{"==o?p(t,"}",e):"("==o?(p(t,")",e),t.afterIdent&&(t.ctx.argList=!0)):"["==o?p(t,"]",e):"block"==o?p(t,"block",e):o==t.ctx.type?x(t):"block"==t.ctx.type&&"comment"!=n&&m(t,4),t.afterIdent="variable"==n||"keyword"==n,n},indent:function(e,n){if(e.tokenize!=d)return 0;var r=n&&n.charAt(0),i=e.ctx,a=r==i.type;return 4&i.flags&&(i=i.prev),"block"==i.type?i.indent+("{"==r?0:t.indentUnit):1&i.flags?i.column+(a?0:1):i.indent+(a?0:t.indentUnit)},lineComment:"#"}}),e.defineMIME("text/x-rsrc","r")}(n("./node_modules/codemirror/lib/codemirror.js"))}}]);