(this.webpackJsonpnikotodev=this.webpackJsonpnikotodev||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(16)},,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(3),o=t.n(l),c=t(4),i=t.n(c),s=(t(12),function(){return r.a.createElement("div",{className:"bio"},r.a.createElement("div",{className:"bio__information-basic"},r.a.createElement("p",{className:"bio__name"},"Heya! ",r.a.createElement("span",{role:"img",className:"bio__waving-hand","aria-label":"wave"},"\ud83d\udc4b")," I'm ",r.a.createElement("span",{className:"bio__name--heavy"},"nikoto.")),r.a.createElement("p",{className:"bio__occupation"},"Software Engineer",r.a.createElement("br",null),"@ Spotahome ",r.a.createElement("img",{className:"bio__spotahome",src:"./images/spotahome.jpg",alt:"spotahome logo"}))),r.a.createElement("code",{className:"bio__teaser"},"Want to know me better? Use the terminal. ",r.a.createElement("br",null),'Start by typing "help" and pressing enter.'),r.a.createElement("div",{className:"bio__information-socials"},r.a.createElement("a",{href:"https://github.com/nikotomad",target:"_blank",className:"bio__information-socials-link"},r.a.createElement("img",{className:"bio__information-icon",src:"./images/icon-github.svg",width:"40"}),"Github"),r.a.createElement("a",{href:"https://www.linkedin.com/in/nikolaasverlee/",target:"_blank",className:"bio__information-socials-link"},r.a.createElement("img",{className:"bio__information-icon",src:"./images/icon-linkedin.webp",width:"40"}),"Linkedin")))}),m=function(e){var a=e.step;e.children;return r.a.createElement(r.a.Fragment,null,function(e){switch(e){case"onboarding":default:return r.a.createElement(s,null)}}(a))};m.propTypes={step:i.a.string},m.defaultProps={step:"onboarding"};var u=m,d=t(1),p={help:{result:"[available commands are]: ".concat(Object.values(["about","team","skills"]))},about:{result:"Based in Madrid. Software Engineer. Worst engineer at the company but third coolest."},team:{result:r.a.createElement("img",{loading:"eager",src:"./images/broccoli.png",alt:"brocolli",width:"50"})},skills:{result:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Frontend: React, React Native, Redux"),r.a.createElement("p",null,"Backend & DB: Node.js + Mongo"),r.a.createElement("p",null,"Testing: Jest, Cypress, Detox"),r.a.createElement("p",null,"Other: Test driven development, BDD, Kibana, Grafana"))},clear:{result:""},"whois weapon":{result:r.a.createElement("img",{src:"./images/avatar-niko.jpg",alt:"weapon",width:"100"})}},_=(t(13),function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],l=(a[1],Object(n.useState)("")),o=Object(d.a)(l,2),c=o[0],i=o[1];return r.a.createElement("div",{className:"terminal"},r.a.createElement("div",{className:"terminal__navbar"},r.a.createElement("span",{className:"terminal__navbar-close"})),r.a.createElement("div",{className:"terminal__screen"},r.a.createElement("p",{className:"terminal__screen-hint"}),r.a.createElement("div",{className:"terminal__screen-results"},t.map((function(e,a){return r.a.createElement("div",{className:"terminal__screen-row",key:"".concat(e).concat(a)},r.a.createElement("p",{className:"terminal__command"},"".concat("/dev/guest"," \u2192 ").concat(e)),r.a.createElement("p",{className:"terminal__result"},p[e]&&p[e].result||'Command not found. Type "help" for more info.'))})))),r.a.createElement("div",{className:"terminal__actions",onKeyDown:function(e){"Enter"===e.key&&(t.push(c),i(""))}},r.a.createElement("span",{className:"terminal__actions-symbol"},"$ ".concat("/dev/guest")),r.a.createElement("input",{tabIndex:"0",autoFocus:!0,className:"terminal__actions-command",type:"text",value:c,onChange:function(e){return i(e.target.value)}})))}),b=(t(14),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(u,{step:"onboarding"}),r.a.createElement(_,null))});t(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.c930c8b6.chunk.js.map