(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[220],{265:function(e,n){!function(e){function n(e){return RegExp("(\\()"+e+"(?=[\\s\\)])")}function a(e){return RegExp("([\\s([])"+e+"(?=[\\s)])")}var t="[-+*/_~!@$%^=<>{}\\w]+",r="(\\()",i={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+t+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+t),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+t),alias:"property"},splice:{pattern:RegExp(",@?"+t),alias:["symbol","variable"]},keyword:[{pattern:RegExp(r+"(?:(?:lexical-)?let\\*?|(?:cl-)?letf|if|when|while|unless|cons|cl-loop|and|or|not|cond|setq|error|message|null|require|provide|use-package)(?=\\s)"),lookbehind:!0},{pattern:RegExp(r+"(?:for|do|collect|return|finally|append|concat|in|by)(?=\\s)"),lookbehind:!0}],declare:{pattern:n("declare"),lookbehind:!0,alias:"keyword"},interactive:{pattern:n("interactive"),lookbehind:!0,alias:"keyword"},boolean:{pattern:a("(?:t|nil)"),lookbehind:!0},number:{pattern:a("[-+]?\\d+(?:\\.\\d*)?"),lookbehind:!0},defvar:{pattern:RegExp(r+"def(?:var|const|custom|group)\\s+"+t),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(t)}},defun:{pattern:RegExp(r+"(?:cl-)?(?:defun\\*?|defmacro)\\s+"+t+"\\s+\\([\\s\\S]*?\\)"),lookbehind:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+t),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp(r+"lambda\\s+\\((?:&?"+t+"\\s*)*\\)"),lookbehind:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(r+t),lookbehind:!0},punctuation:[/(?:['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},s={"lisp-marker":RegExp("&[-+*/_~!@$%^=<>{}\\w]+"),rest:{argument:{pattern:RegExp(t),alias:"variable"},varform:{pattern:RegExp(r+t+"\\s+\\S[\\s\\S]*(?=\\))"),lookbehind:!0,inside:{string:i.string,boolean:i.boolean,number:i.number,symbol:i.symbol,punctuation:/[()]/}}}},o="\\S+(?:\\s+\\S+)*",l={pattern:RegExp(r+"[\\s\\S]*(?=\\))"),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:rest|body)\\s+"+o),inside:s},"other-marker-vars":{pattern:RegExp("&(?:optional|aux)\\s+"+o),inside:s},keys:{pattern:RegExp("&key\\s+"+o+"(?:\\s+&allow-other-keys)?"),inside:s},argument:{pattern:RegExp(t),alias:"variable"},punctuation:/[()]/}};i.lambda.inside.arguments=l,i.defun.inside.arguments=e.util.clone(l),i.defun.inside.arguments.inside.sublist=l,e.languages.lisp=i,e.languages.elisp=i,e.languages.emacs=i,e.languages["emacs-lisp"]=i}(Prism)}}]);
//# sourceMappingURL=220.8d0d91fb.chunk.js.map