(this.webpackJsonpblackjack=this.webpackJsonpblackjack||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),u=n.n(c),l=(n(13),n(1)),o=n(7),i=n(6),s=(n(14),n(15),function(e){var t="/cards/"+(e.hidden?"red_back":e.value+e.suit)+".png";return r.a.createElement("img",{style:e.style,className:"card",src:t,alt:e.value+e.suit})}),f=(n(16),function(e){var t=e.cards.map((function(t,n){return r.a.createElement(s,{key:n,style:{marginTop:2*n+"%"},suit:t.suit,value:t.value,hidden:e.hidden})})),n=b(e.cards)<22?"white":"red";return r.a.createElement("div",{className:"cards"},e.cards.length>0&&r.a.createElement("p",{style:{color:n}},b(e.cards)),t)}),m=function(){var e=["C","S","D","H"],t=["2","3","4","5","6","7","8","9","10","K","Q","J","A"];return{suit:e[Math.floor(Math.random()*e.length)],value:t[Math.floor(Math.random()*t.length)]}},b=function(e){var t,n=[0],a=Object(i.a)(e);try{var r=function(){var e=t.value;switch(e.value){case"A":var a=n.map((function(e){return e+1})),r=n.map((function(e){return e+11}));n=a.concat(r);break;case"K":case"Q":case"J":n=n.map((function(e){return e+10}));break;default:n=n.map((function(t){return t+Number(e.value)}))}};for(a.s();!(t=a.n()).done;)r()}catch(u){a.e(u)}finally{a.f()}var c=n.filter((function(e){return e<22}));return 0!==c.length&&(n=c),Math.max.apply(Math,Object(o.a)(n))},v=function(e){e((function(e){return e.concat(m())}))},d=function(){var e=Object(a.useState)([m(),m()]),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)([m()]),o=Object(l.a)(u,2),i=o[0],s=o[1],d=Object(a.useState)(!1),h=Object(l.a)(d,2),j=h[0],O=h[1],E=Object(a.useState)(!0),p=Object(l.a)(E,2),g=p[0],k=p[1],y=Object(a.useState)(!0),S=Object(l.a)(y,2),w=S[0],N=S[1],C=Object(a.useState)(100),M=Object(l.a)(C,2),T=M[0],R=M[1],A=Object(a.useState)(1e3),J=Object(l.a)(A,2),P=J[0],W=J[1],B=Object(a.useState)("Player's Turn"),H=Object(l.a)(B,2),x=H[0],D=H[1];Object(a.useRef)(g).current=g;var K=Object(a.useRef)(n);K.current=n;var Q=Object(a.useRef)(i);Q.current=i;var F=Object(a.useRef)(T);F.current=T;var G=Object(a.useCallback)((function(){var e=b(K.current),t=b(Q.current);j||t>e&&t<=21?D("House Wins"):e===t?(W((function(e){return e+F.current})),D("Tie Round")):(W((function(e){return e+2*F.current})),D("Player Wins")),setTimeout((function(){c([m(),m()]),s([m()]),k(!0),N(!0),D(0===P?"Game Over":"Player's Turn")}),1e3)}),[j,T]),I=Object(a.useCallback)((function(){var e;b(Q.current)>=17&&(2!==(e=Q.current).length||!("A"===e[0].value&&"6"===e[1].value||"6"===e[0].value&&"A"===e[1].value))?G():(v(s),setTimeout(I,500))}),[]);return Object(a.useEffect)((function(){var e;e=O,b(n)>21?e(!0):e(!1)}),[n,I]),Object(a.useEffect)((function(){j&&(k(!1),G())}),[j]),Object(a.useEffect)((function(){g||j||(D("Dealer's turn"),I())}),[g]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,x),r.a.createElement("p",null,"Balance: ",P),r.a.createElement("div",{className:"dealer"},r.a.createElement(f,{cards:i,hidden:w})),r.a.createElement("div",{className:"players"},r.a.createElement(f,{cards:n,hidden:w})),w&&P>0&&r.a.createElement("div",{className:"bet"},r.a.createElement("strong",null,"Place a bet:"),r.a.createElement("input",{value:T,onChange:function(e){var t=Number(e.target.value);isNaN(t)?R((function(e){return e})):R(t>P?P:t<=0?1:t)}}),r.a.createElement("button",{onClick:function(){N(!1),W((function(e){return e-T}))}},"Submit")),g&&!w&&r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){return v(c)}},"Hit"),r.a.createElement("button",{onClick:function(){return k(!1)}},"Stand")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.811f8717.chunk.js.map