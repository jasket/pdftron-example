(this["webpackJsonpresearch-pdf-library"]=this["webpackJsonpresearch-pdf-library"]||[]).push([[0],{72:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n(0),r=n.n(a),i=n(9),o=n.n(i),s=n(108),u=n(109),l=n(112),h=n(74),j=n(105),b=function(){return Object(c.jsx)(l.a,{mt:2,children:Object(c.jsxs)(h.a,{color:"secondary",component:"h1",variant:"h5",children:["PDF Highlight",Object(c.jsx)(l.a,{my:2,children:Object(c.jsx)(j.a,{})})]})})},d=r.a.memo(b),O=n(110),x=Object(a.createContext)(null),f=function(){var e=Object(a.useContext)(x),t=e.searchValue,n=e.handleSearchValue,r=e.handleAddSearchItem;return Object(c.jsx)(O.a,{value:t,fullWidth:!0,placeholder:"Search value",helperText:"Press Enter to add a search item",onChange:function(e){n(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&r(e.target.value)}})},m=r.a.memo(f),g=n(106),v=n(113),p=n(107),C=n(46),w=n.n(C),y=[[224,130,131],[241,130,141],[190,144,212],[220,198,224],[241,231,254],[41,241,195],[123,239,178],[200,247,197]],S=function(){var e=Object(a.useContext)(x),t=e.searchItems,n=e.handleHighlightText,r=Object(a.useCallback)((function(e,t){n(e,t)}),[n]);return Object(c.jsx)(g.a,{dense:!0,children:t.map((function(e){var t=y[Math.floor(Math.random()*y.length)];return Object(c.jsxs)(v.a,{children:[Object(c.jsx)(w.a,{style:{color:"rgb(".concat(t.join(","),")")}}),Object(c.jsx)(p.a,{component:"button",variant:"body2",onClick:function(){return r(e,t)},children:e})]},e)}))})},P=r.a.memo(S),T=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(m,{}),Object(c.jsx)(P,{})]})},k=r.a.memo(T),A=function(){var e=Object(a.useContext)(x).viewer;return Object(c.jsx)("div",{ref:e,style:{height:"99vh"}})},F=r.a.memo(A),H=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(F,{})})},I=r.a.memo(H),D=n(38),V=n(26),E=n(40),M=n.n(E),L=n(47),B=n(48),J=n.n(B);var K=n(49);var N=function(e){var t=e.children,n=Object(a.useState)([]),r=Object(V.a)(n,2),i=r[0],o=r[1],s=Object(a.useState)(""),u=Object(V.a)(s,2),l=u[0],h=u[1],j=Object(a.useCallback)((function(e){e&&(i.includes(e)||o([].concat(Object(D.a)(i),[e])),h(""))}),[i]),b=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(null),n=Object(V.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(L.a)(M.a.mark((function t(){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J()({path:"./webviewer/lib",initialDoc:"./assets/alices-001-chapter.pdf"},e.current);case 2:return n=t.sent,r(n),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().then(console.log)}),[]),{viewer:e,instance:c}}(),d=b.viewer,O=function(e){return{handleHighlightText:Object(a.useCallback)((function(t,n){for(var c=e.docViewer,a=e.annotManager,r=e.Annotations,i=c.getDocument(),o=i.getPageCount(),s=function(e){i.loadPageText(e).then((function(c){for(var o,s=0,u=[];(o=c.indexOf(t,s))>-1;){s=o+t.length;var l=i.getTextPosition(e,o,o+t.length).then((function(t){var c=new r.TextHighlightAnnotation;return c.PageNumber=e,c.Quads=t,c.StrokeColor=Object(K.a)(r.Color,Object(D.a)(n)),c}));u.push(l)}Promise.all(u).then((function(e){a.addAnnotations(e),a.drawAnnotationsFromList(e)}))}))},u=1;u<o;u++)s(u)}),[e])}}(b.instance).handleHighlightText;return Object(c.jsx)(x.Provider,{value:{viewer:d,handleHighlightText:O,searchItems:i,searchValue:l,handleSearchValue:h,handleAddSearchItem:j},children:t})},Q=r.a.memo(N),R=function(){return Object(c.jsxs)(Q,{children:[Object(c.jsx)(s.a,{}),Object(c.jsx)(l.a,{mx:2,children:Object(c.jsxs)(u.a,{container:!0,spacing:2,children:[Object(c.jsxs)(u.a,{item:!0,xs:12,md:3,children:[Object(c.jsx)(d,{}),Object(c.jsx)(k,{})]}),Object(c.jsx)(u.a,{item:!0,xs:12,md:9,children:Object(c.jsx)(I,{})})]})})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(R,{})}),document.getElementById("root")),W()}},[[72,1,2]]]);
//# sourceMappingURL=main.bf6de2be.chunk.js.map