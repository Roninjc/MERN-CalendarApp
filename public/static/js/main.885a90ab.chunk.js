(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{117:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(9),r=n.n(c),o=n(10),s=n(26),i=n(63),l=n(51),u=n(5),j="[ui] Open modal",d="[ui] Close modal",b="[event] Set active",m="[event] Add new",p="[event] Clear active event",f="[event] Updated event",O="[event] Deleted event",v="[event] Events loaded",h="[event] Clear events logout",x="[form] Set values",g="[form] Clear values",y="[auth] Finish checking login state",k="[auth] login",N="[auth] Logout",w={events:[],activeEvent:null},E=n(16),S=n.n(E),C=S()().minutes(0).seconds(0).add(1,"hours"),D=C.clone().add(1,"hours"),T={initEvent:{title:"Udefinert",notes:"",start:C.toDate(),end:D.toDate()}},P={modalOpen:!1},I={checking:!0},A=Object(s.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!0});case d:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:t.payload});case m:return Object(u.a)(Object(u.a)({},e),{},{events:[].concat(Object(l.a)(e.events),[t.payload])});case p:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:null});case f:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case O:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case v:return Object(u.a)(Object(u.a)({},e),{},{events:Object(l.a)(t.payload)});case h:return Object(u.a)({},w);default:return e}},form:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(u.a)(Object(u.a)({},e),{},{initEvent:t.payload});case g:return Object(u.a)(Object(u.a)({},e),{},{initEvent:T.initEvent});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.payload),{},{checking:!1});case y:return Object(u.a)(Object(u.a)({},e),{},{checking:!1});case N:return{checking:!1};default:return e}}}),_="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,F=Object(s.d)(A,_(Object(s.a)(i.a))),L=n(67),R=n(8),G=n(12),U=n.n(G),H=n(21),J=n(17),M=n.n(J),V="https://mern-calendar-jake.herokuapp.com/api",X=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(V,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},q=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(V,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(t)})},z=function(e){return{type:x,payload:e}},B=function(){return{type:g}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{end:S()(e.end).toDate(),start:S()(e.start).toDate()})}))},Q=function(e){return{type:m,payload:e}},W=function(){return{type:p}},Y=function(e){return{type:f,payload:e}},Z=function(){return{type:O}},$=function(e){return{type:v,payload:e}},ee=function(){return{type:y}},te=function(e){return{type:k,payload:e}},ne=function(){return function(e){localStorage.clear(),e({type:h}),e(B()),e(ae())}},ae=function(){return{type:N}},ce=n(19),re=n(25),oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(ce.a)(t,2),c=n[0],r=n[1],o=function(){r(e)},s=function(e){var t=e.target;r(Object(u.a)(Object(u.a)({},c),{},Object(re.a)({},t.name,t.value)))};return[c,s,o]},se=(n(87),n(2)),ie=function(){var e=Object(o.b)(),t=oe({}),n=Object(ce.a)(t,2),a=n[0],c=n[1],r=a.lEmail,s=a.lPassword,i=oe({}),l=Object(ce.a)(i,2),u=l[0],j=l[1],d=u.rName,b=u.rEmail,m=u.rPassword1,p=u.rPassword2;return Object(se.jsx)("div",{className:"container login-container",children:Object(se.jsxs)("div",{className:"row",children:[Object(se.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(se.jsx)("h3",{children:"Log in"}),Object(se.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=r,a=s,function(){var e=Object(H.a)(U.a.mark((function e(t){var c,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X("auth",{email:n,password:a},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(r=e.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(te({uid:r.uid,name:r.name}))):M.a.fire("Feil",r.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(se.jsx)("div",{className:"form-group",children:Object(se.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",name:"lEmail",value:r,onChange:c})}),Object(se.jsx)("div",{className:"form-group",children:Object(se.jsx)("input",{type:"password",className:"form-control",placeholder:"Passord",name:"lPassword",value:s,onChange:c})}),Object(se.jsx)("div",{className:"form-group center",children:Object(se.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(se.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(se.jsx)("h3",{children:"Registrering"}),Object(se.jsxs)("form",{onSubmit:function(t){var n,a,c;t.preventDefault(),m!==p&&M.a.fire("Feil","Passordene er ikke de samme","error"),e((n=d,a=b,c=m,function(){var e=Object(H.a)(U.a.mark((function e(t){var r,o;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X("auth/new",{name:n,email:a,password:c},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(te({uid:o.uid,name:o.name}))):M.a.fire("Feil",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(se.jsx)("div",{className:"form-group",children:Object(se.jsx)("input",{type:"text",className:"form-control",placeholder:"Navn",name:"rName",value:d,onChange:j})}),Object(se.jsx)("div",{className:"form-group",children:Object(se.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",name:"rEmail",value:b,onChange:j})}),Object(se.jsx)("div",{className:"form-group",children:Object(se.jsx)("input",{type:"password",className:"form-control",placeholder:"Passord",name:"rPassword1",value:m,onChange:j})}),Object(se.jsx)("div",{className:"form-group",children:Object(se.jsx)("input",{type:"password",className:"form-control",placeholder:"Gjenta passord",name:"rPassword2",value:p,onChange:j})}),Object(se.jsx)("div",{className:"form-group center",children:Object(se.jsx)("input",{type:"submit",className:"btnSubmit",value:"Opprett konto"})})]})]})]})})},le=n(50),ue=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(se.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(se.jsx)("span",{className:"navbar-brand",children:t}),Object(se.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e(ne())},children:[Object(se.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(se.jsx)("span",{children:" Log ut"})]})]})},je={allDay:"Hele dagen",previous:"<",next:">",today:"I dag",month:"M\xe5ned",week:"Uke",day:"Dag",agenda:"Agenda",date:"Dato",time:"Time",event:"Event",noEventsInRange:"Det er ikke mer event her",showMore:function(e){return"+ Se mer (".concat(e,")")}},de=function(e){var t=e.event,n=t.title,a=t.user;return Object(se.jsxs)("div",{children:[Object(se.jsxs)("strong",{children:[" ",n," "]}),Object(se.jsxs)("span",{children:["- ",a.name," "]})]})},be=n(46),me=n.n(be),pe=n(47),fe=n.n(pe),Oe=function(){return{type:j}},ve=(n(117),n(62),{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}});me.a.setAppElement("#root");var he=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).modalOpen,n=Object(o.c)((function(e){return e.calendar})).activeEvent,c=Object(o.c)((function(e){return e.form})).initEvent,r=Object(a.useState)(!0),s=Object(ce.a)(r,2),i=s[0],l=s[1],j=c.notes,b=c.title,m=c.start,p=c.end;Object(a.useEffect)((function(){e(n?z(n):B())}),[n,e]);var f=function(t){var n=t.target;e(z(Object(u.a)(Object(u.a)({},c),{},Object(re.a)({},n.name,n.value))))},O=function(){e({type:d}),e(W()),e(B())};return Object(se.jsxs)(me.a,{isOpen:t,onRequestClose:O,style:ve,closeTimeoutMS:200,className:"modal backdrop box-shadow",overlayClassName:"modal-fondo",children:[Object(se.jsxs)("h1",{children:[" ",n?"Redigere arrangement":"Nytt arrangement"," "]}),Object(se.jsx)("hr",{}),Object(se.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var a,r=S()(m),o=S()(p);return r.isSameOrAfter(o)?M.a.fire("Feil","Sluttid m\xe5 v\xe6re senere enn starttid","error"):b.trim()<1?l(!1):(e(n?(a=c,function(){var e=Object(H.a)(U.a.mark((function e(t){var n,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(c=e.sent).ok?t(Y(a)):M.a.fire("Feil",c.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(H.a)(U.a.mark((function t(n,a){var c,r,o,s,i;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth,r=c.uid,o=c.name,t.prev=1,t.next=4,q("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.event.id,e.user={_id:r,name:o},n(Q(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(c)),l(!0),void O())},children:[Object(se.jsxs)("div",{className:"form-group",children:[Object(se.jsx)("label",{children:"Startdato og klokkeslett"}),Object(se.jsx)(fe.a,{onChange:function(t){e(z(Object(u.a)(Object(u.a)({},c),{},{start:t})))},value:m,className:"form-control"})]}),Object(se.jsxs)("div",{className:"form-group",children:[Object(se.jsx)("label",{children:"Sluttdato og klokkeslett"}),Object(se.jsx)(fe.a,{onChange:function(t){e(z(Object(u.a)(Object(u.a)({},c),{},{end:t})))},value:p,minDate:m,className:"form-control"})]}),Object(se.jsx)("hr",{}),Object(se.jsxs)("div",{className:"form-group",children:[Object(se.jsx)("label",{children:"Tittel og notater"}),Object(se.jsx)("input",{type:"text",className:"form-control transparent ".concat(!i&&"is-invalid"),placeholder:"Hendelsestittel",name:"title",autoComplete:"off",value:b,onChange:f}),Object(se.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Kort beskrivelse"})]}),Object(se.jsxs)("div",{className:"form-group",children:[Object(se.jsx)("textarea",{type:"text",className:"form-control transparent",placeholder:"Notater",rows:"5",name:"notes",value:j,onChange:f}),Object(se.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Tilleggsinformasjon"})]}),Object(se.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(se.jsx)("i",{className:"far fa-save"}),Object(se.jsx)("span",{children:" Lagre"})]})]})]})},xe=function(){var e=Object(o.b)();return Object(se.jsx)("button",{className:"btn btn-primary fab box-shadow",onClick:function(){e(Oe())},children:Object(se.jsx)("i",{className:"fas fa-plus"})})},ge=function(){var e=Object(o.b)();return Object(se.jsxs)("button",{className:"btn btn-danger fab-danger box-shadow",onClick:function(){e(function(){var e=Object(H.a)(U.a.mark((function e(t,n){var a,c,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,q("events/".concat(a),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(r=e.sent).ok?t(Z()):M.a.fire("Feil",r.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(se.jsx)("i",{className:"fas fa-trash"}),Object(se.jsx)("span",{children:" Slutt arrangement "})]})};n(118),n(119);S.a.locale("no");var ye=Object(le.b)(S.a),ke=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,c=t.activeEvent,r=Object(o.c)((function(e){return e.form})).initEvent,s=Object(o.c)((function(e){return e.auth})).uid,i=Object(a.useState)(localStorage.getItem("lastView")||"month"),l=Object(ce.a)(i,2),j=l[0],d=l[1];Object(a.useEffect)((function(){e(function(){var e=Object(H.a)(U.a.mark((function e(t){var n,a,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,c=K(a.events),t($(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(se.jsxs)("div",{className:"calendar-screen",children:[Object(se.jsx)(ue,{}),Object(se.jsx)(le.a,{localizer:ye,events:n,startAccessor:"start",endAccessor:"end",messages:je,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:s===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:"0.8",display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(Oe())},onSelectEvent:function(t){e({type:b,payload:t})},onSelectSlot:function(t){e(W()),"doubleClick"===t.action&&(e(z(Object(u.a)(Object(u.a)({},r),{},{start:t.start,end:t.end}))),e(Oe()))},onSelecting:function(e){},selectable:!0,onView:function(e){d(e),localStorage.setItem("lastView",e)},view:j,components:{event:de}}),Object(se.jsx)(xe,{}),c&&Object(se.jsx)(ge,{}),Object(se.jsx)(he,{})]})},Ne=n(36),we=["isAuthenticated","component"],Ee=function(e){var t=e.isAuthenticated,n=e.component,a=Object(Ne.a)(e,we);return Object(se.jsx)(R.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(se.jsx)(n,Object(u.a)({},e)):Object(se.jsx)(R.a,{to:"/login"})}}))},Se=["isAuthenticated","component"],Ce=function(e){var t=e.isAuthenticated,n=e.component,a=Object(Ne.a)(e,Se);return Object(se.jsx)(R.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(se.jsx)(R.a,{to:"/"}):Object(se.jsx)(n,Object(u.a)({},e))}}))},De=(n(121),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(H.a)(U.a.mark((function e(t){var n,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("token")){e.next=4;break}return t(ee()),e.abrupt("return");case 4:return e.next=6,q("auth/renew");case 6:return n=e.sent,e.next=9,n.json();case 9:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(te({uid:a.uid,name:a.name}))):t(ee());case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(se.jsx)("div",{className:"lontainer",children:Object(se.jsxs)("div",{className:"loader",children:[Object(se.jsx)("span",{}),Object(se.jsx)("span",{}),Object(se.jsx)("span",{})]})}):Object(se.jsx)(L.a,{children:Object(se.jsx)("div",{children:Object(se.jsxs)(R.d,{children:[Object(se.jsx)(Ce,{exact:!0,path:"/login",component:ie,isAuthenticated:!!c}),Object(se.jsx)(Ee,{exact:!0,path:"/",component:ke,isAuthenticated:!!c}),Object(se.jsx)(R.a,{to:"/"})]})})})}),Te=function(){return Object(se.jsx)(o.a,{store:F,children:Object(se.jsx)(De,{})})};r.a.render(Object(se.jsx)(Te,{}),document.getElementById("root"))},62:function(e,t,n){},87:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.885a90ab.chunk.js.map