(()=>{var n={430:(n,e,t)=>{"use strict";t.d(e,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),s=t.n(i)()(o());s.push([n.id,"/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  min-height: 100vh;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* CUSTOM */\n\nul,\nol {\n  list-style: none;\n  padding: 0;\n}\n\nbutton {\n  border: none;\n  background-color: transparent;\n  padding: 0;\n}\n",""]);const c=s},208:(n,e,t)=>{"use strict";t.d(e,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),s=t.n(i)()(o());s.push([n.id,'* {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n  margin: 0;\n}\nfooter {\n  text-align: center;\n  height: 50px;\n  background-color: #202a4b;\n  padding: 10px;\n  font-size: large;\n  color: #f1f6fd;\n  font-weight: bold;\n}\nbody {\n  background-color: #5888d9;\n  margin: 0 auto;\n}\n\nheader {\n  background-color: #202a4b;\n  color: #f1f6fd;\n  font-size: 0.8rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  gap: 1rem;\n  box-shadow: 0px 1px 20px 0px #202a4b;\n}\n\n.logo {\n  display: grid;\n  grid-template-rows: max-content max-content;\n  grid-template-columns: 1fr max-content;\n  column-gap: 5px;\n}\n.logo > h1 {\n  align-self: end;\n  padding: 0;\n  justify-self: end;\n}\n.logo > img {\n  width: 60px;\n  grid-row: 1 / 3;\n  grid-column: 1 / 2;\n  justify-self: end;\n  align-self: center;\n}\n.logo > p {\n  font-style: italic;\n}\n\n.search-form {\n  display: grid;\n  grid-template-columns: 4fr 50px;\n  grid-template-rows: 0.5fr 1fr;\n  padding-left: 1rem;\n}\n.search-form > label {\n  align-self: center;\n  grid-column: 1/3;\n  font-weight: bold;\n  color: #f1f6fd;\n  font-size: 1rem;\n  padding-left: 15px;\n}\n#search {\n  border-radius: 25px;\n  border: none;\n  background-color: #f1f6fd;\n  padding: 1rem;\n  font-size: larger;\n}\n.search-form > button {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  border-radius: 25px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n}\n\n.toggle {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  position: relative;\n  width: 100px;\n  height: 55px;\n  background-color: #3952a6;\n  border-radius: 27px;\n  cursor: pointer;\n  transition: background-color 0.25s ease-in;\n  font-weight: bold;\n  font-size: larger;\n  padding-right: 0.5rem;\n}\n.toggle::after {\n  content: "";\n  position: absolute;\n  top: 2.5px;\n  left: 2px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.274);\n}\n\n#checkbox-toggle:checked + .toggle {\n  background-color: #106c5b;\n}\n#checkbox-toggle:checked + .toggle::after {\n  transform: translateX(45px);\n}\n.hide-button {\n  opacity: 0;\n  height: 0;\n  width: 0;\n}\n.temp-buttons {\n  display: flex;\n  align-items: center;\n}\n\n.container {\n  display: grid;\n  grid-template-rows: 1fr 8fr 4fr;\n  grid-template-columns: 1fr;\n  height: 100%;\n  margin: 0 5%;\n  padding: 2rem;\n  gap: 2rem;\n}\n\n/* General Styling for Child Elements */\n.container > div > * {\n  background-color: #344b99;\n}\n\n/* Location Container */\n.location-container > div > h1 {\n  font-size: 2.5rem;\n  padding: 0.5rem 2rem;\n  color: #f1f6fd;\n}\n\n/* Grid Layouts */\n.week-container,\n.today-container {\n  display: grid;\n  gap: 1rem;\n}\n\n.week-container {\n  grid-template-columns: repeat(7, 1fr);\n}\n\n.today-container {\n  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n/* Card Styling */\n.today-container > div,\n.location-container > div,\n.week-container > div {\n  border-radius: 50px;\n  box-shadow: 0px 2px 5px 0px #202a4b;\n}\n\n/* Today\'s Temperature Section */\n.today-temp {\n  grid-row: 1 / 3;\n  grid-column: 1 / 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  color: #f1f6fd;\n  padding: 15px;\n}\n\n.today-temp > .icon {\n  width: 80%;\n}\n\n/* Temperature Display */\n.temperatures {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  width: 90%;\n  justify-content: space-around;\n}\n\n.current,\n.high-low {\n  background-color: #202a4b;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  border-radius: 25px;\n  padding: 0.5rem;\n}\n\n.current {\n  flex-direction: row;\n  gap: 0.5rem;\n}\n\n.current > img {\n  filter: invert(50);\n  width: 3rem;\n}\n\n/* Date Display */\n.date {\n  background-color: #202a4b;\n  width: 90%;\n  text-align: center;\n  padding: 0.5rem;\n  border-radius: 25px;\n}\n\n/* Conditions Section */\n.conditions {\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n/* Today\'s Conditions Grid */\n.today-conditions {\n  display: grid;\n  grid-template-rows: 4fr 1fr;\n  grid-template-columns: 1fr;\n  padding: 1.2rem;\n}\n\n/* Condition Titles & Data */\n.condition-title {\n  grid: 0 / 1 / 1 / 2;\n  font-size: 1.5rem;\n  background-color: #202a4b;\n  padding: 1rem;\n  border-radius: 50px;\n}\n\n.condition-title,\n.condition-values {\n  color: #f1f6fd;\n  text-align: center;\n  align-self: center;\n}\n\n.condition-values {\n  font-weight: bold;\n  font-size: 4rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  height: 70%;\n}\n.condition-icon {\n  border-radius: 50px;\n  filter: invert(50);\n  justify-self: end;\n  width: 100%;\n  object-fit: cover;\n}\n\n.day {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 5fr 2fr;\n  justify-items: center;\n  padding: 1rem;\n  color: #f1f6fd;\n}\n.day > .date {\n  grid-column: 1/3;\n}\n.day > p {\n  font-weight: bold;\n  font-size: 3rem;\n  align-self: center;\n  justify-self: center;\n}\n.day > img {\n  height: 60%;\n  object-fit: cover;\n  align-self: center;\n}\n.day > .day-conditions {\n  grid-column: 1/3;\n  width: 100%;\n  text-align: center;\n  font-size: 1.5rem;\n  align-self: center;\n}\n',""]);const c=s},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(s[a]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{"use strict";n.exports=function(n){return n[1]}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},s=[],c=0;c<n.length;c++){var a=n[c],d=r.base?a[0]+r.base:a[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),g={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)e[p].references++,e[p].updater(g);else{var f=o(g,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var s=0;s<i.length;s++){var c=t(i[s]);e[c].references--}for(var a=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=a}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},331:(n,e,t)=>{var r={"./clear-day.svg":737,"./clear-night.svg":949,"./cloudy.svg":901,"./fog.svg":411,"./hail.svg":915,"./partly-cloudy-day.svg":973,"./partly-cloudy-night.svg":697,"./rain-snow-showers-day.svg":878,"./rain-snow-showers-night.svg":978,"./rain-snow.svg":929,"./rain.svg":735,"./showers-day.svg":71,"./showers-night.svg":539,"./sleet.svg":146,"./snow-showers-day.svg":267,"./snow-showers-night.svg":175,"./snow.svg":876,"./thunder.svg":605,"./tornado.svg":216,"./wind.svg":723};function o(n){var e=i(n);return t(e)}function i(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=i,n.exports=o,o.id=331},769:(n,e,t)=>{"use strict";n.exports=t.p+"f7ed7c0e2663da6c517e.svg"},934:(n,e,t)=>{"use strict";n.exports=t.p+"c23e7855e1cb8ac7c36d.svg"},385:(n,e,t)=>{"use strict";n.exports=t.p+"4810ceffb1d8565f36bc.svg"},266:(n,e,t)=>{"use strict";n.exports=t.p+"9f89c012c14bc7187187.svg"},510:(n,e,t)=>{"use strict";n.exports=t.p+"fd74a4dde8275263486e.svg"},743:(n,e,t)=>{"use strict";n.exports=t.p+"9695a6b5f8ecd3e30259.svg"},528:(n,e,t)=>{"use strict";n.exports=t.p+"44275c39ad3e558fdac1.svg"},486:(n,e,t)=>{"use strict";n.exports=t.p+"68caee2f71c475b5e078.svg"},737:(n,e,t)=>{"use strict";n.exports=t.p+"f75dd985db1023c9a183.svg"},949:(n,e,t)=>{"use strict";n.exports=t.p+"798b272cbb6cfa4c6f1c.svg"},901:(n,e,t)=>{"use strict";n.exports=t.p+"65b346899b4fb4b1e88d.svg"},411:(n,e,t)=>{"use strict";n.exports=t.p+"6b05f1fde22268f2e764.svg"},915:(n,e,t)=>{"use strict";n.exports=t.p+"92a7af73d191b4b11812.svg"},973:(n,e,t)=>{"use strict";n.exports=t.p+"27ae523a3ff009026350.svg"},697:(n,e,t)=>{"use strict";n.exports=t.p+"5f4e28eeb1ce7abeb96a.svg"},878:(n,e,t)=>{"use strict";n.exports=t.p+"bd4e96cb3a5965d6bbe8.svg"},978:(n,e,t)=>{"use strict";n.exports=t.p+"bd4e96cb3a5965d6bbe8.svg"},929:(n,e,t)=>{"use strict";n.exports=t.p+"bd4e96cb3a5965d6bbe8.svg"},735:(n,e,t)=>{"use strict";n.exports=t.p+"9d0aba067148fb459f01.svg"},71:(n,e,t)=>{"use strict";n.exports=t.p+"2d73087a62a56c94b953.svg"},539:(n,e,t)=>{"use strict";n.exports=t.p+"1cbbae62045a6a8bc62f.svg"},146:(n,e,t)=>{"use strict";n.exports=t.p+"c05b2418e78acd8ecc1c.svg"},267:(n,e,t)=>{"use strict";n.exports=t.p+"719784853de946fcb419.svg"},175:(n,e,t)=>{"use strict";n.exports=t.p+"793ee06e57d02ec88963.svg"},876:(n,e,t)=>{"use strict";n.exports=t.p+"738fbaf6e8b043274ab2.svg"},605:(n,e,t)=>{"use strict";n.exports=t.p+"d554b2b13d48a709d41b.svg"},216:(n,e,t)=>{"use strict";n.exports=t.p+"59411f9606d38c4b6bc1.svg"},723:(n,e,t)=>{"use strict";n.exports=t.p+"f65fbe9cb8b784f97b89.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),s=t.n(i),c=t(56),a=t.n(c),d=t(540),l=t.n(d),u=t(113),p=t.n(u),g=t(208),f={};f.styleTagTransform=p(),f.setAttributes=a(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(g.A,f),g.A&&g.A.locals&&g.A.locals;var m=t(430),h={};h.styleTagTransform=p(),h.setAttributes=a(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(m.A,h),m.A&&m.A.locals&&m.A.locals,(new Date).toJSON().slice(0,10);let b="metric",v=null,y=null;async function x(n){try{const e=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}/?key=YEK9UJXMAXYY8F3CUHTJCWD3E&unitGroup=${b}`,t=await fetch(e),r=await t.json();v=r,y=v.resolvedAddress,w()}catch(n){console.log("Error fetching weather data:",n)}}function w(){var n;n=v.days[0],document.querySelector(".location > h1").textContent=y,document.querySelector(".icon").src=t(331)(`./${n.icon}.svg`),document.querySelector(".current > h2").innerHTML=`${n.temp}&deg;${"metric"===b?"C":"F"}`,document.querySelector(".date > h2").textContent=k(n.datetime),document.querySelector(".high").innerHTML="High: "+n.tempmax+"&deg;",document.querySelector(".low").innerHTML="Low: "+n.tempmin+"&deg;",document.querySelector(".conditions > p").textContent=n.description,function(n){const e=[`<img class = "condition-icon"> ${n.feelslike}°${"metric"===b?"C":"F"}`,`<img class = "condition-icon">${n.windspeed}`,`<img class = "condition-icon">${n.cloudcover}`,`<img class = "condition-icon">${n.humidity}`,`<img class = "condition-icon">${n.uvindex}`,`<img class = "condition-icon">${n.precipprob}`,'<img class = "condition-icon">'+S(n.sunrise),'<img class = "condition-icon">'+S(n.sunset)],r=[t(486),t(510),t(769),t(385),t(934),t(266),t(743),t(528)],o=["Feels Like","Wind Speed"+("metric"===b?" (km/h)":" (mi/hr)"),"Cloud Cover %","Humidity %","UV Index","Rain %","Sunrise (AM)","Sunset (PM)"];document.querySelectorAll(".today-conditions").forEach(((n,t)=>{n.innerHTML=`\n      <div class="condition-values">${e[t]}</div>\n      <div class="condition-title">${o[t]}</div>\n    `,n.querySelector(".condition-icon").src=r[t]})),document.querySelectorAll(".container > div > *").forEach((n=>{n.style.backgroundColor=C.checked?"#106c5b":"#344b99"})),document.querySelectorAll("header,.condition-title, .date, .current,.high-low").forEach((n=>{n.style.backgroundColor=C.checked?"#052e29":"#202a4b"})),document.querySelector("body").style.backgroundColor=C.checked?"#17b592":"#5888d9"}(n);const e=document.querySelector(".week-container").querySelectorAll(".day");v.days.slice(1,8).forEach(((n,r)=>{!function(n,e,r){e.querySelector(".date h3").textContent=r,e.querySelector(".icon").src=t(331)(`./${n.icon}.svg`),e.querySelector(".day > p").innerHTML=`${n.temp}&deg;${"metric"===b?"C":"F"}`,e.querySelector(".day >.day-conditions").textContent=n.conditions}(n,e[r],k(n.datetime))}))}function S(n){const[e,t]=n.split(":"),r=new Date;return r.setHours(e,t),r.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}).replace(/ AM| PM/,"")}function k(n){const e=new Date(n);return new Intl.DateTimeFormat("en-US",{weekday:"long",month:"long",day:"numeric"}).format(e)}document.querySelector(".search-form").addEventListener("submit",(n=>{n.preventDefault(),x(document.querySelector("#search").value.trim())}));const C=document.querySelector("#checkbox-toggle");C.addEventListener("change",(()=>{b="metric"===b?"us":"metric",w(),x(y)})),x("Vancouver")})()})();