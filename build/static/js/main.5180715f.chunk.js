(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{104:function(e,t){},108:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),s=a(53),o=a.n(s),m=a(60),l=a(6),i=a(54),u=a.n(i),A=a(55),f=a.n(A),E=a(16),g=a.n(E),p=(a(108),a(56)),d=a.n(p),N=(a(144),a(28)),h=a.n(N),v=function(e){var t=e.message,a=t.text,n=t.user,c=!1,s=e.name.trim().toLowerCase();return n===s&&(c=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sentText pr-10"},s),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},h.a.emojify(a)))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"messageText colorDark"},h.a.emojify(a))),r.a.createElement("p",{className:"sentText pl-10 "},n))},b=(a(145),function(e){var t=e.messages,a=e.name;return r.a.createElement(d.a,{className:"messages"},t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(v,{message:e,name:a}))})))}),j=a(57),O=a.n(j),C=(a(146),function(e){var t=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:g.a,alt:"online icon"}),r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:O.a,alt:"close icon"}))))}),I=(a(147),function(e){var t=e.setMessage,a=e.sendMessage,n=e.message;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:n,onChange:function(e){var a=e.target.value;return t(a)},onKeyPress:function(e){return"Enter"===e.key?a(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return a(e)}},"Send"))}),S=(a(148),function(e){var t=e.location,a=Object(c.useState)(""),s=Object(l.a)(a,2),o=s[0],i=s[1],A=Object(c.useState)(""),E=Object(l.a)(A,2),g=E[0],p=E[1],d=Object(c.useState)(""),N=Object(l.a)(d,2),h=(N[0],N[1]),v=Object(c.useState)(""),j=Object(l.a)(v,2),O=j[0],S=j[1],x=Object(c.useState)([]),y=Object(l.a)(x,2),B=y[0],R=y[1];Object(c.useEffect)((function(){var e=u.a.parse(t.search),a=e.name,c=e.room;n=f()("localhost:5000"),p(c),i(a),n.emit("join",{name:a,room:c},(function(e){e&&alert(e)}))}),["localhost:5000",t.search]),Object(c.useEffect)((function(){return n.on("message",(function(e){R([].concat(Object(m.a)(B),[e]))})),n.on("roomData",(function(e){var t=e.users;h(t)})),function(){n.emit("disconnect"),n.off()}}),[B]);return r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(C,{room:g}),r.a.createElement(b,{messages:B,name:o}),r.a.createElement(I,{message:O,setMessage:S,sendMessage:function(e){e.preventDefault(),O&&n.emit("sendMessage",O,(function(){return S("")}))}})))}),x=a(17);a(149);function y(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),o=Object(l.a)(s,2),m=o[0],i=o[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("h1",{className:"heading"},"Join"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return i(e.target.value)}})),r.a.createElement(x.b,{onClick:function(e){return a&&m?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(m)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign In"))))}var B=a(7),R=function(){return r.a.createElement(x.a,null,r.a.createElement(B.a,{path:"/",exact:!0,component:y}),r.a.createElement(B.a,{path:"/chat",component:S}))};o.a.render(r.a.createElement(R,null),document.getElementById("root"))},16:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},57:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},61:function(e,t,a){e.exports=a(152)}},[[61,1,2]]]);
//# sourceMappingURL=main.5180715f.chunk.js.map