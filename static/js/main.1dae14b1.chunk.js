(this.webpackJsonppurchases=this.webpackJsonppurchases||[]).push([[0],{313:function(e,a,t){e.exports=t(571)},493:function(e,a){},495:function(e,a){},527:function(e,a){},528:function(e,a){},570:function(e,a,t){},571:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),l=t.n(c),o=t(39),i=t(38),s=t(292),u=t.n(s),m=t(177),d=t.n(m),p=(t(485),t(487),t(53)),f=t(605),E=t(609),b=t(611),v=t(293),g=t.n(v),h=t(622),y=t(610),w=function(){var e=Object(o.c)((function(e){return e.users.user}));return r.a.createElement(f.a,{position:"static"},r.a.createElement(E.a,null,r.a.createElement("div",{style:{flexGrow:1}}),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(y.a,{container:!0,direction:"row",alignItems:"center"},e&&r.a.createElement(h.a,null,"\u041f\u0440\u0438\u0432\u0435\u0442, ",e.name),r.a.createElement(b.a,{color:"inherit"},r.a.createElement(g.a,null))))))},x=t(43),j=t(294),k=t.n(j),O=t(615),S=t(625),I=t(612),A=t(613),C=t(626),N=t(620),F=t(295),P=t.n(F),T=t(123),J=r.a.memo((function(e){return r.a.createElement(S.a,{open:!0,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description"},r.a.createElement(I.a,null,r.a.createElement(A.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{style:{marginTop:50,display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement(C.a,null,r.a.createElement(P.a,null)),r.a.createElement(T.a,{component:"h1",variant:"h5"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("form",{style:{width:"100%",marginTop:"8px"},onSubmit:function(a){a.preventDefault();var t=a.currentTarget.login.value,n=a.currentTarget.password.value;e.checkAuth({login:t,password:n})}},r.a.createElement(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"login",label:"Login",name:"login",autoComplete:"login",autoFocus:!0}),r.a.createElement(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",style:{margin:"24px 0 16px"}},"\u0412\u043e\u0439\u0442\u0438"))))))})),R=t(614),W=t(616),L=t(617),U=t(618),z=t(619),B=t(297),D=t.n(B),M=t(296),q=t.n(M),G=t(624),K=r.a.memo((function(){var e=Object(o.b)(),a=r.a.useState(""),t=Object(x.a)(a,2),n=t[0],c=t[1];Object(i.useFirebaseConnect)([{path:"purchases"},{path:"users"}]);var l=Object(o.c)((function(e){return e.firebase.ordered.purchases})),s=Object(o.c)((function(e){return e.firebase.ordered.users})),u=Object(o.c)((function(e){return e.users.user})),m=Object(i.useFirebase)(),d=function(){var e=n.trim(),a={text:e,completed:!1};e&&(m.push("purchases",a),c(""))};return r.a.createElement(A.a,{id:"container",maxWidth:"sm",className:"my-4"},u?r.a.createElement(h.a,null,r.a.createElement(y.a,{container:!0,direction:"row",justify:"space-around",alignItems:"center"},r.a.createElement(N.a,{id:"standard-basic",style:{width:"70%"},value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement(b.a,{"aria-label":"comments",onClick:d,className:"icon-button"},r.a.createElement(q.a,{color:"primary",fontSize:"large"})),r.a.createElement(O.a,{variant:"contained",onClick:d,color:"primary",className:"button"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),Object(i.isLoaded)(l)?Object(i.isEmpty)(l)?r.a.createElement(h.a,{textAlign:"center",component:"h3"},"\u041f\u043e\u043a\u0443\u043f\u043e\u043a \u043d\u0435\u0442"):r.a.createElement(R.a,null,l.map((function(e){var a="checkbox-list-label-".concat(e.key);return r.a.createElement(W.a,{key:e.key,button:!0,divider:!0},r.a.createElement(L.a,null,r.a.createElement(G.a,{inputProps:{"aria-labelledby":a},checked:e.value.completed,className:e.value.completed?"color-green":"",onChange:function(){return function(e){m.update("purchases/".concat(e.key),{completed:!e.value.completed})}(e)}})),r.a.createElement(U.a,{id:a,className:e.value.completed?"line-through":"",primary:e.value.text}),r.a.createElement(z.a,null,r.a.createElement(b.a,{"aria-label":"comments",onClick:function(){return a=e.key,void m.remove("purchases/".concat(a));var a}},r.a.createElement(D.a,{style:{color:"red"}}))))}))):r.a.createElement(h.a,{textAlign:"center",component:"h3"},"Loading . . .")):r.a.createElement(J,{checkAuth:function(a){var t=a.login,n=a.password;if(s){var r=s.find((function(e){return e.value.login===t&&k.a.verify(n,e.value.password)}));r&&(localStorage.setItem("user",JSON.stringify(r.value)),e(function(e){return{type:"PUT_USER",payload:e}}(r.value)))}}}))})),_=t(298),H={user:null};var Q=Object(p.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PUT_USER":return Object(_.a)({},e,{user:a.payload});default:return e}},firebase:i.firebaseReducer});t(570);d.a.initializeApp({apiKey:"AIzaSyAvYfkBEguJn7A9MHmwN5Q1E7X8Jce3E5o",authDomain:"todos-c16da.firebaseapp.com",databaseURL:"https://todos-c16da.firebaseio.com",projectId:"todos-c16da",storageBucket:"todos-c16da.appspot.com",messagingSenderId:"753970111182",appId:"1:753970111182:web:e49eac1bab66cc7ae1a69f",measurementId:"G-M35L5MWKTE"});var X={users:{user:null}};"undefined"!==typeof Storage&&localStorage.user&&(X={users:{user:JSON.parse(localStorage.user)}});var Y=Object(p.d)(Q,X,Object(p.a)(u.a)),V={firebase:d.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:Y.dispatch};l.a.render(r.a.createElement(o.a,{store:Y},r.a.createElement(i.ReactReduxFirebaseProvider,V,r.a.createElement((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement(K,null))}),null))),document.getElementById("root"))}},[[313,1,2]]]);
//# sourceMappingURL=main.1dae14b1.chunk.js.map