(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[586],{661:function(e,t,a){!function(e){"use strict";e.defineMode("ebnf",(function(t){var a=0,c=1,r=0,n=1,s=2,i=null;return t.bracesMode&&(i=e.getMode(t,t.bracesMode)),{startState:function(){return{stringType:null,commentType:null,braced:0,lhs:!0,localState:null,stack:[],inDefinition:!1}},token:function(t,o){if(t){switch(0===o.stack.length&&('"'==t.peek()||"'"==t.peek()?(o.stringType=t.peek(),t.next(),o.stack.unshift(n)):t.match(/^\/\*/)?(o.stack.unshift(r),o.commentType=a):t.match(/^\(\*/)&&(o.stack.unshift(r),o.commentType=c)),o.stack[0]){case n:for(;o.stack[0]===n&&!t.eol();)t.peek()===o.stringType?(t.next(),o.stack.shift()):"\\"===t.peek()?(t.next(),t.next()):t.match(/^.[^\\\"\']*/);return o.lhs?"property string":"string";case r:for(;o.stack[0]===r&&!t.eol();)o.commentType===a&&t.match(/\*\//)||o.commentType===c&&t.match(/\*\)/)?(o.stack.shift(),o.commentType=null):t.match(/^.[^\*]*/);return"comment";case s:for(;o.stack[0]===s&&!t.eol();)t.match(/^[^\]\\]+/)||t.match(/^\\./)||o.stack.shift();return"operator"}var m=t.peek();if(null!==i&&(o.braced||"{"===m)){null===o.localState&&(o.localState=e.startState(i));var u=i.token(t,o.localState),h=t.current();if(!u)for(var f=0;f<h.length;f++)"{"===h[f]?(0===o.braced&&(u="matchingbracket"),o.braced++):"}"===h[f]&&(o.braced--,0===o.braced&&(u="matchingbracket"));return u}switch(m){case"[":return t.next(),o.stack.unshift(s),"bracket";case":":case"|":case";":return t.next(),"operator";case"%":if(t.match("%%"))return"header";if(t.match(/[%][A-Za-z]+/))return"keyword";if(t.match(/[%][}]/))return"matchingbracket";break;case"/":if(t.match(/[\/][A-Za-z]+/))return"keyword";case"\\":if(t.match(/[\][a-z]+/))return"string-2";case".":if(t.match("."))return"atom";case"*":case"-":case"+":case"^":if(t.match(m))return"atom";case"$":if(t.match("$$"))return"builtin";if(t.match(/[$][0-9]+/))return"variable-3";case"<":if(t.match(/<<[a-zA-Z_]+>>/))return"builtin"}return t.match(/^\/\//)?(t.skipToEnd(),"comment"):t.match(/return/)?"operator":t.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)?t.match(/(?=[\(.])/)?"variable":t.match(/(?=[\s\n]*[:=])/)?"def":"variable-2":-1!=["[","]","(",")"].indexOf(t.peek())?(t.next(),"bracket"):(t.eatSpace()||t.next(),null)}}}})),e.defineMIME("text/x-ebnf","ebnf")}(a(9))}}]);
//# sourceMappingURL=586.479a1657.chunk.js.map