!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=41)}({0:function(e,n,t){"use strict";function r(e,n){var t=document.getElementById("alert-section");if(t){var r='\n        <div class="mt-3 alert '.concat(n,'" role="alert">\n            ').concat(e,'\n            <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n                <span aria-hidden="true">&times;</span>\n            </button>\n        </div>\n    ');t.innerHTML+=r}}function a(){document.body.classList.add("is-loading")}function o(){document.body.classList.remove("is-loading")}t.d(n,"c",(function(){return r})),t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return o}))},41:function(e,n,t){e.exports=t(42)},42:function(e,n,t){"use strict";t.r(n);var r=t(0);function a(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.initForm()}var n,t,o;return n=e,(t=[{key:"initForm",value:function(){var e=["image/jpeg","image/png","image/webp"],n=["candemail","candpasswd","candfname","candlname","candtel"],t=document.getElementById("candform"),a=document.getElementById("candsubmit");t&&a&&a.addEventListener("click",(function(a){if(a.preventDefault(),!document.getElementById("candagree").checked)return Object(r.c)("You must accept our terms and conditions as well as the privacy policy.","alert-danger"),!1;var o=new FormData,c=document.getElementById("candphoto");if(c&&c.files.length>0){var i=c.files[0];if(!e.includes(i.type))return Object(r.c)("Invalid file type. We accept only jpg, png, webp.","alert-danger"),!1;if((i.size/1048576).toFixed(2)>10485760)return Object(r.c)("Too large file. We accept only 10 MB max file size.","alert-danger"),!1;o.append("candphoto",i)}n.forEach((function(e){var n=document.getElementById(e);n&&o.append(e,n.value)})),Object(r.b)(),fetch(api.new_candidate,{method:"POST",headers:{"X-CSRF-TOKEN":api.csrftoken},body:o}).then((function(e){return e.json()})).then((function(e){Object(r.c)(e.message,"alert-success"),t.reset(),Object(r.a)()})).catch((function(e){Object(r.c)(e.error,"alert-danger"),Object(r.a)()}))}))}}])&&a(n.prototype,t),o&&a(n,o),e}())}});