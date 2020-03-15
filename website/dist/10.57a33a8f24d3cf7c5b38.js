(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/abap/abap.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/abap/abap.js ***!
  \************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var conf = {
    comments: {
        lineComment: '*',
    },
    brackets: [
        ['[', ']'],
        ['(', ')']
    ],
};
var abapKeywords = [
    'abstract', 'add', 'add-corresponding', 'adjacent', 'alias', 'aliases', 'all', 'append', 'appending', 'ascending', 'as', 'assert', 'assign', 'assigned', 'assigning', 'association', 'authority-check',
    'back', 'begin', 'binary', 'block', 'bound', 'break-point', 'by', 'byte',
    'class', 'call', 'cast', 'changing', 'check', 'class-data', 'class-method', 'class-methods', 'clear', 'close', 'cnt', 'collect', 'commit', 'cond', 'character',
    'corresponding', 'communication', 'component', 'compute', 'concatenate', 'condense', 'constants', 'conv', 'count',
    'controls', 'convert', 'create', 'currency',
    'data', 'descending', 'default', 'define', 'deferred', 'delete', 'describe', 'detail', 'display', 'divide', 'divide-corresponding', 'display-mode', 'duplicates',
    'deleting',
    'editor-call', 'end', 'endexec', 'endfunction', 'ending', 'endmodule', 'end-of-definition', 'end-of-page', 'end-of-selection', 'end-test-injection', 'end-test-seam', 'exit-command', 'endclass', 'endmethod', 'endform', 'endinterface',
    'endprovide', 'endselect', 'endtry', 'endwhile', 'enum', 'event', 'events', 'exec', 'exit', 'export',
    'exporting', 'extract', 'exception', 'exceptions',
    'field-symbols', 'field-groups', 'field', 'first', 'fetch', 'fields', 'format', 'frame', 'free', 'from', 'function', 'find', 'for', 'found', 'function-pool',
    'generate', 'get',
    'handle', 'hide', 'hashed',
    'include', 'import', 'importing', 'index', 'infotypes', 'initial', 'initialization',
    'id', 'is', 'in', 'interface', 'interfaces', 'init', 'input', 'insert', 'instance', 'into',
    'key',
    'left-justified', 'leave', 'like', 'line', 'line-count', 'line-size', 'load', 'local', 'log-point', 'length', 'left', 'leading', 'lower',
    'matchcode', 'method', 'mesh', 'message', 'message-id', 'methods', 'modify', 'module', 'move', 'move-corresponding', 'multiply', 'multiply-corresponding', 'match',
    'new', 'new-line', 'new-page', 'new-section', 'next', 'no', 'no-gap', 'no-gaps', 'no-sign', 'no-zero', 'non-unique', 'number',
    'occurrence', 'object', 'obligatory', 'of', 'output', 'overlay', 'optional', 'others', 'occurrences', 'occurs', 'offset', 'options',
    'pack', 'parameters', 'perform', 'places', 'position', 'print-control', 'private', 'program', 'protected', 'provide', 'public', 'put',
    'radiobutton', 'raising', 'ranges', 'receive', 'receiving', 'redefinition', 'reduce', 'reference', 'refresh', 'regex', 'reject', 'results', 'requested',
    'ref', 'replace', 'report', 'reserve', 'restore', 'result', 'return', 'returning', 'right-justified', 'rollback', 'read', 'read-only', 'rp-provide-from-last', 'run',
    'scan', 'screen', 'scroll', 'search', 'select', 'select-options', 'selection-screen', 'stamp', 'source', 'subkey',
    'separated', 'set', 'shift', 'single', 'skip', 'sort', 'sorted', 'split', 'standard', 'stamp', 'starting', 'start-of-selection', 'sum', 'subtract-corresponding', 'statics', 'step', 'stop', 'structure', 'submatches', 'submit', 'subtract', 'summary', 'supplied', 'suppress', 'section', 'syntax-check', 'syntax-trace', 'system-call', 'switch',
    'tables', 'table', 'task', 'testing', 'test-seam', 'test-injection', 'then', 'time', 'times', 'title', 'titlebar', 'to', 'top-of-page', 'trailing', 'transfer', 'transformation', 'translate', 'transporting', 'types', 'type', 'type-pool', 'type-pools',
    'unassign', 'unique', 'uline', 'unpack', 'update', 'upper', 'using',
    'value',
    'when', 'while', 'window', 'write', 'where', 'with', 'work',
    'at', 'case', 'catch', 'continue', 'do', 'elseif', 'else', 'endat', 'endcase', 'enddo', 'endif', 'endloop', 'endon', 'if', 'loop', 'on', 'raise', 'try',
    'abs', 'sign', 'ceil', 'floor', 'trunc', 'frac', 'acos', 'asin', 'atan', 'cos', 'sin', 'tan', 'cosh', 'sinh', 'tanh', 'exp', 'log', 'log10', 'sqrt', 'strlen', 'xstrlen', 'charlen', 'lines', 'numofchar', 'dbmaxlen', 'round', 'rescale', 'nmax', 'nmin', 'cmax', 'cmin', 'boolc', 'boolx', 'xsdbool', 'contains', 'contains_any_of', 'contains_any_not_of', 'matches', 'line_exists', 'ipow', 'char_off', 'count', 'count_any_of', 'count_any_not_of', 'distance', 'condense', 'concat_lines_of', 'escape', 'find', 'find_end', 'find_any_of', 'find_any_not_of', 'insert', 'match', 'repeat', 'replace', 'reverse', 'segment', 'shift_left', 'shift_right', 'substring', 'substring_after', 'substring_from', 'substring_before', 'substring_to', 'to_upper', 'to_lower', 'to_mixed', 'from_mixed', 'translate', 'bit-set', 'line_index',
    'definition', 'implementation', 'public', 'inheriting', 'final'
];
var language = {
    defaultToken: 'invalid',
    ignoreCase: true,
    tokenPostfix: '.abap',
    keywords: abapKeywords,
    typeKeywords: [
        'abap_bool', 'string', 'xstring', 'any', 'clike', 'csequence', 'numeric',
        'xsequence', 'c', 'n', 'i', 'p', 'f', 'd', 't', 'x'
    ],
    operators: [
        '+', '-', '/', '*',
        '=', '<', '>', '<=', '>=', '<>', '><', '=<', '=>',
        'EQ', 'NE', 'GE', 'LE',
        'CS', 'CN', 'CA', 'CO', 'CP', 'NS', 'NA', 'NP',
    ],
    symbols: /[=><!~?&+\-*\/\^%]+/,
    tokenizer: {
        root: [
            [/[a-z_$][\w$]*/, { cases: { '@typeKeywords': 'keyword',
                        '@keywords': 'keyword',
                        '@default': 'identifier' } }],
            { include: '@whitespace' },
            [/[:,.]/, 'delimiter'],
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, { cases: { '@operators': 'operator',
                        '@default': '' } }],
            [/'/, { token: 'string', bracket: '@open', next: '@stringquote' }],
            [/\|/, { token: 'string', bracket: '@open', next: '@stringtemplate' }],
            [/\d+/, 'number'],
        ],
        stringtemplate: [
            [/[^\\\|]+/, 'string'],
            [/\\\|/, 'string'],
            [/\|/, { token: 'string', bracket: '@close', next: '@pop' }]
        ],
        stringquote: [
            [/[^\\']+/, 'string'],
            [/'/, { token: 'string', bracket: '@close', next: '@pop' }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/^\*.*$/, 'comment'],
            [/\".*$/, 'comment'],
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2FiYXAvYWJhcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsU0FBUztBQUN4QztBQUNBLGtEQUFrRCxFQUFFO0FBQ3BELGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0EsaUJBQWlCO0FBQ2pCLDBCQUEwQixTQUFTO0FBQ25DLHdDQUF3QyxFQUFFO0FBQzFDLG1CQUFtQiwwREFBMEQ7QUFDN0Usb0JBQW9CLDZEQUE2RDtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1EQUFtRDtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbURBQW1EO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiIxMC41N2EzM2E4ZjI0ZDNjZjdjNWIzOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcqJyxcclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsnWycsICddJ10sXHJcbiAgICAgICAgWycoJywgJyknXVxyXG4gICAgXSxcclxufTtcclxudmFyIGFiYXBLZXl3b3JkcyA9IFtcclxuICAgICdhYnN0cmFjdCcsICdhZGQnLCAnYWRkLWNvcnJlc3BvbmRpbmcnLCAnYWRqYWNlbnQnLCAnYWxpYXMnLCAnYWxpYXNlcycsICdhbGwnLCAnYXBwZW5kJywgJ2FwcGVuZGluZycsICdhc2NlbmRpbmcnLCAnYXMnLCAnYXNzZXJ0JywgJ2Fzc2lnbicsICdhc3NpZ25lZCcsICdhc3NpZ25pbmcnLCAnYXNzb2NpYXRpb24nLCAnYXV0aG9yaXR5LWNoZWNrJyxcclxuICAgICdiYWNrJywgJ2JlZ2luJywgJ2JpbmFyeScsICdibG9jaycsICdib3VuZCcsICdicmVhay1wb2ludCcsICdieScsICdieXRlJyxcclxuICAgICdjbGFzcycsICdjYWxsJywgJ2Nhc3QnLCAnY2hhbmdpbmcnLCAnY2hlY2snLCAnY2xhc3MtZGF0YScsICdjbGFzcy1tZXRob2QnLCAnY2xhc3MtbWV0aG9kcycsICdjbGVhcicsICdjbG9zZScsICdjbnQnLCAnY29sbGVjdCcsICdjb21taXQnLCAnY29uZCcsICdjaGFyYWN0ZXInLFxyXG4gICAgJ2NvcnJlc3BvbmRpbmcnLCAnY29tbXVuaWNhdGlvbicsICdjb21wb25lbnQnLCAnY29tcHV0ZScsICdjb25jYXRlbmF0ZScsICdjb25kZW5zZScsICdjb25zdGFudHMnLCAnY29udicsICdjb3VudCcsXHJcbiAgICAnY29udHJvbHMnLCAnY29udmVydCcsICdjcmVhdGUnLCAnY3VycmVuY3knLFxyXG4gICAgJ2RhdGEnLCAnZGVzY2VuZGluZycsICdkZWZhdWx0JywgJ2RlZmluZScsICdkZWZlcnJlZCcsICdkZWxldGUnLCAnZGVzY3JpYmUnLCAnZGV0YWlsJywgJ2Rpc3BsYXknLCAnZGl2aWRlJywgJ2RpdmlkZS1jb3JyZXNwb25kaW5nJywgJ2Rpc3BsYXktbW9kZScsICdkdXBsaWNhdGVzJyxcclxuICAgICdkZWxldGluZycsXHJcbiAgICAnZWRpdG9yLWNhbGwnLCAnZW5kJywgJ2VuZGV4ZWMnLCAnZW5kZnVuY3Rpb24nLCAnZW5kaW5nJywgJ2VuZG1vZHVsZScsICdlbmQtb2YtZGVmaW5pdGlvbicsICdlbmQtb2YtcGFnZScsICdlbmQtb2Ytc2VsZWN0aW9uJywgJ2VuZC10ZXN0LWluamVjdGlvbicsICdlbmQtdGVzdC1zZWFtJywgJ2V4aXQtY29tbWFuZCcsICdlbmRjbGFzcycsICdlbmRtZXRob2QnLCAnZW5kZm9ybScsICdlbmRpbnRlcmZhY2UnLFxyXG4gICAgJ2VuZHByb3ZpZGUnLCAnZW5kc2VsZWN0JywgJ2VuZHRyeScsICdlbmR3aGlsZScsICdlbnVtJywgJ2V2ZW50JywgJ2V2ZW50cycsICdleGVjJywgJ2V4aXQnLCAnZXhwb3J0JyxcclxuICAgICdleHBvcnRpbmcnLCAnZXh0cmFjdCcsICdleGNlcHRpb24nLCAnZXhjZXB0aW9ucycsXHJcbiAgICAnZmllbGQtc3ltYm9scycsICdmaWVsZC1ncm91cHMnLCAnZmllbGQnLCAnZmlyc3QnLCAnZmV0Y2gnLCAnZmllbGRzJywgJ2Zvcm1hdCcsICdmcmFtZScsICdmcmVlJywgJ2Zyb20nLCAnZnVuY3Rpb24nLCAnZmluZCcsICdmb3InLCAnZm91bmQnLCAnZnVuY3Rpb24tcG9vbCcsXHJcbiAgICAnZ2VuZXJhdGUnLCAnZ2V0JyxcclxuICAgICdoYW5kbGUnLCAnaGlkZScsICdoYXNoZWQnLFxyXG4gICAgJ2luY2x1ZGUnLCAnaW1wb3J0JywgJ2ltcG9ydGluZycsICdpbmRleCcsICdpbmZvdHlwZXMnLCAnaW5pdGlhbCcsICdpbml0aWFsaXphdGlvbicsXHJcbiAgICAnaWQnLCAnaXMnLCAnaW4nLCAnaW50ZXJmYWNlJywgJ2ludGVyZmFjZXMnLCAnaW5pdCcsICdpbnB1dCcsICdpbnNlcnQnLCAnaW5zdGFuY2UnLCAnaW50bycsXHJcbiAgICAna2V5JyxcclxuICAgICdsZWZ0LWp1c3RpZmllZCcsICdsZWF2ZScsICdsaWtlJywgJ2xpbmUnLCAnbGluZS1jb3VudCcsICdsaW5lLXNpemUnLCAnbG9hZCcsICdsb2NhbCcsICdsb2ctcG9pbnQnLCAnbGVuZ3RoJywgJ2xlZnQnLCAnbGVhZGluZycsICdsb3dlcicsXHJcbiAgICAnbWF0Y2hjb2RlJywgJ21ldGhvZCcsICdtZXNoJywgJ21lc3NhZ2UnLCAnbWVzc2FnZS1pZCcsICdtZXRob2RzJywgJ21vZGlmeScsICdtb2R1bGUnLCAnbW92ZScsICdtb3ZlLWNvcnJlc3BvbmRpbmcnLCAnbXVsdGlwbHknLCAnbXVsdGlwbHktY29ycmVzcG9uZGluZycsICdtYXRjaCcsXHJcbiAgICAnbmV3JywgJ25ldy1saW5lJywgJ25ldy1wYWdlJywgJ25ldy1zZWN0aW9uJywgJ25leHQnLCAnbm8nLCAnbm8tZ2FwJywgJ25vLWdhcHMnLCAnbm8tc2lnbicsICduby16ZXJvJywgJ25vbi11bmlxdWUnLCAnbnVtYmVyJyxcclxuICAgICdvY2N1cnJlbmNlJywgJ29iamVjdCcsICdvYmxpZ2F0b3J5JywgJ29mJywgJ291dHB1dCcsICdvdmVybGF5JywgJ29wdGlvbmFsJywgJ290aGVycycsICdvY2N1cnJlbmNlcycsICdvY2N1cnMnLCAnb2Zmc2V0JywgJ29wdGlvbnMnLFxyXG4gICAgJ3BhY2snLCAncGFyYW1ldGVycycsICdwZXJmb3JtJywgJ3BsYWNlcycsICdwb3NpdGlvbicsICdwcmludC1jb250cm9sJywgJ3ByaXZhdGUnLCAncHJvZ3JhbScsICdwcm90ZWN0ZWQnLCAncHJvdmlkZScsICdwdWJsaWMnLCAncHV0JyxcclxuICAgICdyYWRpb2J1dHRvbicsICdyYWlzaW5nJywgJ3JhbmdlcycsICdyZWNlaXZlJywgJ3JlY2VpdmluZycsICdyZWRlZmluaXRpb24nLCAncmVkdWNlJywgJ3JlZmVyZW5jZScsICdyZWZyZXNoJywgJ3JlZ2V4JywgJ3JlamVjdCcsICdyZXN1bHRzJywgJ3JlcXVlc3RlZCcsXHJcbiAgICAncmVmJywgJ3JlcGxhY2UnLCAncmVwb3J0JywgJ3Jlc2VydmUnLCAncmVzdG9yZScsICdyZXN1bHQnLCAncmV0dXJuJywgJ3JldHVybmluZycsICdyaWdodC1qdXN0aWZpZWQnLCAncm9sbGJhY2snLCAncmVhZCcsICdyZWFkLW9ubHknLCAncnAtcHJvdmlkZS1mcm9tLWxhc3QnLCAncnVuJyxcclxuICAgICdzY2FuJywgJ3NjcmVlbicsICdzY3JvbGwnLCAnc2VhcmNoJywgJ3NlbGVjdCcsICdzZWxlY3Qtb3B0aW9ucycsICdzZWxlY3Rpb24tc2NyZWVuJywgJ3N0YW1wJywgJ3NvdXJjZScsICdzdWJrZXknLFxyXG4gICAgJ3NlcGFyYXRlZCcsICdzZXQnLCAnc2hpZnQnLCAnc2luZ2xlJywgJ3NraXAnLCAnc29ydCcsICdzb3J0ZWQnLCAnc3BsaXQnLCAnc3RhbmRhcmQnLCAnc3RhbXAnLCAnc3RhcnRpbmcnLCAnc3RhcnQtb2Ytc2VsZWN0aW9uJywgJ3N1bScsICdzdWJ0cmFjdC1jb3JyZXNwb25kaW5nJywgJ3N0YXRpY3MnLCAnc3RlcCcsICdzdG9wJywgJ3N0cnVjdHVyZScsICdzdWJtYXRjaGVzJywgJ3N1Ym1pdCcsICdzdWJ0cmFjdCcsICdzdW1tYXJ5JywgJ3N1cHBsaWVkJywgJ3N1cHByZXNzJywgJ3NlY3Rpb24nLCAnc3ludGF4LWNoZWNrJywgJ3N5bnRheC10cmFjZScsICdzeXN0ZW0tY2FsbCcsICdzd2l0Y2gnLFxyXG4gICAgJ3RhYmxlcycsICd0YWJsZScsICd0YXNrJywgJ3Rlc3RpbmcnLCAndGVzdC1zZWFtJywgJ3Rlc3QtaW5qZWN0aW9uJywgJ3RoZW4nLCAndGltZScsICd0aW1lcycsICd0aXRsZScsICd0aXRsZWJhcicsICd0bycsICd0b3Atb2YtcGFnZScsICd0cmFpbGluZycsICd0cmFuc2ZlcicsICd0cmFuc2Zvcm1hdGlvbicsICd0cmFuc2xhdGUnLCAndHJhbnNwb3J0aW5nJywgJ3R5cGVzJywgJ3R5cGUnLCAndHlwZS1wb29sJywgJ3R5cGUtcG9vbHMnLFxyXG4gICAgJ3VuYXNzaWduJywgJ3VuaXF1ZScsICd1bGluZScsICd1bnBhY2snLCAndXBkYXRlJywgJ3VwcGVyJywgJ3VzaW5nJyxcclxuICAgICd2YWx1ZScsXHJcbiAgICAnd2hlbicsICd3aGlsZScsICd3aW5kb3cnLCAnd3JpdGUnLCAnd2hlcmUnLCAnd2l0aCcsICd3b3JrJyxcclxuICAgICdhdCcsICdjYXNlJywgJ2NhdGNoJywgJ2NvbnRpbnVlJywgJ2RvJywgJ2Vsc2VpZicsICdlbHNlJywgJ2VuZGF0JywgJ2VuZGNhc2UnLCAnZW5kZG8nLCAnZW5kaWYnLCAnZW5kbG9vcCcsICdlbmRvbicsICdpZicsICdsb29wJywgJ29uJywgJ3JhaXNlJywgJ3RyeScsXHJcbiAgICAnYWJzJywgJ3NpZ24nLCAnY2VpbCcsICdmbG9vcicsICd0cnVuYycsICdmcmFjJywgJ2Fjb3MnLCAnYXNpbicsICdhdGFuJywgJ2NvcycsICdzaW4nLCAndGFuJywgJ2Nvc2gnLCAnc2luaCcsICd0YW5oJywgJ2V4cCcsICdsb2cnLCAnbG9nMTAnLCAnc3FydCcsICdzdHJsZW4nLCAneHN0cmxlbicsICdjaGFybGVuJywgJ2xpbmVzJywgJ251bW9mY2hhcicsICdkYm1heGxlbicsICdyb3VuZCcsICdyZXNjYWxlJywgJ25tYXgnLCAnbm1pbicsICdjbWF4JywgJ2NtaW4nLCAnYm9vbGMnLCAnYm9vbHgnLCAneHNkYm9vbCcsICdjb250YWlucycsICdjb250YWluc19hbnlfb2YnLCAnY29udGFpbnNfYW55X25vdF9vZicsICdtYXRjaGVzJywgJ2xpbmVfZXhpc3RzJywgJ2lwb3cnLCAnY2hhcl9vZmYnLCAnY291bnQnLCAnY291bnRfYW55X29mJywgJ2NvdW50X2FueV9ub3Rfb2YnLCAnZGlzdGFuY2UnLCAnY29uZGVuc2UnLCAnY29uY2F0X2xpbmVzX29mJywgJ2VzY2FwZScsICdmaW5kJywgJ2ZpbmRfZW5kJywgJ2ZpbmRfYW55X29mJywgJ2ZpbmRfYW55X25vdF9vZicsICdpbnNlcnQnLCAnbWF0Y2gnLCAncmVwZWF0JywgJ3JlcGxhY2UnLCAncmV2ZXJzZScsICdzZWdtZW50JywgJ3NoaWZ0X2xlZnQnLCAnc2hpZnRfcmlnaHQnLCAnc3Vic3RyaW5nJywgJ3N1YnN0cmluZ19hZnRlcicsICdzdWJzdHJpbmdfZnJvbScsICdzdWJzdHJpbmdfYmVmb3JlJywgJ3N1YnN0cmluZ190bycsICd0b191cHBlcicsICd0b19sb3dlcicsICd0b19taXhlZCcsICdmcm9tX21peGVkJywgJ3RyYW5zbGF0ZScsICdiaXQtc2V0JywgJ2xpbmVfaW5kZXgnLFxyXG4gICAgJ2RlZmluaXRpb24nLCAnaW1wbGVtZW50YXRpb24nLCAncHVibGljJywgJ2luaGVyaXRpbmcnLCAnZmluYWwnXHJcbl07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICdpbnZhbGlkJyxcclxuICAgIGlnbm9yZUNhc2U6IHRydWUsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcuYWJhcCcsXHJcbiAgICBrZXl3b3JkczogYWJhcEtleXdvcmRzLFxyXG4gICAgdHlwZUtleXdvcmRzOiBbXHJcbiAgICAgICAgJ2FiYXBfYm9vbCcsICdzdHJpbmcnLCAneHN0cmluZycsICdhbnknLCAnY2xpa2UnLCAnY3NlcXVlbmNlJywgJ251bWVyaWMnLFxyXG4gICAgICAgICd4c2VxdWVuY2UnLCAnYycsICduJywgJ2knLCAncCcsICdmJywgJ2QnLCAndCcsICd4J1xyXG4gICAgXSxcclxuICAgIG9wZXJhdG9yczogW1xyXG4gICAgICAgICcrJywgJy0nLCAnLycsICcqJyxcclxuICAgICAgICAnPScsICc8JywgJz4nLCAnPD0nLCAnPj0nLCAnPD4nLCAnPjwnLCAnPTwnLCAnPT4nLFxyXG4gICAgICAgICdFUScsICdORScsICdHRScsICdMRScsXHJcbiAgICAgICAgJ0NTJywgJ0NOJywgJ0NBJywgJ0NPJywgJ0NQJywgJ05TJywgJ05BJywgJ05QJyxcclxuICAgIF0sXHJcbiAgICBzeW1ib2xzOiAvWz0+PCF+PyYrXFwtKlxcL1xcXiVdKy8sXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIFsvW2Etel8kXVtcXHckXSovLCB7IGNhc2VzOiB7ICdAdHlwZUtleXdvcmRzJzogJ2tleXdvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcicgfSB9XSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXHJcbiAgICAgICAgICAgIFsvWzosLl0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbL0BzeW1ib2xzLywgeyBjYXNlczogeyAnQG9wZXJhdG9ycyc6ICdvcGVyYXRvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnIH0gfV0sXHJcbiAgICAgICAgICAgIFsvJy8sIHsgdG9rZW46ICdzdHJpbmcnLCBicmFja2V0OiAnQG9wZW4nLCBuZXh0OiAnQHN0cmluZ3F1b3RlJyB9XSxcclxuICAgICAgICAgICAgWy9cXHwvLCB7IHRva2VuOiAnc3RyaW5nJywgYnJhY2tldDogJ0BvcGVuJywgbmV4dDogJ0BzdHJpbmd0ZW1wbGF0ZScgfV0sXHJcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ3RlbXBsYXRlOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcXFx8XSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXFxcfC8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9cXHwvLCB7IHRva2VuOiAnc3RyaW5nJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5ncXVvdGU6IFtcclxuICAgICAgICAgICAgWy9bXlxcXFwnXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvJy8sIHsgdG9rZW46ICdzdHJpbmcnLCBicmFja2V0OiAnQGNsb3NlJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICB3aGl0ZXNwYWNlOiBbXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcclxuICAgICAgICAgICAgWy9eXFwqLiokLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXFwiLiokLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==