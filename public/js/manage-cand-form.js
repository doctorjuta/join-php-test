!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=42)}({0:function(e,t,n){"use strict";function a(e,t){var n=document.getElementById("alert-section");if(n){var a='\n        <div class="mt-3 alert '.concat(t,'" role="alert">\n            ').concat(e,'\n            <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n                <span aria-hidden="true">&times;</span>\n            </button>\n        </div>\n    ');n.innerHTML+=a}}function r(){document.body.classList.add("is-loading")}function o(){document.body.classList.remove("is-loading")}n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},42:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var a=n(0);function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.initRemoveInput(),this.initChangeStateInput()}var t,n,o;return t=e,(n=[{key:"initRemoveInput",value:function(){for(var e=document.getElementsByClassName("candidate-remove"),t=0;t<e.length;t++)e[t].addEventListener("click",(function(e){var t=parseInt(e.target.dataset.id),n=document.getElementById("candidate"+t),r=new FormData;r.append("cand_id",t),Object(a.b)(),fetch(api.rem_candidate,{method:"POST",headers:{"X-CSRF-TOKEN":api.csrftoken},body:r}).then((function(e){return e.json()})).then((function(e){Object(a.c)(e.message,"alert-success"),n.remove(),document.getElementsByClassName("candidate-list-item").length<1&&location.reload(),Object(a.a)()})).catch((function(e){Object(a.c)(e,"alert-danger"),Object(a.a)()}))}))}},{key:"initChangeStateInput",value:function(){for(var e=document.getElementsByClassName("candidate-switch-state"),t=0;t<e.length;t++)e[t].addEventListener("click",(function(e){var t=parseInt(e.target.dataset.id),n=document.getElementById("candidate"+t+"-state"),r=document.getElementById("candidateModalClose"+t),o=new FormData;o.append("cand_id",t);for(var c=document.getElementsByName("candidatestatus"+t),i=0,u=0;u<c.length;u++)if(c[u].checked){i=c[u].value;break}o.append("new_state",i),Object(a.b)(),fetch(api.uptd_candidate,{method:"POST",headers:{"X-CSRF-TOKEN":api.csrftoken},body:o}).then((function(e){return e.json()})).then((function(e){n.innerHTML=e.message,r.click(),Object(a.a)()})).catch((function(e){Object(a.c)(e,"alert-danger"),Object(a.a)()}))}))}}])&&r(t.prototype,n),o&&r(t,o),e}())}});