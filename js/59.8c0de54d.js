(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"./node_modules/code-example/lib/handlebars.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default="{{> breadcrumbs}}\n{{!--\n  You can use the t function to get\n  content translated to the current locale, es:\n  {{t 'article_list'}}\n--}}\n\n<h1>{{t 'article_list'}}</h1>\n\n{{! one line comment }}\n\n{{#each articles}}\n  {{~title}}\n  <p>{{excerpt body size=120 ellipsis=true}}</p>\n\n  {{#with author}}\n    written by {{first_name}} {{last_name}}\n    from category: {{../category.title}}\n    {{#if @../last}}foobar!{{/if}}\n  {{/with~}}\n\n  {{#if promoted.latest}}Read this one! {{else}} This is ok! {{/if}}\n\n  {{#if @last}}<hr>{{/if}}\n{{/each}}\n\n{{#form new_comment}}\n  <input type=\"text\" name=\"body\">\n{{/form}}\n"}}]);