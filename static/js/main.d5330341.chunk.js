(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{212:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),o=a.n(r),c=(a(88),a(19)),i=a(20),s=a(26),u=a(21),m=a(27),d=(a(89),a(8)),h=a.n(d),v=a(49),f=a.n(v),E=a(25),b=a(23),p=a.n(b),g=a(24),w=a.n(g),y=a(4),C=a.n(y),k=a(22),O=a.n(k),j=a(81),I=a.n(j),x=a(82),S=a.n(x),N=a(31),T=a.n(N),W=a(32),A=a.n(W),R=a(50),B=a.n(R),G=a(51),U=a.n(G);function F(e){return l.a.createElement(O.a,{component:"div",style:{padding:24}},e.children)}var J=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={value:0},a.handleChange=function(e,t){a.setState({value:t})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.value;return l.a.createElement("div",{className:e.root},l.a.createElement(p.a,{position:"static",color:"default"},l.a.createElement(w.a,{value:t,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto"},l.a.createElement(C.a,{label:"jan"}),l.a.createElement(C.a,{label:"feb"}),l.a.createElement(C.a,{label:"mrt"}),l.a.createElement(C.a,{label:"apr"}),l.a.createElement(C.a,{label:"mei"}),l.a.createElement(C.a,{label:"jun"}),l.a.createElement(C.a,{label:"jul"}),l.a.createElement(C.a,{label:"aug"}),l.a.createElement(C.a,{label:"sep"}),l.a.createElement(C.a,{label:"okt"}),l.a.createElement(C.a,{label:"nov"}),l.a.createElement(C.a,{label:"dec"}))),0===t&&l.a.createElement(F,null,"One"),1===t&&l.a.createElement(F,null,"Item Two"),2===t&&l.a.createElement(F,null,"Item Three"),3===t&&l.a.createElement(F,null,"Item Four"),4===t&&l.a.createElement(F,null,"Item Five"),5===t&&l.a.createElement(F,null,"Item Six"),6===t&&l.a.createElement(F,null,"Item Seven"),7===t&&l.a.createElement(F,null,"Item Seven"),8===t&&l.a.createElement(F,null,"Item 8"),9===t&&l.a.createElement(F,null,"Item 9"),10===t&&l.a.createElement(F,null,"Item 10"),11===t&&l.a.createElement(F,null,"Item 11"),12===t&&l.a.createElement(F,null,"Item 12"))}}]),t}(l.a.Component),L=Object(E.withStyles)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}})(J);function P(e){var t=e.children,a=e.dir;return l.a.createElement(O.a,{component:"div",dir:a,style:{padding:24}},t)}var z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={value:0},a.handleChange=function(e,t){a.setState({value:t})},a.handleChangeIndex=function(e){a.setState({value:e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.theme;return l.a.createElement("div",{className:t.root},l.a.createElement(p.a,{position:"static",color:"default"},l.a.createElement(w.a,{value:this.state.value,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",variant:"fullWidth"},l.a.createElement(C.a,{label:"Item One"}),l.a.createElement(C.a,{label:"Item Two"}),l.a.createElement(C.a,{label:"Item Three"}))),l.a.createElement(f.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:this.state.value,onChangeIndex:this.handleChangeIndex},l.a.createElement(P,{dir:a.direction},l.a.createElement(L,null)),l.a.createElement(P,{dir:a.direction},"Item Two"),l.a.createElement(P,{dir:a.direction},"Item Three")))}}]),t}(l.a.Component),D=Object(E.withStyles)(function(e){return{root:{backgroundColor:e.palette.background.paper,width:"100"}}},{withTheme:!0})(z);function K(e){var t=e.children,a=e.dir;return l.a.createElement(O.a,{component:"div",dir:a},t)}var $=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={value:0},a.handleChange=function(e,t){a.setState({value:t})},a.handleChangeIndex=function(e){a.setState({value:e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.value,a=this.props,n=a.classes,r=a.theme,o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},c=[{color:"primary",className:n.fab,icon:l.a.createElement(T.a,null)},{color:"secondary",className:n.fab,icon:l.a.createElement(T.a,null)},{color:"inherit",className:h()(n.fab,n.fabGreen),icon:l.a.createElement(T.a,null)},{color:"inherit",className:h()(n.fab,n.fabOrange),icon:l.a.createElement(T.a,null)}];return l.a.createElement("div",{className:n.root},l.a.createElement(p.a,{position:"static",color:"default"},l.a.createElement(w.a,{value:t,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",variant:"fullWidth"},l.a.createElement(C.a,{icon:l.a.createElement(A.a,null),label:"Osman"}),l.a.createElement(C.a,{icon:l.a.createElement(A.a,null),label:"Remco"}),l.a.createElement(C.a,{icon:l.a.createElement(A.a,null),label:"Cengiz"}),l.a.createElement(C.a,{icon:l.a.createElement(A.a,null),label:"Kubilay"}))),0===t&&l.a.createElement(K,null,l.a.createElement(D,null)),1===t&&l.a.createElement(K,null,l.a.createElement(L,null)),2===t&&l.a.createElement(K,null,l.a.createElement(L,null)),3===t&&l.a.createElement(K,null,l.a.createElement(L,null)),c.map(function(t,a){return l.a.createElement(I.a,{key:t.color,in:e.state.value===a,timeout:o,style:{transitionDelay:"".concat(e.state.value===a?o.exit:0,"ms")},unmountOnExit:!0},l.a.createElement(S.a,{className:t.className,color:t.color},t.icon))}))}}]),t}(l.a.Component),q=Object(E.withStyles)(function(e){return{root:{backgroundColor:e.palette.background.paper,width:"100",position:"relative",height:"100"},fab:{position:"fixed",bottom:2*e.spacing.unit,right:2*e.spacing.unit},fabGreen:{color:e.palette.common.white,backgroundColor:B.a[500],"&:hover":{backgroundColor:B.a[600]}},fabOrange:{color:e.palette.common.white,backgroundColor:U.a[500],"&:hover":{backgroundColor:U.a[600]}}}},{withTheme:!0})($),H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(l.a.createElement(q,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/roosterpoedercoat",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/roosterpoedercoat","/service-worker.js");H?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):M(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):M(t,e)})}}()},83:function(e,t,a){e.exports=a(212)},88:function(e,t,a){},89:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.d5330341.chunk.js.map