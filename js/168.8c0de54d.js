(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{"./node_modules/codemirror/mode/erlang/erlang.js":function(e,t,n){!function(e){"use strict";e.defineMIME("text/x-erlang","erlang"),e.defineMode("erlang",function(t){var n=["-type","-spec","-export_type","-opaque"],r=["after","begin","catch","case","cond","end","fun","if","let","of","query","receive","try","when"],i=/[\->,;]/,o=["->",";",","],a=["and","andalso","band","bnot","bor","bsl","bsr","bxor","div","not","or","orelse","rem","xor"],c=/[\+\-\*\/<>=\|:!]/,u=["=","+","-","*","/",">",">=","<","=<","=:=","==","=/=","/=","||","<-","!"],s=/[<\(\[\{]/,l=["<<","(","[","{"],_=/[>\)\]\}]/,f=["}","]",")",">>"],p=["is_atom","is_binary","is_bitstring","is_boolean","is_float","is_function","is_integer","is_list","is_number","is_pid","is_port","is_record","is_reference","is_tuple","atom","binary","bitstring","boolean","function","integer","list","number","pid","port","record","reference","tuple"],m=["abs","adler32","adler32_combine","alive","apply","atom_to_binary","atom_to_list","binary_to_atom","binary_to_existing_atom","binary_to_list","binary_to_term","bit_size","bitstring_to_list","byte_size","check_process_code","contact_binary","crc32","crc32_combine","date","decode_packet","delete_module","disconnect_node","element","erase","exit","float","float_to_list","garbage_collect","get","get_keys","group_leader","halt","hd","integer_to_list","internal_bif","iolist_size","iolist_to_binary","is_alive","is_atom","is_binary","is_bitstring","is_boolean","is_float","is_function","is_integer","is_list","is_number","is_pid","is_port","is_process_alive","is_record","is_reference","is_tuple","length","link","list_to_atom","list_to_binary","list_to_bitstring","list_to_existing_atom","list_to_float","list_to_integer","list_to_pid","list_to_tuple","load_module","make_ref","module_loaded","monitor_node","node","node_link","node_unlink","nodes","notalive","now","open_port","pid_to_list","port_close","port_command","port_connect","port_control","pre_loaded","process_flag","process_info","processes","purge_module","put","register","registered","round","self","setelement","size","spawn","spawn_link","spawn_monitor","spawn_opt","split_binary","statistics","term_to_binary","time","throw","tl","trunc","tuple_size","tuple_to_list","unlink","unregister","whereis"],d=/[\w@Ø-ÞÀ-Öß-öø-ÿ]/,b=/[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;function g(e,t,n){if(1==e.current().length&&t.test(e.current())){for(e.backUp(1);t.test(e.peek());)if(e.next(),w(e.current(),n))return!0;e.backUp(e.current().length-1)}return!1}function k(e,t,n){if(1==e.current().length&&t.test(e.current())){for(;t.test(e.peek());)e.next();for(;0<e.current().length;){if(w(e.current(),n))return!0;e.backUp(1)}e.next()}return!1}function h(e){return v(e,'"',"\\")}function y(e){return v(e,"'","\\")}function v(e,t,n){for(;!e.eol();){var r=e.next();if(r==t)return!0;r==n&&e.next()}return!1}function w(e,t){return-1<t.indexOf(e)}function x(e,t,n){switch(function(e,t){"comment"!=t.type&&"whitespace"!=t.type&&(e.tokenStack=function(e,t){var n=e.length-1;return 0<n&&"record"===e[n].type&&"dot"===t.type?e.pop():0<n&&"group"===e[n].type?(e.pop(),e.push(t)):e.push(t),e}(e.tokenStack,t),e.tokenStack=function(e){if(!e.length)return e;var t=e.length-1;if("dot"===e[t].type)return[];if(t>1&&"fun"===e[t].type&&"fun"===e[t-1].token)return e.slice(0,t-1);switch(e[t].token){case"}":return U(e,{g:["{"]});case"]":return U(e,{i:["["]});case")":return U(e,{i:["("]});case">>":return U(e,{i:["<<"]});case"end":return U(e,{i:["begin","case","fun","if","receive","try"]});case",":return U(e,{e:["begin","try","when","->",",","(","[","{","<<"]});case"->":return U(e,{r:["when"],m:["try","if","case","receive"]});case";":return U(e,{E:["case","fun","if","receive","try","when"]});case"catch":return U(e,{e:["try"]});case"of":return U(e,{e:["case"]});case"after":return U(e,{e:["receive","try"]});default:return e}}(e.tokenStack))}(e,function(e,t){return S(t.current(),t.column(),t.indentation(),e)}(n,t)),n){case"atom":return"atom";case"attribute":return"attribute";case"boolean":return"atom";case"builtin":return"builtin";case"close_paren":case"colon":return null;case"comment":return"comment";case"dot":return null;case"error":return"error";case"fun":return"meta";case"function":return"tag";case"guard":return"property";case"keyword":return"keyword";case"macro":return"variable-2";case"number":return"number";case"open_paren":return null;case"operator":return"operator";case"record":return"bracket";case"separator":return null;case"string":return"string";case"type":return"def";case"variable":return"variable";default:return null}}function S(e,t,n,r){return{token:e,column:t,indent:n,type:r}}function z(e){return S(e,0,0,e)}function W(e,t){var n=e.tokenStack.length,r=t||1;return!(n<r)&&e.tokenStack[n-r]}function U(e,t){for(var n in t)for(var r=e.length-1,i=t[n],o=r-1;-1<o;o--)if(w(e[o].token,i)){var a=e.slice(0,o);switch(n){case"m":return a.concat(e[o]).concat(e[r]);case"r":return a.concat(e[r]);case"i":return a;case"g":return a.concat(z("group"));case"E":case"e":return a.concat(e[o])}}return"E"==n?[]:e}function E(n,r){var i,o=t.indentUnit,a=function(e){var t=e.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/);return M(t)&&0===t.index?t[0]:""}(r),c=W(n,1),u=W(n,2);return n.in_string||n.in_atom?e.Pass:u?"when"==c.token?c.column+o:"when"===a&&"function"===u.type?u.indent+o:"("===a&&"fun"===c.token?c.column+3:"catch"===a&&(i=A(n,["try"]))?i.column:w(a,["end","after","of"])?(i=A(n,["begin","case","fun","if","receive","try"]))?i.column:e.Pass:w(a,f)?(i=A(n,l))?i.column:e.Pass:w(c.token,[",","|","||"])||w(a,[",","|","||"])?(i=function(e){var t=e.tokenStack.slice(0,-1),n=Z(t,"type",["open_paren"]);return!!M(t[n])&&t[n]}(n))?i.column+i.token.length:o:"->"==c.token?w(u.token,["receive","case","if","try"])?u.column+o+o:u.column+o:w(c.token,l)?c.column+c.token.length:M(i=function(e){var t=e.tokenStack,n=Z(t,"type",["open_paren","separator","keyword"]),r=Z(t,"type",["operator"]);return M(n)&&M(r)&&n<r?t[n+1]:!!M(n)&&t[n]}(n))?i.column+o:0:0}function A(e,t){var n=e.tokenStack,r=Z(n,"token",t);return!!M(n[r])&&n[r]}function Z(e,t,n){for(var r=e.length-1;-1<r;r--)if(w(e[r][t],n))return r;return!1}function M(e){return!1!==e&&null!=e}return{startState:function(){return{tokenStack:[],in_string:!1,in_atom:!1}},token:function(e,t){return function(e,t){if(t.in_string)return t.in_string=!h(e),x(t,e,"string");if(t.in_atom)return t.in_atom=!y(e),x(t,e,"atom");if(e.eatSpace())return x(t,e,"whitespace");if(!W(t)&&e.match(/-\s*[a-zß-öø-ÿ][\wØ-ÞÀ-Öß-öø-ÿ]*/))return w(e.current(),n)?x(t,e,"type"):x(t,e,"attribute");var v=e.next();if("%"==v)return e.skipToEnd(),x(t,e,"comment");if(":"==v)return x(t,e,"colon");if("?"==v)return e.eatSpace(),e.eatWhile(d),x(t,e,"macro");if("#"==v)return e.eatSpace(),e.eatWhile(d),x(t,e,"record");if("$"==v)return"\\"!=e.next()||e.match(b)?x(t,e,"number"):x(t,e,"error");if("."==v)return x(t,e,"dot");if("'"==v){if(!(t.in_atom=!y(e))){if(e.match(/\s*\/\s*[0-9]/,!1))return e.match(/\s*\/\s*[0-9]/,!0),x(t,e,"fun");if(e.match(/\s*\(/,!1)||e.match(/\s*:/,!1))return x(t,e,"function")}return x(t,e,"atom")}if('"'==v)return t.in_string=!h(e),x(t,e,"string");if(/[A-Z_Ø-ÞÀ-Ö]/.test(v))return e.eatWhile(d),x(t,e,"variable");if(/[a-z_ß-öø-ÿ]/.test(v)){if(e.eatWhile(d),e.match(/\s*\/\s*[0-9]/,!1))return e.match(/\s*\/\s*[0-9]/,!0),x(t,e,"fun");var S=e.current();return w(S,r)?x(t,e,"keyword"):w(S,a)?x(t,e,"operator"):e.match(/\s*\(/,!1)?!w(S,m)||":"==W(t).token&&"erlang"!=W(t,2).token?w(S,p)?x(t,e,"guard"):x(t,e,"function"):x(t,e,"builtin"):":"==function(e){var t=e.match(/([\n\s]+|%[^\n]*\n)*(.)/,!1);return t?t.pop():""}(e)?x(t,e,"erlang"==S?"builtin":"function"):w(S,["true","false"])?x(t,e,"boolean"):x(t,e,"atom")}var z=/[0-9]/;return z.test(v)?(e.eatWhile(z),e.eat("#")?e.eatWhile(/[0-9a-zA-Z]/)||e.backUp(1):e.eat(".")&&(e.eatWhile(z)?e.eat(/[eE]/)&&(e.eat(/[-+]/)?e.eatWhile(z)||e.backUp(2):e.eatWhile(z)||e.backUp(1)):e.backUp(1)),x(t,e,"number")):g(e,s,l)?x(t,e,"open_paren"):g(e,_,f)?x(t,e,"close_paren"):k(e,i,o)?x(t,e,"separator"):k(e,c,u)?x(t,e,"operator"):x(t,e,null)}(e,t)},indent:function(e,t){return E(e,t)},lineComment:"%"}})}(n("./node_modules/codemirror/lib/codemirror.js"))}}]);