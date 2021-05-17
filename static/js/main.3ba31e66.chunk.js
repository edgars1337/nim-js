(this["webpackJsonpnim-js-game"]=this["webpackJsonpnim-js-game"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),s=n(9),r=n.n(s),a=(n(26),n(5)),o=n(6),u=n(3),l=n(4),j=(n(27),n(13)),m=(n(28),n(1)),b=function(e){var t=e.stackIdx,n=e.stackSize,c=void 0===n?{}:n,s=e.setStackSize;return Object(i.useEffect)((function(){s(Object(a.a)({},t,3))}),[]),Object(m.jsxs)("div",{className:Object(l.a)("StackSizeInputWrapper"),children:[Object(m.jsx)("input",{type:"number",id:String(t),value:(null===c||void 0===c?void 0:c[t])||3,min:1,onChange:function(e){var n=e.target.value;return s(Object(a.a)({},t,Number(n)))}}),Object(m.jsx)("label",{htmlFor:String(t),children:"Number Of elements in stack ".concat(t+1)})]})},d=(n(30),"user_move"),h="computer_move",f=function(e){var t=e.setStackAmount,n=e.setStackSize,c=e.isVisible,s=e.startGame,r=e.stackSize,a=e.stackAmount,o=e.setMove,d=Object(i.useState)(!0),f=Object(u.a)(d,2),v=f[0],p=f[1];return Object(m.jsxs)("div",{className:Object(l.a)("SettingsPopup",c&&"SettingsPopup_isVisible"),children:[Object(m.jsxs)("div",{className:"SettingsPopup-StackAmountWrapper",children:[Object(m.jsx)("input",{type:"number",id:"stackAmount",className:"SettingsPopup-StackAmount",value:a,onChange:function(e){var n=e.target.value;return t(Number(n))}}),Object(m.jsx)("label",{htmlFor:"stackAmount",children:"Number of Stacks"})]}),Object(m.jsx)("div",{className:"SettingsPopup-StackSizeWrapper",children:Object(j.a)(Array(a).keys()).map((function(e){return Object(m.jsx)(b,{stackIdx:e,stackSize:r,setStackSize:n},e)}))}),Object(m.jsxs)("div",{className:"SettingsPopup-FirstMoveWrapper",children:[Object(m.jsx)("input",{type:"checkbox",id:"firstmove",className:"SettingsPopup-FirstMove",checked:v,onChange:function(e){var t=e.target.checked;return p(t)}}),Object(m.jsx)("label",{htmlFor:"firstmove",children:"Player makes first move"})]}),Object(m.jsx)("div",{className:"SettingsPopup-StartWrapper",children:Object(m.jsx)("button",{onClick:function(){s(),v||o(h)},children:"Save & Start Game"})})]})},v=n(11),p=n(41),O=function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(v.a)(this,e),this.piles=[],this.heuristicValue=0,this.childList=[],this.getPiles=function(){return JSON.parse(JSON.stringify(n.piles))},this.getChildList=function(){return n.childList},this.getHeuristicValue=function(){return n.heuristicValue},this.setHeuristicValue=function(e){n.heuristicValue=e},this.isEmpty=function(){return n.piles.every((function(e){return 0===e}))},this.equals=function(e){return e===n||null!==e&&Object(p.a)(n.piles,e.piles)},null===i?(this.piles=t,this.childList=[]):(i.childList.push(this),this.piles=t,this.childList=[])},g=function e(t){var n=this;Object(v.a)(this,e),this.state=void 0,this.getIsEmpty=function(){return n.state.isEmpty()},this.playerMove=function(e,t){return console.log("User move"),console.log("Current state ",n.state.piles),n.state=n.move(e,t),console.log("After move ",n.state.piles),n.state.getPiles()},this.computerMove=function(){console.log("Computer move"),console.log("Current state ",n.state.piles);var e=n.minimax(n.state,2,!0),t=n.state.getChildList().find((function(t){return t.getHeuristicValue()===e}));return n.state=t||n.state.getChildList()[0],console.log("After Move ",n.state.piles),n.state.getPiles()},this.generateChildNodes=function(e){if(e.isEmpty())return[];for(var t=[],n=e.getPiles(),i=0;i<n.length;i++)for(var c=e.getPiles();c[i]>0;){c[i]=c[i]-1;var s=new O(c.map((function(e){return e})),e);t.push(s)}return t},this.minimax=function(e,t,i){if(0===t||e.isEmpty())return(i?1:-1)*n.heuristicEvaluation(e);if(i){var c=Number.MIN_SAFE_INTEGER;return n.generateChildNodes(e).forEach((function(i){var s=n.minimax(i,t-1,!1);s>c&&(c=s),i.setHeuristicValue(s),e.setHeuristicValue(c)})),c}var s=Number.MAX_SAFE_INTEGER;return n.generateChildNodes(e).forEach((function(i){var c=n.minimax(i,t-1,!0);c<s&&(s=c),i.setHeuristicValue(c),e.setHeuristicValue(s)})),s},this.heuristicEvaluation=function(e){return 0!==n.nimSum(e)?1:-1},this.nimSum=function(e){return e.getPiles().reduce((function(e,t){return e^t}),0)},this.move=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null!==e&&null!==t){var i=n.state.getPiles();return i[e]=i[e]-t,new O(i,n.state)}for(;;){var c=Number(prompt("choose pile")),s=n.state.getPiles();if(c<0||(null===s||void 0===s?void 0:s.length)<c)console.log("wrong pile number");else{var r=s[c],a=Number(prompt("choose amount"));if(!(a<0||0===r||r<a))return s[c]=r-a,new O(s,n.state);console.log("wrong amount")}}},this.state=t},S=(n(32),function(e){var t=e.stackSize,n=e.move,c=e.getPlayerMove,s=e.idx,r=e.coloredRed,a=Object(i.useState)(-1),o=Object(u.a)(a,2),b=o[0],h=o[1];return Object(m.jsx)("div",{className:Object(l.a)("StackWrapper"),children:Object(j.a)(Array(t).keys()).map((function(e){return Object(m.jsx)("div",{id:String(e),className:Object(l.a)("StackWrapper-Element",e<=b&&"StackWrapper-Element_isActive",e<r&&"StackWrapper-Element_isRed"),onMouseEnter:function(e){var t=e.currentTarget.id;return h(Number(t))},onMouseLeave:function(){return h(-1)},onClick:function(e){var t=e.currentTarget.id;n===d&&c(s,Number(t))},children:"\xa0"})}))})}),k=(n(33),function(e){var t=e.stacksValues,n=e.move,i=e.getPlayerMove,c=e.divRef,s=e.coloredRed;return Object(m.jsx)("div",{className:Object(l.a)("StacksWrapper"),ref:c,children:t.map((function(e,t){return Object(m.jsx)(S,{idx:t,coloredRed:(null===s||void 0===s?void 0:s[t])||-1,stackSize:e,move:n,getPlayerMove:i})}))})}),x=(n(34),function(){return Object(m.jsxs)("div",{className:"Introduction",children:[Object(m.jsx)("span",{className:"Introduction-Title",children:"Welcome to Nim Game!"}),Object(m.jsx)("span",{className:"Introduction-Instructions",children:"To start a new game click the settings button above and select game options"}),Object(m.jsx)("span",{className:"Introduction-Instructions",children:"You will be playing as Player and will have the first move (by default)"}),Object(m.jsx)("span",{className:"Introduction-Instructions",children:"To remove elements from a stack hover over the particular stack and you will see elements highlighted that you will remove and click"}),Object(m.jsx)("span",{className:"Introduction-Instructions",children:"The computers moves will be highlighted red for a split second"})]})}),N=function(e){var t=Object(i.useRef)();return Object(i.useEffect)((function(){t.current=e})),t.current},y=function(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(!1),r=Object(u.a)(s,2),j=r[0],b=r[1],v=Object(i.useState)({}),p=Object(u.a)(v,2),S=p[0],y=p[1],E=Object(i.useState)(3),P=Object(u.a)(E,2),w=P[0],A=P[1],I=Object(i.useState)(d),C=Object(u.a)(I,2),M=C[0],W=C[1],V=Object(i.useState)({}),R=Object(u.a)(V,2),z=R[0],L=R[1],T=Object(i.useState)(""),_=Object(u.a)(T,2),F=_[0],H=_[1],G=Object(i.useState)(!0),B=Object(u.a)(G,2),J=B[0],Y=B[1],q=N(w)||3,U=N(M),X=Object(i.useRef)({}),$=Object(i.useRef)({}),D=Object(i.useRef)();return Object(i.useEffect)((function(){var e;M===h&&function(){var e=$.current.computerMove().reduce((function(e,t,n){return Object(o.a)(Object(o.a)({},e),{},Object(a.a)({},n,t))}),{}),t=Object.fromEntries(Object.entries(S).map((function(t){var n=Object(u.a)(t,2),i=n[0];return[i,n[1]-e[i]]})));L(t),setTimeout((function(){L({}),y(e),W(d)}),250)}(),(null===(e=Object.keys(null===$||void 0===$?void 0:$.current))||void 0===e?void 0:e.length)&&$.current.getIsEmpty()&&(b(!1),H(U===d?"You win!":"Computer win!"))}),[M]),Object(i.useEffect)((function(){if(j){var e,t,n=null===(e=D.current)||void 0===e||null===(t=e.getBoundingClientRect())||void 0===t?void 0:t.height;n&&(D.current.style.height="".concat(n,"px"))}}),[j]),Object(i.useEffect)((function(){w<q&&y((function(e){return Object.fromEntries(Object.entries(e).filter((function(e){var t=Object(u.a)(e,1)[0];return Number(t)<w})))}))}),[w]),Object(i.useEffect)((function(){J&&n&&Y(!1)}),[n]),Object(m.jsxs)("div",{className:Object(l.a)("App",n&&"App-SettingsPopupOpen"),children:[Object(m.jsx)("button",{onClick:function(){c(!n),b(!1)},children:"Settings"}),J&&Object(m.jsx)(x,{}),n&&Object(m.jsx)(f,{isVisible:n,startGame:function(){c(!1),b(!0),X.current=new O(Object.values(S)),$.current=new g(X.current)},setStackAmount:A,setStackSize:function(e){y((function(t){return Object(o.a)(Object(o.a)({},t),e)}))},stackAmount:w,stackSize:S,setMove:W}),j&&Object(m.jsx)(k,{divRef:D,stacksValues:Object.values(S),getPlayerMove:function(e,t){var n=$.current.playerMove(e,t+1).reduce((function(e,t,n){return Object(o.a)(Object(o.a)({},e),{},Object(a.a)({},n,t))}),{});y(n),W(h)},move:M,coloredRed:z}),F&&Object(m.jsxs)("div",{className:"App-WinnerWrapper",children:[Object(m.jsx)("span",{className:"App-WhoWon",children:F}),Object(m.jsx)("button",{className:"App-PlayAgainButton",onClick:function(){H(""),y({}),A(3),c(!0)},children:"Play Again?"})]})]})},E=n(21),P=Object(E.a)({reducer:{}}),w=n(20);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(w.a,{store:P,children:Object(m.jsx)(y,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.3ba31e66.chunk.js.map