(this.webpackJsonptherabot=this.webpackJsonptherabot||[]).push([[0],{24:function(e,t,n){e.exports=n(39)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(20),l=n.n(i),c=n(5),r=n(6),s=n(8),u=n(7),d=n(9),m=n(2),y=n(21),p=n(11),h=(n(29),n(14)),E=n.n(h);window.$=E.a;var v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).AppendUserConvo=n.AppendUserConvo.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"nextPath",value:function(e){this.props.history.push(e)}},{key:"AppendUserConvo",value:function(){var e=document.getElementById("ConvoUserInput").value;document.getElementById("ConvoHistory").innerHTML+='<p id="UserComment">'+e+"</p>",document.getElementById("ConvoHistory").innerHTML+='<p id="TherabotComment"> FLARP FLERP FLORP </p>',E()("#ConvoHistory").scrollTop(E()("#ConvoHistory")[0].scrollHeight),E()("#ConvoUserInput").val("")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h1",null,"Welcome to Therabot"),o.a.createElement("div",{id:"ContainerBox"},o.a.createElement("textarea",{id:"ConvoUserInput",type:"text",placeholder:"What's on your mind?",defaultValue:""}),o.a.createElement("div",{id:"ConvoHistory"})),o.a.createElement("div",{id:"Buttons"},o.a.createElement("button",{id:"LeaveRoom",type:"button",onClick:function(){return e.nextPath("/thankyou")}},"Leave Chatroom"),o.a.createElement("button",{id:"UserSubmitConvo",type:"button",onClick:this.AppendUserConvo},"Submit")))}}]),t}(o.a.Component),b=(n(30),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).ChkSignIn=n.ChkSignIn.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"nextPath",value:function(e){this.props.history.push(e)}},{key:"ChkSignIn",value:function(){var e=document.getElementById("LoginUseName").value,t=document.getElementById("LoginPIN").value;""===e||""===t?document.getElementById("SignInNotSuccess").style.display="block":(document.getElementById("SignInNotSuccess").style.display="none",this.nextPath("/talk"))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h1",null,"Welcome to Therabot"),o.a.createElement("div",{id:"MainBox"},o.a.createElement("div",{id:"MainBoxBanner"},o.a.createElement("div",{id:"MainTextBox"},"User Login")),o.a.createElement("input",{type:"text",id:"LoginUseName",placeholder:"Username"}),o.a.createElement("input",{type:"text",id:"LoginPIN",placeholder:"Enter your PIN"}),o.a.createElement("button",{className:"RegisterButton",type:"button",onClick:function(){return e.nextPath("/register")}},"Click here to register"),o.a.createElement("button",{className:"SignInButton",type:"submit",onClick:this.ChkSignIn},"Sign in"),o.a.createElement("div",{id:"SignInNotSuccess",style:{display:"none"}},"Cannot sign in. Please make sure all fields are filled out.")))}}]),t}(o.a.Component)),g=(n(31),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).ChkSuccessReg=n.ChkSuccessReg.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"nextPath",value:function(e){this.props.history.push(e)}},{key:"ChkSuccessReg",value:function(){var e=document.getElementById("FirstName").value,t=document.getElementById("UseName").value,n=document.getElementById("EmailAdd").value,a=document.getElementById("pin").value;""===e||""===t||""===n||""===a?(document.getElementById("success").style.display="none",document.getElementById("notsuccess").style.display="block"):(document.getElementById("success").style.display="block",document.getElementById("BackToLogin").style.display="block",document.getElementById("notsuccess").style.display="none",document.getElementById("FirstName").style.display="none",document.getElementById("UseName").style.display="none",document.getElementById("EmailAdd").style.display="none",document.getElementById("pin").style.display="none",document.getElementById("DoneButton").style.display="none")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h1",null,"Welcome to Therabot"),o.a.createElement("div",{id:"MainBox"},o.a.createElement("div",{id:"MainBoxBanner"},o.a.createElement("div",{id:"MainTextBox"},"Register")),o.a.createElement("input",{type:"text",id:"FirstName",placeholder:"First name"}),o.a.createElement("div",{id:"TextMargin"},o.a.createElement("input",{type:"text",id:"UseName",placeholder:"Username"}),o.a.createElement("input",{type:"text",id:"EmailAdd",placeholder:"E-mail address"}),o.a.createElement("input",{type:"text",id:"pin",placeholder:"Please enter a custom PIN"})),o.a.createElement("button",{id:"DoneButton",type:"button",onClick:this.ChkSuccessReg},"Done"),o.a.createElement("div",{id:"success",style:{display:"none"}},"Success! Please check your e-mail for your username and PIN."),o.a.createElement("div",{id:"notsuccess",style:{display:"none"}},"Registration was not successful. Please make sure all fields are filled out."),o.a.createElement("button",{id:"BackToLogin",type:"button",onClick:function(){return e.nextPath("/")},style:{display:"none"}},"Login")))}}]),t}(o.a.Component)),k=(n(32),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("p",null,"Thank you for using Therabot!")}}]),t}(o.a.Component)),f=(n(33),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(y.a,null,o.a.createElement(m.a,{exact:!0,path:"/",component:b}),o.a.createElement(m.a,{path:"/register",component:g}),o.a.createElement(m.a,{path:"/talk",component:v}),o.a.createElement(m.a,{path:"/thankyou",component:k}))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.f043ef9c.chunk.js.map