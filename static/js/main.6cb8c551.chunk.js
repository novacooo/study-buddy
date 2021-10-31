(this["webpackJsonpstudy-buddy"]=this["webpackJsonpstudy-buddy"]||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var r,o,c,i,a,l,s,u=t(0),d=t.n(u),h=t(23),f=t.n(h),m=t(2),b=t(17),j=t(4),g=t(3),x=m.c.div(r||(r=Object(g.a)(["\n  justify-self: center;\n  align-self: center;\n  padding: 20px 30px;\n  width: 100%;\n  max-width: 500px;\n  background-color: ",";\n  border-radius: 25px;\n  box-shadow: 0 5px 15px -10px hsla(0, 0%, 0%, 0.3);\n"])),(function(e){return e.theme.colors.white})),p=m.c.form(o||(o=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 17px;\n"]))),O=m.c.div(c||(c=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),v=m.c.input(i||(i=Object(g.a)(["\n  padding: 5px 8px;\n  border: 1px solid ",";\n  box-sizing: border-box;\n  border-radius: 25px;\n  font-size: ",";\n  color: ",";\n\n  &:focus {\n    box-shadow: ",";\n  }\n"])),(function(e){return e.theme.colors.lightPurple}),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.colors.darkGrey}),(function(e){return e.theme.shadows.outline})),y=m.c.label(a||(a=Object(g.a)(["\n  font-family: Montserrat, sans-serif;\n  font-weight: bold;\n  font-size: 12px;\n  color: ",";\n"])),(function(e){return e.theme.colors.darkGrey})),w=t(1),k=function(e){var n=e.label,t=e.name,r=e.id,o=e.type,c=void 0===o?"text":o,i=e.step,a=e.value,l=e.onChange;return Object(w.jsxs)(O,{children:[Object(w.jsx)(y,{htmlFor:r,children:n}),Object(w.jsx)(v,{name:t,id:r,type:c,step:i,value:a,onChange:l,"data-testid":n})]})},C=m.c.button(l||(l=Object(g.a)(["\n  padding: 7px 24px;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 100px;\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n\n  &:hover {\n    cursor: pointer;\n    background-color: ",";\n    border: 1px solid ",";\n  }\n\n  &:focus {\n    border: 1px solid ",";\n    box-shadow: ",";\n  }\n"])),(function(e){return e.theme.colors.buttonBg}),(function(e){return e.theme.colors.buttonBg}),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.fontWeight.bold}),(function(e){return e.theme.colors.darkGrey}),(function(e){return e.theme.colors.buttonBgHover}),(function(e){return e.theme.colors.buttonBgHover}),(function(e){return e.theme.colors.lightPurple}),(function(e){return e.theme.shadows.outline})),z=t(28),E=t(18),S=[{name:"Jacek Nowak",attendance:83,average:2.3},{name:"Krzysztof Batko",attendance:74,average:3.2},{name:"Patrycja Gonciarz",attendance:92,average:4.4},{name:"Olga Hahn",attendance:57,average:1.8},{name:"Pawe\u0142 Andrzejewski",attendance:67,average:3.5},{name:"Szymon Knuth",attendance:89,average:4.2},{name:"Krystian Foczpaniak",attendance:98,average:4.9}],G={users:[],handleAddUser:function(){},deleteUser:function(){}},A=d.a.createContext(G),N=function(e){var n=e.children,t=Object(u.useState)(S),r=Object(E.a)(t,2),o=r[0],c=r[1];return Object(w.jsx)(A.Provider,{value:{users:o,handleAddUser:function(e){var n={name:e.name,attendance:parseInt(e.attendance),average:parseFloat(e.average)};c([n].concat(Object(z.a)(o)))},deleteUser:function(e){var n=o.filter((function(n){return n.name!==e}));c(n)}},children:n})},R=t(16),F=t(9);!function(e){e.INPUT_CHANGE="INPUT_CHANGE",e.CLEAR_VALUES="CLEAR_VALUES",e.CONSENT_TOGGLE="CONSENT_TOGGLE",e.THROW_ERROR="THROW_ERROR"}(s||(s={}));var T,W,P,B,L,_,U,H=function(e,n){switch(n.type){case s.INPUT_CHANGE:return n.field?Object(F.a)(Object(F.a)({},e),{},Object(R.a)({},n.field,n.value)):e;case s.CLEAR_VALUES:return n.initialFormState?Object(F.a)({},n.initialFormState):e;case s.CONSENT_TOGGLE:return Object(F.a)(Object(F.a)({},e),{},{consent:!e.consent});case s.THROW_ERROR:return n.errorValue?Object(F.a)(Object(F.a)({},e),{},{error:n.errorValue}):e;default:return e}},I={name:"",attendance:"",average:"",consent:!1,error:""},q=function(){var e=Object(u.useContext)(A).handleAddUser,n=function(e){var n=Object(u.useReducer)(H,e),t=Object(E.a)(n,2),r=t[0],o=t[1];return{formValues:r,handleInputChange:function(e){o({type:s.INPUT_CHANGE,field:e.target.name,value:e.target.value})},handleClearForm:function(){o({type:s.CLEAR_VALUES,initialFormState:e})},handleThrowError:function(e){o({type:s.THROW_ERROR,errorValue:e})},handleToggleConsent:function(){o({type:s.CONSENT_TOGGLE})}}}(I),t=n.formValues,r=n.handleInputChange,o=n.handleClearForm,c=n.handleThrowError,i=n.handleToggleConsent;return Object(w.jsx)(x,{children:Object(w.jsxs)(p,{onSubmit:function(n){n.preventDefault(),t.consent?(e(t),o()):c("You need to give consent!")},children:[Object(w.jsx)(k,{label:"Name",name:"name",id:"name",value:t.name,onChange:r}),Object(w.jsx)(k,{label:"Attendance",name:"attendance",id:"attendance",type:"number",value:t.attendance,onChange:r}),Object(w.jsx)(k,{label:"Average",name:"average",id:"average",type:"number",step:.1,value:t.average,onChange:r}),Object(w.jsx)(k,{label:"Consent",name:"consent",id:"consent",type:"checkbox",value:t.average,onChange:i}),Object(w.jsx)(C,{type:"submit",children:"Add user"}),t.error?Object(w.jsx)("p",{children:t.error}):null]})})},D=m.c.div(T||(T=Object(g.a)(["\n  justify-self: center;\n  align-self: center;\n  padding: 20px 30px;\n  width: 100%;\n  max-width: 500px;\n  background-color: ",";\n  border-radius: 25px;\n  box-shadow: 0 5px 15px -10px hsla(0, 0%, 0%, 0.3);\n"])),(function(e){return e.theme.colors.white})),V=m.c.ul(W||(W=Object(g.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))),M=m.c.div(P||(P=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n"]))),J=m.c.p(B||(B=Object(g.a)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n"])),(function(e){return e.theme.fontSize.l}),(function(e){return e.theme.fontWeight.bold}),(function(e){return e.theme.colors.darkGrey})),K=m.c.div(L||(L=Object(g.a)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n"])),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.colors.darkGrey})),Z=function(e){var n=e.name,t=e.attendance,r=e.className;return Object(w.jsxs)(M,{className:r,children:[Object(w.jsx)(J,{children:n}),Object(w.jsxs)(K,{children:["attendance ",t,"%"]})]})},Y=["title","titleId"];function Q(){return Q=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Q.apply(this,arguments)}function X(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function $(e,n){var t=e.title,r=e.titleId,o=X(e,Y);return u.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:n,"aria-labelledby":r},o),t?u.createElement("title",{id:r},t):null,_||(_=u.createElement("path",{d:"M20.49,3.51a12,12,0,1,0,0,17A12,12,0,0,0,20.49,3.51ZM19.18,19.17a10.15,10.15,0,0,1-14.35,0,10.14,10.14,0,0,1,0-14.34A10.14,10.14,0,0,1,19.18,19.17Z"})),U||(U=u.createElement("path",{d:"M15.74,14.49,13.25,12l2.49-2.49a.89.89,0,0,0,0-1.25.86.86,0,0,0-1.24,0L12,10.75,9.5,8.26a.86.86,0,0,0-1.24,0,.88.88,0,0,0,0,1.25L10.75,12,8.26,14.49a.88.88,0,0,0,0,1.25.89.89,0,0,0,.62.26.87.87,0,0,0,.62-.26L12,13.25l2.5,2.49a.87.87,0,0,0,.62.26.89.89,0,0,0,.62-.26A.88.88,0,0,0,15.74,14.49Z"})))}var ee,ne,te,re,oe,ce,ie,ae,le,se,ue,de,he,fe,me,be,je,ge,xe,pe,Oe,ve,ye,we,ke,Ce,ze=u.forwardRef($),Ee=(t.p,m.c.button(ee||(ee=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  width: 25px;\n  height: 25px;\n  background-color: ",";\n  border: none;\n  border-radius: 50px;\n  color: ",";\n\n  &:hover {\n    cursor: pointer;\n    background-color: ",";\n  }\n\n  &:focus {\n    box-shadow: ",";\n  }\n"])),(function(e){return e.theme.colors.grey}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.greyHover}),(function(e){return e.theme.shadows.outline}))),Se=Object(m.c)(ze)(ne||(ne=Object(g.a)(["\n  width: 15px;\n  height: 15px;\n  fill: ",";\n"])),(function(e){return e.theme.colors.white})),Ge=function(e){var n=e.className,t=e.onClick;return Object(w.jsx)(Ee,{className:n,onClick:t,children:Object(w.jsx)(Se,{})})},Ae=m.c.li(te||(te=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: 25px 0;\n\n  &:not(:last-child)::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.border})),Ne=Object(m.c)(Z)(re||(re=Object(g.a)(["\n  margin-left: 25px;\n"]))),Re=Object(m.c)(Ge)(oe||(oe=Object(g.a)(["\n  margin-left: 15px;\n"]))),Fe=m.c.div(ce||(ce=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 3.4rem;\n  height: 3.4rem;\n  background: ",";\n  border-radius: 1.7rem;\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n"])),(function(e){var n=e.theme,t=e.average;return t>4?n.colors.success:t>3?n.colors.warning:t>2?n.colors.error:n.colors.grey}),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.fontWeight.bold}),(function(e){return e.theme.colors.white})),Te=function(e){var n=e.average;return Object(w.jsx)(Fe,{average:n,children:n})},We=function(e){var n=e.data,t=n.name,r=n.attendance,o=n.average,c=Object(u.useContext)(A).deleteUser;return Object(w.jsxs)(Ae,{children:[Object(w.jsx)(Te,{average:o}),Object(w.jsx)(Ne,{name:t,attendance:r}),Object(w.jsx)(Re,{onClick:function(){c(t)}})]})},Pe=function(){var e=Object(u.useContext)(A).users;return Object(w.jsx)(V,{children:e.map((function(e){return Object(w.jsx)(We,{data:e},e.name)}))})},Be=function(){return Object(w.jsx)(D,{children:Object(w.jsx)(Pe,{})})},Le=Object(m.b)(ie||(ie=Object(g.a)(["\n  *, *::before, *::after {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html {\n    height: 100%;\n    font-size: 62.5%;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    font-size: 1.6rem;\n    font-family: 'Montserrat', sans-serif;\n\n    * {\n      margin: 0;\n      padding: 0;\n      font-family: 'Montserrat', sans-serif;\n    }\n  }\n\n  input:focus,\n  select:focus,\n  textarea:focus,\n  button:focus {\n    outline: none;\n  }\n\n  #root {\n    height: 100%;\n  }\n"]))),_e={colors:{white:"#FFFFFF",lightGrey:"#F7F8FA",grey:"#C0C7D6",greyHover:"#A9B3C7",darkGrey:"#737C8E",black:"#111111",success:"#8FCB81",error:"#CB8581",warning:"#E1D888",lightPurple:"#C0C7D6",border:"#DFE2E8",buttonBg:"#DFE2EB",buttonBgHover:"#D6DBE7"},fontSize:{xl:"2.4rem",l:"1.7rem",m:"1.2rem",s:"1.1rem"},fontWeight:{regular:"400",bold:"700"},shadows:{outline:"0px 0px 0px 3px rgba(192, 199, 214, 0.4)",component:"-2px 4px 10px rgba(115, 124, 142, 0.09);"}},Ue=m.c.div(ae||(ae=Object(g.a)(["\n  display: grid;\n  grid-template-rows: 80px 1fr;\n  grid-template-columns: 150px 1fr 0.6fr;\n  overflow-y: hidden;\n  width: 100%;\n  height: 100vh;\n  background-color: ",";\n"])),(function(e){return e.theme.colors.lightGrey})),He=m.c.div(le||(le=Object(g.a)(["\n  width: 22px;\n  height: 3px;\n  background-color: ",";\n"])),(function(e){return e.theme.colors.lightGrey})),Ie=Object(m.c)(b.b)(se||(se=Object(g.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 5px;\n  width: 100%;\n  text-decoration: none;\n\n  &.active "," {\n    background-color: ",";\n  }\n"])),He,(function(e){return e.theme.colors.border})),qe=m.c.p(ue||(ue=Object(g.a)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n"])),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.fontWeight.bold}),(function(e){return e.theme.colors.darkGrey})),De=function(e){var n=e.to,t=e.children;return Object(w.jsxs)(Ie,{exact:!0,to:n,activeClassName:"active",children:[Object(w.jsx)(qe,{children:t}),Object(w.jsx)(He,{})]})},Ve=m.c.div(de||(de=Object(g.a)(["\n  grid-row: 1 / 3;\n  grid-column: 1 / 1;\n  width: 100%;\n  min-height: 100%;\n  background-color: ",";\n  border-right: 1px solid ",";\n"])),(function(e){return e.theme.colors.lightGrey}),(function(e){return e.theme.colors.border})),Me=m.c.div(he||(he=Object(g.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-top: 20px;\n  padding: 0 15px;\n  width: 100%;\n  height: 60px;\n  background-color: ",";\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  text-align: end;\n"])),(function(e){return e.theme.colors.darkGrey}),(function(e){return e.theme.fontSize.l}),(function(e){return e.theme.fontWeight.bold}),(function(e){return e.theme.colors.white})),Je=m.c.nav(fe||(fe=Object(g.a)(["\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  gap: 15px;\n"]))),Ke=function(){return Object(w.jsxs)(Ve,{children:[Object(w.jsxs)(Me,{children:["Study",Object(w.jsx)("br",{}),"Buddy"]}),Object(w.jsxs)(Je,{children:[Object(w.jsx)(De,{to:"/",children:"Dashboard"}),Object(w.jsx)(De,{to:"/add-user",children:"Add user"})]})]})},Ze=m.c.div(me||(me=Object(g.a)(["\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0 40px;\n  border-bottom: 1px solid ",";\n\n  "," {\n    padding: 12px 24px;\n    width: 100%;\n    max-width: 470px;\n    border: none;\n    box-shadow: ",";\n    font-size: ",";\n    font-weight: ",";\n\n    &::placeholder {\n      color: ",";\n    }\n  }\n"])),(function(e){return e.theme.colors.border}),v,(function(e){return e.theme.shadows.component}),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.colors.grey})),Ye=m.c.div(be||(be=Object(g.a)(["\n  margin-right: 40px;\n"]))),Qe=m.c.p(je||(je=Object(g.a)(["\n  margin: 3px 0;\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.theme.colors.darkGrey}),(function(e){var n=e.theme;return e.name?n.fontSize.l:n.fontSize.m}),(function(e){var n=e.theme;return e.name?n.fontWeight.bold:n.fontWeight.regular})),Xe=function(){return Object(w.jsxs)(Ze,{children:[Object(w.jsxs)(Ye,{children:[Object(w.jsx)(Qe,{children:"Logged as:"}),Object(w.jsx)(Qe,{name:!0,children:"Teacher"})]}),Object(w.jsx)(v,{placeholder:"Search for student..."})]})},$e=m.c.div(ge||(ge=Object(g.a)(["\n  grid-row: 1 / 3;\n  grid-column: 3 / 3;\n  overflow-y: scroll;\n  padding: 30px 45px;\n  border-left: 1px solid ",";\n"])),(function(e){return e.theme.colors.border})),en=m.c.h3(xe||(xe=Object(g.a)(["\n  font-size: 2rem;\n  font-weight: ",";\n  color: ",";\n"])),(function(e){return e.theme.fontWeight.bold}),(function(e){return e.theme.colors.darkGrey})),nn=m.c.div(pe||(pe=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  margin-top: 25px;\n"]))),tn=m.c.div(Oe||(Oe=Object(g.a)(["\n  padding: 25px 30px;\n  width: 100%;\n  background-color: ",";\n  border-radius: 15px;\n  box-shadow: ",";\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.shadows.component})),rn=m.c.h3(ve||(ve=Object(g.a)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n"])),(function(e){return e.theme.fontSize.l}),(function(e){return e.theme.fontWeight.bold}),(function(e){return e.theme.colors.darkGrey})),on=m.c.h5(ye||(ye=Object(g.a)(["\n  margin-top: 3px;\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n"])),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.colors.darkGrey})),cn=m.c.div(we||(we=Object(g.a)(["\n  display: flex;\n\n  img {\n    margin-left: 20px;\n    width: calc(50% - 20px);\n    object-fit: cover;\n  }\n"]))),an=m.c.p(ke||(ke=Object(g.a)(["\n  margin-top: 12px;\n  line-height: 1.6;\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n"])),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.colors.darkGrey})),ln=Object(m.c)(C)(Ce||(Ce=Object(g.a)(["\n  margin-top: 18px;\n"]))),sn=[{id:"article-01",title:"New computers for all lecturers",category:"Staff News",content:"Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam. In\n          turpis sem vestibulum ut in ut. Fringilla orci, condimentum tellus leo nunc, vitae eu. Diam euismod enim integer facilisi sed. Pretium\n          hendrerit quis egestas eget at magna ac commodo volutpat."},{id:"article-02",title:"Business course for best students",category:"Students",content:"Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam.",image:"https://unsplash.it/500/400"},{id:"article-03",title:"All exams postponed!",category:"Staff News",content:"Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam."}],un=function(){return Object(w.jsxs)($e,{children:[Object(w.jsx)(en,{children:"University news feed"}),Object(w.jsx)(nn,{children:sn.map((function(e){var n=e.id,t=e.title,r=e.category,o=e.content,c=e.image,i=void 0===c?null:c;return Object(w.jsxs)(tn,{children:[Object(w.jsx)(rn,{children:t}),Object(w.jsx)(on,{children:r}),Object(w.jsxs)(cn,{children:[Object(w.jsx)(an,{children:o}),i&&Object(w.jsx)("img",{alt:t,src:i})]}),Object(w.jsx)(ln,{children:"Read more"})]},n)}))})]})},dn=function(e){var n=e.children;return Object(w.jsxs)(Ue,{children:[Object(w.jsx)(Ke,{}),Object(w.jsx)(Xe,{}),n,Object(w.jsx)(un,{})]})},hn=function(){return Object(w.jsx)(b.a,{children:Object(w.jsxs)(m.a,{theme:_e,children:[Object(w.jsx)(Le,{}),Object(w.jsx)(dn,{children:Object(w.jsx)(N,{children:Object(w.jsxs)(j.c,{children:[Object(w.jsx)(j.a,{exact:!0,path:"/",children:Object(w.jsx)(Be,{})}),Object(w.jsx)(j.a,{exact:!0,path:"/add-user",children:Object(w.jsx)(q,{})})]})})})]})})};f.a.render(Object(w.jsx)(d.a.StrictMode,{children:Object(w.jsx)(hn,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.6cb8c551.chunk.js.map