(this.webpackJsonppurchases=this.webpackJsonppurchases||[]).push([[0],{329:function(e,t,a){e.exports=a(604)},509:function(e,t){},511:function(e,t){},543:function(e,t){},544:function(e,t){},603:function(e,t,a){},604:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),o=a(32),i=a(30),u=a(188),m=a.n(u),s=(a(501),a(503),a(54)),d=a(306),p=a(640),f=a(643),E=a(645),b=a(308),v=a.n(b),h=a(307),g=a.n(h),y=a(657),O=a(644),j=function(){var e=Object(o.c)((function(e){return e.users.user})),t=Object(o.b)();return r.a.createElement(p.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement(y.a,{flexGrow:1}),r.a.createElement(y.a,{display:"flex"},r.a.createElement(O.a,{container:!0,direction:"row",alignItems:"center"},e?r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,"\u041f\u0440\u0438\u0432\u0435\u0442, ",e.name),r.a.createElement(E.a,{color:"inherit",onClick:function(){localStorage.removeItem("user"),t({type:"LOGOUT_USER"})}},r.a.createElement(g.a,null))):r.a.createElement(E.a,{color:"inherit"},r.a.createElement(v.a,null))))))},x=a(130),w=a(315),k=a(309),S=a.n(k),I=a(649),C=a(661),R=a(646),F=a(647),N=a(662),T=a(655),U=a(310),A=a.n(U),W=a(131),L=r.a.memo((function(e){return r.a.createElement(C.a,{open:!0,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description"},r.a.createElement(R.a,null,r.a.createElement(F.a,{component:"main",maxWidth:"xs"},r.a.createElement(y.a,{mt:6,display:"flex",flexDirection:"column",alignItems:"center"},r.a.createElement(N.a,null,r.a.createElement(A.a,null)),r.a.createElement(W.a,{component:"h1",variant:"h5"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("form",{style:{width:"100%",marginTop:"8px"},onSubmit:function(t){t.preventDefault();var a=t.currentTarget.login.value,n=t.currentTarget.password.value;e.checkAuth({login:a,password:n})}},r.a.createElement(T.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"login",label:"Login",name:"login",autoComplete:"login",autoFocus:!0}),r.a.createElement(T.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",style:{margin:"24px 0 16px"}},"\u0412\u043e\u0439\u0442\u0438"))))))})),P=a(311),D=a.n(P),J=r.a.memo((function(e){var t=e.titleItem,a=r.a.useState(""),l=Object(x.a)(a,2),c=l[0],o=l[1],u=Object(n.useRef)(document.createElement("input")),m=Object(i.useFirebase)(),s=function(e){e.preventDefault();var a=c.trim(),n={text:a,completed:!1,timestamp:Date.now()};a&&(m.push(t,n),o(""),u.current.focus())};return r.a.createElement("form",{onSubmit:s},r.a.createElement(O.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(T.a,{id:"standard-basic",style:{width:"70%"},value:c,inputRef:u,onChange:function(e){return o(e.target.value)}}),r.a.createElement(E.a,{"aria-label":"comments",onClick:s,className:"icon-button"},r.a.createElement(D.a,{color:"primary",fontSize:"large"})),r.a.createElement(I.a,{variant:"contained",onClick:s,color:"primary",className:"button"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))})),G=a(312),M=function(){return Object(G.a)((function(e,t){return e.firebase.ordered[t]}),(function(e){return null===e||void 0===e?void 0:e.sort((function(e,t){return e.value.timestamp>t.value.timestamp?1:-1})).sort((function(e,t){return e.value.completed>t.value.completed?1:-1}))}))},_=a(648),z=a(650),B=a(651),q=a(652),K=a(653),H=a(313),Q=a.n(H),X=a(660),Y=r.a.memo((function(e){var t=e.titleItem,a=Object(n.useMemo)(M,[]),l=Object(o.c)((function(e){return a(e,t)})),c=Object(i.useFirebase)(),u=function(e){c.remove("".concat(t,"/").concat(e))};return r.a.createElement(r.a.Fragment,null,Object(i.isLoaded)(l)?Object(i.isEmpty)(l)?r.a.createElement(y.a,{textAlign:"center",component:"h3"},"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442"):r.a.createElement(_.a,null,l.map((function(e){var a="checkbox-list-label-".concat(e.key);return r.a.createElement(z.a,{key:e.key,button:!0,divider:!0},r.a.createElement(B.a,null,r.a.createElement(X.a,{inputProps:{"aria-labelledby":a},checked:e.value.completed,className:e.value.completed?"color-green":"",onChange:function(){return function(e){c.update("".concat(t,"/").concat(e.key),{completed:!e.value.completed})}(e)}})),r.a.createElement(q.a,{id:a,className:e.value.completed?"line-through":"",primary:e.value.text}),r.a.createElement(K.a,null,r.a.createElement(E.a,{"aria-label":"comments",onClick:function(){return u(e.key)}},r.a.createElement(Q.a,{style:{color:"red"}}))))})),r.a.createElement(I.a,{variant:"contained",onClick:function(){l.forEach((function(e){return u(e.key)}))},color:"primary",className:"button-remove"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435")):r.a.createElement(y.a,{textAlign:"center",component:"h3"},"Loading . . ."))})),V=a(314),Z=a.n(V),$=a(658),ee=a(654),te=function(e){var t=e.children,a=e.value,n=e.index,l=Object(w.a)(e,["children","value","index"]);return r.a.createElement(W.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},l),a===n&&r.a.createElement(y.a,{py:3},t))},ae=r.a.memo((function(){var e=r.a.useState(0),t=Object(x.a)(e,2),a=t[0],n=t[1],l=Object(o.b)();Object(i.useFirebaseConnect)([{path:"purchases"},{path:"others"},{path:"users"}]);var c=Object(o.c)((function(e){return e.firebase.ordered.users})),u=Object(o.c)((function(e){return e.users.user}));return r.a.createElement(F.a,{id:"container",maxWidth:"sm",className:"my-4"},u?r.a.createElement(y.a,null,r.a.createElement(p.a,{position:"static",color:"default"},r.a.createElement($.a,{value:a,onChange:function(e,t){n(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth"},r.a.createElement(ee.a,{label:"\u041f\u043e\u043a\u0443\u043f\u043a\u0438"}),r.a.createElement(ee.a,{label:"\u0414\u0440\u0443\u0433\u043e\u0435"}))),r.a.createElement(Z.a,{index:a,onChangeIndex:function(e){n(e)}},r.a.createElement(te,{value:a,index:0},r.a.createElement(J,{titleItem:"purchases"}),r.a.createElement(Y,{titleItem:"purchases"})),r.a.createElement(te,{value:a,index:1},r.a.createElement(J,{titleItem:"others"}),r.a.createElement(Y,{titleItem:"others"})))):r.a.createElement(L,{checkAuth:function(e){var t=e.login,a=e.password;if(c){var n=c.find((function(e){return e.value.login===t&&S.a.verify(a,e.value.password)}));n&&(localStorage.setItem("user",JSON.stringify(n.value)),l(function(e){return{type:"PUT_USER",payload:e}}(n.value)))}}}))})),ne=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement(ae,null))},re=a(189),le={user:null};var ce=Object(s.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PUT_USER":return Object(re.a)({},e,{user:t.payload});case"LOGOUT_USER":return Object(re.a)({},e,{user:null});default:return e}},firebase:i.firebaseReducer});a(603);m.a.initializeApp({apiKey:"AIzaSyAvYfkBEguJn7A9MHmwN5Q1E7X8Jce3E5o",authDomain:"todos-c16da.firebaseapp.com",databaseURL:"https://todos-c16da.firebaseio.com",projectId:"todos-c16da",storageBucket:"todos-c16da.appspot.com",messagingSenderId:"753970111182",appId:"1:753970111182:web:e49eac1bab66cc7ae1a69f",measurementId:"G-M35L5MWKTE"});var oe={users:{user:null}};"undefined"!==typeof Storage&&localStorage.user&&(oe={users:{user:JSON.parse(localStorage.user)}});var ie=Object(s.createStore)(ce,oe,Object(d.composeWithDevTools)()),ue={firebase:m.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:ie.dispatch};c.a.render(r.a.createElement(o.a,{store:ie},r.a.createElement(i.ReactReduxFirebaseProvider,ue,r.a.createElement(ne,null))),document.getElementById("root"))}},[[329,1,2]]]);
//# sourceMappingURL=main.197b97b6.chunk.js.map