(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"./node_modules/code-example/lib/gas.js":function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default='.syntax unified\n.global main\n\n/* \n *  A\n *  multi-line\n *  comment.\n */\n\n@ A single line comment.\n\nmain:\n        push    {sp, lr}\n        ldr     r0, =message\n        bl      puts\n        mov     r0, #0\n        pop     {sp, pc}\n\nmessage:\n        .asciz "Hello world!<br />"\n\n'}}]);