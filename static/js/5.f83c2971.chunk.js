(this.webpackJsonpnorrrr=this.webpackJsonpnorrrr||[]).push([[5],{286:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(48),s=t(49),r=t(51),i=t(50),o=t(0),c=t.n(o),u=t(16),l=t(9),m=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var a=function(a){Object(r.a)(o,a);var t=Object(i.a)(o);function o(){return Object(n.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(l.a,{to:"/login"})}}]),o}(c.a.Component);return Object(u.b)(m)(a)}},287:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__x-shV",dialog_item:"Dialogs_dialog_item__2svWL",messages:"Dialogs_messages__oWjPR"}},295:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(16),i=t(7),o=t(123),c=t(286),u=t(125),l=t(126),m=t(68),d=t(62),g=t(12),f=t(287),b=t.n(f),p=function(e){return s.a.createElement("div",{className:b.a.dialog},s.a.createElement(g.b,{to:"/dialogs/".concat(e.id)},e.name))},E=function(e){return s.a.createElement("div",{className:b.a.message},e.message)},h=Object(m.a)(100),v=Object(l.a)({form:"DialogAddmessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(u.a,{component:d.b,validate:[m.b,h],name:"newMessageBody",rows:"3",cols:"15",placeholder:"gra"}),s.a.createElement("button",null,"Add Message")))})),_=function(e){var a=e.state.dialogsData.map((function(e){return s.a.createElement(p,{name:e.name,id:e.id,key:e.id})})),t=e.state.messagesData.map((function(e){return s.a.createElement(E,{message:e.message,key:e.id})}));return s.a.createElement("div",{className:b.a.dialogs},s.a.createElement("div",{className:b.a.dialog_items},a),s.a.createElement("div",{className:b.a.messages},t),s.a.createElement(v,{onSubmit:function(a){e.addMessage(a.newMessageBody)}}))},j=Object(i.d)(Object(r.b)((function(e){return{state:e.DialogsPage}}),(function(e){return{addMessage:function(a){e(Object(o.a)(a))}}})),c.a)(_);a.default=j}}]);
//# sourceMappingURL=5.f83c2971.chunk.js.map