(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{111:function(e,s,a){},113:function(e,s,a){},234:function(e,s,a){},235:function(e,s,a){},236:function(e,s,a){},237:function(e,s,a){},238:function(e,s,a){},239:function(e,s,a){},240:function(e,s,a){},241:function(e,s,a){},242:function(e,s,a){},243:function(e,s,a){},244:function(e,s,a){},245:function(e,s,a){},246:function(e,s,a){},247:function(e,s,a){},248:function(e,s,a){},249:function(e,s,a){},250:function(e,s,a){},251:function(e,s,a){},252:function(e,s,a){},253:function(e,s,a){},254:function(e,s,a){},255:function(e,s,a){},256:function(e,s,a){},257:function(e,s,a){},258:function(e,s,a){},259:function(e,s,a){"use strict";a.r(s);var t=a(0),c=a(1),n=a.n(c),r=a(46),i=a.n(r),l=(a(111),a(112),a(25)),o=a(27),j=(a(113),a(2)),d=a.p+"static/media/logo.8a689d12.png",b=a(32),m=a(7),u=a(21),h=a(50);a(213);var x=function(e){var s=e.className,a=e.name,c=(e.label,Object(h.a)(e,["className","name","label"]));return Object(t.jsx)("input",Object(u.a)({className:s,id:a,name:a},c))},g=function(e){var s=e.touched,a=e.message;return s?a?Object(t.jsx)("div",{className:"form-message invalid",children:a}):Object(t.jsx)("div",{className:"form-message invalid",children:"all-good"}):Object(t.jsx)("div",{className:"form-message invalid"})},O=a(15),p=a(4),f=a(31),v=a.n(f),A="Send_info",N="Log_in",w=function(e){var s=e.show,a=e.close;Object(c.useEffect)((function(){document.title="MartReach | Boost your Digital Awareness"}));var r=Object(O.c)((function(e){return e.islogged})),i=Object(O.b)();return r?Object(t.jsx)(p.a,{to:"/"}):Object(t.jsxs)(n.a.Fragment,{children:[Object(t.jsx)("div",{style:Object(l.a)({transform:s?"translateY(0vh)":"translateY(-100vh)",opacity:s?"1":"0",display:s?"block":"none",position:s?"fixed":"",top:"0",left:"0",width:"100%",height:"100%",paddingRight:"19px",zIndex:"100000",overflowX:"hidden",overflowY:"auto",marginTop:"-1%"},"paddingRight","19px"),className:"model-wrapper modal-fade",role:"dialog",tabIndex:"-1","aria-labelledby":"signInLabel","aria-modal":"true",children:Object(t.jsx)("div",{className:"modal-dialog",children:Object(t.jsxs)("div",{style:{width:"93%",height:"100vh"},className:"modal-content",children:[Object(t.jsxs)("div",{className:"login-modal-header modal-header",children:[Object(t.jsx)("h5",{className:"modal-title",children:"Sign In"}),Object(t.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(t.jsx)("span",{onClick:a,"aria-hidden":"true",children:"\xd7"})})]}),Object(t.jsx)("div",{className:"modal-body",children:Object(t.jsx)("div",{className:"center-form",onsubmit:" return validate() ",children:Object(t.jsx)("div",{className:"container d-flex justify-content-center .align-items-center",children:Object(t.jsxs)("div",{className:"register d-flex flex-column .align-items-center p-4",children:[Object(t.jsxs)("div",{className:"signin d-flex justify-content-end align-items-center my-3",children:["Don't have an account yet?",Object(t.jsx)("a",{className:"ml-2",to:"/",children:"Sign Up"})]}),Object(t.jsxs)("h1",{className:"login-title font-weight-bold",children:["Welcome back to ",Object(t.jsx)("span",{children:"MartReach!"})]}),Object(t.jsx)(b.a,{initialValues:{username:"",password:""},onSubmit:function(e,s){s.setSubmitting;var a=s.resetForm;alert(JSON.stringify(e,null,2)),a(),i({type:N}),i(v.a.post("https://martreach.herokuapp.com/api/contactUs",e))},validationSchema:m.a().shape({username:m.b().min(3,"Must be at least 3 characters").max(15,"Must be 15 characters or less").required("Required"),password:m.b().required("password is required").min(8,"password is too short - should be 8 chars minimum.").matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,"password must contain at least 8 characters, one uppercase, one number and one special case character")}),children:function(e){e.isSubmitting;var s=e.values,a=e.errors,c=e.touched,n=e.handleChange,r=e.handleSubmit;return Object(t.jsxs)("form",{className:"d-flex flex-column",onSubmit:r,children:[Object(t.jsx)("p",{id:"error"}),Object(t.jsx)("div",{className:"input-field my-4",children:Object(t.jsxs)("span",{children:[Object(t.jsx)(x,{placeholder:"username",className:"d-block w-100",type:"text",onChange:n,value:s.username,name:"username"}),Object(t.jsx)(g,{touched:c.username,message:a.username})]})}),Object(t.jsx)("div",{className:"input-field my-4",children:Object(t.jsxs)("span",{children:[Object(t.jsx)(x,{placeholder:"password",className:"d-block w-100",type:"password",name:"password",onChange:n,value:s.password}),Object(t.jsx)(g,{touched:c.password,message:a.password})]})}),Object(t.jsx)("div",{className:"pass",children:Object(t.jsx)("a",{to:"/",children:" Forgot password?"})}),Object(t.jsx)(x,{className:"login-btn btn my-3",type:"submit",id:"Login",defaultValue:"Login"}),Object(t.jsxs)("div",{className:"signup_link",children:["Not a member? ",Object(t.jsx)("a",{to:"/",children:"Signup"}),Object(t.jsxs)("div",{className:"create d-flex align-items-center mt-4",children:["Sign in with:",Object(t.jsxs)("div",{className:"socials d-flex align-items-center",children:[Object(t.jsx)("a",{className:"mx-3",to:"/",children:Object(t.jsx)("i",{className:"fab fa-google"})}),Object(t.jsx)("a",{className:"mx-3",to:"/",children:Object(t.jsx)("i",{className:"fab fa-facebook-f"})}),Object(t.jsx)("a",{className:"mx-3",to:"/",children:Object(t.jsx)("i",{className:"fab fa-linkedin-in"})}),Object(t.jsx)("a",{className:"mx-3",to:"/",children:Object(t.jsx)("i",{className:"fab fa-twitter"})})]})]})]})]})}})]})})})})]})})}),Object(t.jsx)("style",{children:".modal-header {\n            background: blue;\n            color: #fff;\n          }\n          \n          .modal-header h1,\n          h2,\n          h3,\n          h4,\n          h5 {\n            font-weight: bolder;\n          }\n          \n          .modal-header button,\n          .modal-header button:hover {\n            color: #fff;\n          }\n\n        .model-wrapper{\n            transition:all 1.3s ease!important;\n        }\n        "})]})};var W=function(){var e,s=Object(c.useState)(!1),a=Object(o.a)(s,2),r=a[0],i=a[1];return Object(t.jsxs)(n.a.Fragment,{children:[r?Object(t.jsx)("div",{className:"back-drop"}):null,Object(t.jsxs)("header",{className:"header sticky-top",children:[r?Object(t.jsx)("div",{className:"back-drop"}):null,Object(t.jsx)("div",{className:"container",children:Object(t.jsxs)("nav",{className:"navbar navbar-expand-md navbar-light p-2",children:[Object(t.jsx)(j.b,{className:"navbar-brand",to:"/",children:Object(t.jsx)("img",{className:"logo-nav",src:d})}),Object(t.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(t.jsx)("span",{className:"navbar-toggler-icon"})}),Object(t.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(t.jsxs)("ul",{className:"navbar-nav mr-auto ml-auto",children:[Object(t.jsx)("li",{className:"nav-item mr-2",children:Object(t.jsxs)(j.b,{className:"nav-link nav1",to:"/",children:["Home ",Object(t.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(t.jsx)("li",{className:"nav-item mr-2",children:Object(t.jsx)(j.b,{className:"nav-link nav2",to:"/services",children:"Services"})}),Object(t.jsx)("li",{className:"nav-item mr-2",children:Object(t.jsx)(j.b,{className:"nav-link nav3",to:"/pricing",children:"Pricing"})}),Object(t.jsx)("li",{className:"nav-item mr-2",children:Object(t.jsx)(j.b,{className:"nav-link nav4",to:"/about",children:"About"})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)(j.b,{className:"nav-link nav5",to:"contact",children:"Contact"})})]}),Object(t.jsxs)("div",{className:"right-nav",children:[Object(t.jsx)(j.b,(e={onClick:function(){return i(!0)},className:"btn mr-4","data-toggle":"modal","data-target":"#signIn"},Object(l.a)(e,"onClick",(function(){return i(!0)})),Object(l.a)(e,"children","Login"),e)),Object(t.jsx)(j.b,{to:"/signup",className:"btn",children:"Sign up"})]})]})]})})]}),Object(t.jsx)(w,{show:r,close:function(){return i(!1)}})]})},y=(a(234),a(235),a.p+"static/media/MartReach logo dark.7c65732f.png");var L=function(){return Object(t.jsx)("footer",{children:Object(t.jsx)("div",{className:"container",children:Object(t.jsxs)("div",{className:"footer-content d-flex justify-content-around",children:[Object(t.jsxs)("div",{className:"company-info d-flex flex-column my-5",children:[Object(t.jsxs)("div",{className:"footer-logo mb-4",children:[Object(t.jsx)("img",{className:"logo-nav mb-4 bottomlogo",src:y}),Object(t.jsx)("p",{children:"We help small and medium business to grow their audience reach."})]}),Object(t.jsx)("div",{className:"copyright mb-3",children:Object(t.jsx)("p",{className:"font-weight-lighter",children:"MartReach \xa9 2020, All Rights Reserved."})}),Object(t.jsxs)("div",{className:"socials",children:[Object(t.jsx)(j.b,{className:"mr-4",to:"#",children:Object(t.jsx)("i",{className:"fas fa-phone-alt"})}),Object(t.jsx)(j.b,{className:"mr-4",to:"#",children:Object(t.jsx)("i",{className:"far fa-envelope"})}),Object(t.jsx)(j.b,{className:"mr-4",to:"#",children:Object(t.jsx)("i",{className:"fab fa-twitter"})}),Object(t.jsx)(j.b,{className:"mr-4",to:"#",children:Object(t.jsx)("i",{className:"fab fa-instagram"})}),Object(t.jsx)(j.b,{to:"#",children:Object(t.jsx)("i",{className:"fab fa-facebook-f"})})]})]}),Object(t.jsxs)("div",{className:"links d-flex my-5 justify-content-around",children:[Object(t.jsxs)("div",{className:"company mr-5",children:[Object(t.jsx)("p",{className:"font-weight-bold",children:"Company"}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{className:"my-4",children:Object(t.jsx)(j.b,{to:"/about",children:"About Us"})}),Object(t.jsx)("li",{className:"my-4",children:Object(t.jsx)(j.b,{to:"/contact",children:"Contact Us"})}),Object(t.jsx)("li",{className:"my-4",children:Object(t.jsx)(j.b,{to:"/pricing",children:"Pricing"})}),Object(t.jsx)("li",{children:Object(t.jsx)(j.b,{to:"/services",children:"Services"})})]})]}),Object(t.jsxs)("div",{className:"support mr-5",children:[Object(t.jsx)("p",{className:"font-weight-bold",children:"Support"}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{className:"my-4",children:Object(t.jsx)(j.b,{to:"#",children:"Support"})}),Object(t.jsx)("li",{children:Object(t.jsx)(j.b,{to:"#",children:"FAQ"})})]})]}),Object(t.jsxs)("div",{className:"newsletter",children:[Object(t.jsx)("p",{className:"font-weight-bold",children:"Stay up to date"}),Object(t.jsxs)("form",{className:"subscribe",name:"subscribe",method:"POST","data-netlify":"true",children:[Object(t.jsx)("input",{type:"email",name:"email",id:"footerEmail",placeholder:"Enter Email Address",required:!0}),Object(t.jsx)("button",{type:"submit",children:Object(t.jsx)("i",{className:"fas fa-paper-plane"})})]})]})]})]})})})};a(236),a(237),a(238);var C=function(e){return Object(t.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-6 box main-container",children:Object(t.jsxs)("div",{className:"card pricingcard p-c",children:[Object(t.jsxs)("div",{className:"card-header h-one c-h",children:[Object(t.jsx)("h2",{children:e.package}),Object(t.jsx)("h3",{children:e.amount}),Object(t.jsx)("p",{children:e.intro})]}),Object(t.jsxs)("div",{className:"card-body b-one c-b",children:[Object(t.jsx)("h3",{children:"Top features"}),e.icons,e.btn]})]})})};a(239);var Y=function(){return Object(t.jsx)(n.a.Fragment,{children:Object(t.jsx)("button",{className:"btn btn-primary btn-lg btn-block btn-two",children:"START"})})};var B=function(){return Object(t.jsxs)("div",{className:"row p-3",children:[Object(t.jsx)(C,{package:"FREE",amount:"\u20a60",intro:"Gives all the basics required to set up your business and grow",icons:Object(t.jsxs)(n.a.Fragment,{children:[Object(t.jsxs)("p",{children:[Object(t.jsx)("i",{className:"fas circleicon fa-check-circle"})," Create email template"]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("i",{className:"fas circleicon fa-check-circle"})," Create business landing page"]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("i",{className:"fas circleicon fa-check-circle"})," Dynamic template editor "]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("i",{className:"fas circleicon fa-check-circle"})," Sticky notes "]})]}),btn:Object(t.jsx)("button",{className:"btn btn-outline-dark btn-lg btn-block btn-one",children:Object(t.jsx)(j.b,{to:"#",children:"SIGN UP"})})}),Object(t.jsx)(C,{package:"PREMIUM",amount:" \u20a6500",intro:"Get better insight into growing your business that to create more customer base",icons:Object(t.jsxs)(n.a.Fragment,{children:[Object(t.jsxs)("p",{children:[Object(t.jsx)("i",{className:"fas circleicon fa-check-circle"})," Create email template"]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("i",{className:"fas circleicon fa-check-circle"})," Create business landing page"]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("i",{className:"fas circleicon fa-check-circle"})," Dynamic template editor "]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("i",{className:"fas circleicon fa-check-circle"})," Sticky notes "]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("i",{className:"fas circleicon fa-check-circle"})," Chat support"]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("i",{className:"fas circleicon fa-check-circle"}),"Create digital product campaign "]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("i",{className:"fas circleicon fa-check-circle"}),"Prioritized support"]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("i",{className:"fas circleicon fa-check-circle"}),"Phone chat"]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("i",{className:"fas circleicon fa-check-circle"})," Sticky notes "]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("i",{className:"fas circleicon fa-check-circle"}),"Form builder feature"]})]}),btn:Object(t.jsx)(Y,{})})]})};var F=function(){return Object(t.jsxs)("div",{className:"pricing",children:[Object(t.jsx)("div",{className:"containeri",children:Object(t.jsx)("h1",{children:"TRY OUR PREMIUM SERVICES FOR ONE MONTH FREE!!"})}),Object(t.jsx)(B,{})]})},S=(a(240),a(241),a(242),a(243),function(e){var s=e.type,a=e.className,c=e.content,n=Object(h.a)(e,["type","className","content"]);return Object(t.jsx)("button",Object(u.a)(Object(u.a)({type:s,className:a},n),{},{children:c}))});var k=function(){return Object(t.jsx)(j.b,{to:"/signup",children:Object(t.jsx)(S,{className:"btn get-started my-4",content:"Get Started"})})},D=a.p+"static/media/hero.80986d48.png";var M=function(){return Object(t.jsxs)(n.a.Fragment,{children:[Object(t.jsx)("div",{className:"yellow-circle"}),Object(t.jsxs)("div",{className:"main-hero",children:[Object(t.jsxs)("div",{className:"main-text",children:[Object(t.jsxs)("h3",{className:"text-first",children:["Boost your Sale ",Object(t.jsx)("br",{}),"with ",Object(t.jsx)("span",{style:{color:"#8c30f5"},children:"MartReach"})]}),Object(t.jsx)("p",{className:"text-second",children:"We help small and medium business to grow their audience reach."}),Object(t.jsx)(k,{})]}),Object(t.jsx)("div",{className:"main-img",children:Object(t.jsx)("img",{className:"lp-img",src:D,alt:""})})]})]})};var V=function(){return Object(t.jsxs)("div",{className:" container container2",children:[Object(t.jsx)(M,{}),Object(t.jsx)("div",{className:"turquoise-circle"})]})};a(95);var q=function(e){return Object(t.jsxs)(n.a.Fragment,{children:[Object(t.jsx)("p",{children:e.services}),Object(t.jsx)("p",{children:e.welcomeinfo})]})};var G=function(){return Object(t.jsxs)("div",{className:"bottom",children:[Object(t.jsxs)("div",{className:"boxxx",children:[Object(t.jsx)("i",{className:"fas fa-chart-bar lpicon"}),Object(t.jsx)(q,{services:"Sales Growth",welcomeinfo:" We help you reach more audience and grow your sales very fast and\r effectively"})]}),Object(t.jsxs)("div",{className:"boxxx",children:[Object(t.jsx)("i",{className:"fas fa-cog lpicon"}),Object(t.jsx)(q,{services:"Site Optimizing",welcomeinfo:"We provide best service to grow your sales and reach out to more target\r audience and have control over your designs"})]}),Object(t.jsxs)("div",{className:"boxxx",children:[Object(t.jsx)("i",{className:"fas fa-volume-up lpicon"}),Object(t.jsx)(q,{services:"Marketing",welcomeinfo:" With our tools and strategy your audience are ever close to your\r business than ever"})]}),Object(t.jsxs)("div",{className:"boxxx",children:[Object(t.jsx)("i",{className:"fas fa-headset lpicon"}),Object(t.jsx)(q,{services:"Support",welcomeinfo:"Our customer relation expertise are ready to talk to you 24/7. Reach\r out"})]})]})};a(244);var E=function(){return Object(t.jsxs)("div",{className:"top",children:[Object(t.jsx)("p",{children:"How we help you on growth"}),Object(t.jsx)("p",{className:"p2",children:"We provide best service to grow your sales and reach out to more target audience and have control over your designs"})]})};var K=function(){return Object(t.jsxs)("div",{className:"growth",children:[Object(t.jsx)(E,{}),Object(t.jsx)(G,{})]})};a(245),a(246);var I=function(){return Object(t.jsx)(n.a.Fragment,{children:Object(t.jsx)("div",{className:"right"})})};a(247);var R=function(){return Object(t.jsx)("div",{children:Object(t.jsxs)("div",{className:"left",children:[Object(t.jsxs)("p",{children:["Reach out to Your ",Object(t.jsx)("br",{}),"Targeted Audience"]}),Object(t.jsxs)("p",{children:["We can help you reach out to more customers,",Object(t.jsx)("br",{}),"by using our platform your required audience ",Object(t.jsx)("br",{}),"is at your door step. ",Object(t.jsx)(j.b,{to:"/about",children:"Learn More"})]})]})})};var U=function(){return Object(t.jsxs)("div",{className:"audience",children:[Object(t.jsx)(I,{}),Object(t.jsx)(R,{})]})};var Z=function(){return Object(c.useEffect)((function(){document.title="MartReach | Boost your Digital Awareness"})),Object(t.jsxs)("div",{children:[Object(t.jsx)(V,{}),Object(t.jsx)(K,{}),Object(t.jsx)(U,{})]})};a(248),a(249);var J=function(e){return Object(t.jsxs)("div",{className:"card Abtuscard margin-bottom",children:[Object(t.jsx)("h5",{className:"mission",children:e.mission}),Object(t.jsx)("div",{className:"carddiv",children:Object(t.jsx)("p",{children:e.missioninfo})})]})};var X=function(){return Object(t.jsxs)("div",{className:"who-we-are",children:[Object(t.jsx)(J,{mission:"MISSION",missioninfo:"Our mission has been to"}),Object(t.jsx)(J,{mission:"MISSION",missioninfo:"Our mission has been to "}),Object(t.jsx)(J,{mission:"OUR MARKETERS COME FIRST",missioninfo:"We are a group of people devoted to seeing your business grow from the\r scratch."})]})};a(250),a(251);var H=function(e){return Object(t.jsxs)("div",{className:"Abtusimage",children:[Object(t.jsx)("img",{src:e.img,alt:"Bravos"}),Object(t.jsx)("p",{className:"Abtus-name",children:e.name}),Object(t.jsx)("p",{className:"Abtus-name-description",children:e.namedescrip})]})},z=a.p+"static/media/Malik2.a85f5bd7.jpg",T=a.p+"static/media/chinedu-samuel.7d50a3ae.jpg",P=a.p+"static/media/caricature4.7d437ad1.svg",Q=a.p+"static/media/Aminu.667153da.png";var _=function(){return Object(t.jsxs)("div",{className:"imagediv margin-bottom",children:[Object(t.jsx)(H,{img:z,name:"Malik Muktar",namedescrip:"Back-end Developer"}),Object(t.jsx)(H,{img:"https://github.com/ekesolonge.png",name:"Longe Ekeso",namedescrip:"Back-end Developer"}),Object(t.jsx)(H,{img:T,name:"Chinedu Samuel",namedescrip:"Back-end Developer"}),Object(t.jsx)(H,{img:P,name:"Glory a.k.a. Boss Lady  a.k.a. Super Woman",namedescrip:"Front-end Developer"}),Object(t.jsx)(H,{img:Q,name:"Aminu Muhammad",namedescrip:"Front-end Developer"})]})};a(252);var $=function(){return Object(t.jsx)("div",{className:"abtusscontainer",children:Object(t.jsxs)("div",{className:"About",children:[Object(t.jsx)("h2",{className:"Aboutheading",children:"Who we are"}),Object(t.jsx)(X,{}),Object(t.jsx)(_,{})]})})},ee=a(33),se=a(28);function ae(){var e=Object(ee.a)(["\nbackground: #8c30f5;\n  color: #fff;\n  align-self: center;\n  width: 40%;\n"]);return ae=function(){return e},e}function te(){var e=Object(ee.a)(["\n  background: #8c30f51a;\n  padding-top: 4rem;\n  padding-bottom: 10rem;\n"]);return te=function(){return e},e}function ce(){var e=Object(ee.a)(["\n  color: red;\n  text-align: center;\n  justify-items: center;\n  align-items: center;\n  font-weight: 900;\n"]);return ce=function(){return e},e}function ne(){var e=Object(ee.a)(["\n  color: #8c30f5;\n"]);return ne=function(){return e},e}function re(){var e=Object(ee.a)(["\n  width: 70%;\n  border-radius: 10px;\n  background: #ffffff;\n"]);return re=function(){return e},e}var ie=se.a.div(re()),le=se.a.div(ne()),oe=(se.a.div(ce()),se.a.main(te())),je=se.a.button(ae()),de={firstName:"",lastName:"",username:"",email:"",password:""},be=m.a().shape({firstName:m.b().min(3,"Must be at least 3 characters").max(15,"Must be 15 characters or less").required("Required"),lastName:m.b().min(3,"Must be at least 3 characters").max(15,"Must be 15 characters or less").required("Required"),username:m.b().min(3,"Must be at least 3 characters").max(15,"Must be 15 characters or less").required("Required"),email:m.b().email("Invalid email address").required("Required"),password:m.b().required("Password is required").min(8,"Password is too short - should be 8 chars minimum.").matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,"Password must contain at least 8 characters, one uppercase, one number and one special case character")});function me(){Object(c.useEffect)((function(){document.title="MartReach | Boost your Digital Awareness"}));var e=Object(O.b)();return Object(t.jsx)(oe,{children:Object(t.jsx)("div",{className:"container d-flex justify-content-center .align-items-center",children:Object(t.jsxs)(ie,{className:"register d-flex flex-column .align-items-center p-5",children:[Object(t.jsxs)(le,{className:"d-flex justify-content-end align-items-center my-3",children:["Already have an account?",Object(t.jsx)(je,{children:"Sign in"})]}),Object(t.jsxs)("h1",{class:"font-weight-bold",children:["Welcome to ",Object(t.jsx)("span",{style:{color:"#8c30f5"},children:"MartReach!"})]}),Object(t.jsx)("h5",{children:"Register your account"}),Object(t.jsx)(b.a,{initialValues:de,validationSchema:be,onSubmit:function(s,a){var t=a.setSubmitting,c=a.resetForm;alert(JSON.stringify(s,null,2)),c(),e(v.a.post("https://martreach.herokuapp.com/api/users/signup",s)),setTimeout((function(){t(!1)}),1e3)},children:function(e){var s=e.values,a=e.errors,c=e.touched,n=e.handleChange,r=e.handleBlur,i=e.handleSubmit,l=e.isSubmitting;return Object(t.jsxs)("form",{onSubmit:i,children:[Object(t.jsx)(x,{type:"text",name:"firstName",placeholder:"enter your first name",onChange:n,value:s.firstName,onBlur:r,className:c.firstName&&a.firstName?"has-error":""}),Object(t.jsx)(g,{touched:c.firstName,message:a.firstName}),Object(t.jsx)(x,{type:"text",name:"lastName",placeholder:"enter your last name",onChange:n,value:s.lastName,onBlur:r,className:c.lastName&&a.lastName?"has-error":""}),Object(t.jsx)(g,{touched:c.lastName,message:a.lastName}),Object(t.jsx)(x,{type:"text",name:"username",placeholder:"enter your username",onChange:n,value:s.username,onBlur:r,className:c.username&&a.username?"has-error":""}),Object(t.jsx)(g,{touched:c.username,message:a.username}),Object(t.jsx)(x,{type:"text",name:"email",placeholder:"enter your email",onChange:n,value:s.email,onBlur:r,className:c.email&&a.email?"has-error":""}),Object(t.jsx)(g,{touched:c.email,message:a.email}),Object(t.jsx)(x,{name:"password",placeholder:"enter your password",onChange:n,value:s.password,onBlur:r,className:c.password&&a.password?"has-error":""}),Object(t.jsx)(g,{touched:c.password,message:a.password}),Object(t.jsx)("div",{className:"input-row",children:Object(t.jsx)("button",{type:"Submit",disabled:l,children:"Submit"})})]})}})]})})})}a(253),a(254),a(255);var ue=function(){return Object(t.jsx)(n.a.Fragment,{children:Object(t.jsx)(j.b,{to:"/signup",className:"service-btn",children:"More"})})};var he=function(e){return Object(t.jsxs)("div",{className:"s-box",children:[Object(t.jsx)("div",{className:"s-bar"}),Object(t.jsx)("img",{src:e.image,alt:"1"}),Object(t.jsxs)("h1",{children:[" ",e.service]}),Object(t.jsxs)("p",{children:["  ",e.servicedetails]}),Object(t.jsx)(ue,{})]})},xe=a.p+"static/media/boost-jet.278789a9.png";a.p,a(256);var ge=function(){return Object(t.jsxs)("div",{className:"s-box-container",children:[Object(t.jsx)(he,{image:"data:image/png;base64,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",service:"Email Marketing",servicedetails:"We offer Email Marketing tool to help you keep track on your Customers feedback and meet their needs at any\r point in time."}),Object(t.jsx)(he,{image:xe,service:"Brand Boostings and Brand Awareness",servicedetails:"We provide brand boosting tools like our digital campaign feature to our registered users to help grow their Audience."}),Object(t.jsx)(he,{image:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/05/What_is_digital_design_jpg_4vA_K_bM-700x410.jpg?auto=format&q=60&fit=max&w=930",service:"Template Editors",servicedetails:"We provide dynamic and user friendly template editors to help produce appealing and compeling designs "})]})};var Oe=function(){return Object(t.jsxs)("div",{className:"services-section",children:[Object(t.jsxs)("div",{className:"s-heading",children:[Object(t.jsx)("h1",{children:"Services"}),Object(t.jsx)("p",{children:" Boost Your Business Brand and ROI with MartReach"})]}),Object(t.jsx)(ge,{})]})};a(257),a(258);var pe=function(e){return Object(t.jsxs)("div",{className:"box-contact",children:[Object(t.jsx)("div",{className:"icon",children:e.icon}),Object(t.jsxs)("div",{className:"text",children:[Object(t.jsx)("h3",{children:e.contact}),Object(t.jsx)("p",{children:e.contactdetail})]})]})};var fe=function(){var e=Object(O.b)();return Object(t.jsxs)("div",{className:"contact",children:[Object(t.jsxs)("div",{className:"content-contact",children:[Object(t.jsx)("h2",{children:"Contact Us"}),Object(t.jsx)("p",{children:"We are absolutely glad to see you here. Kindly use the information below for further clarification about our services."})]}),Object(t.jsxs)("div",{className:"container-contact",children:[Object(t.jsxs)("div",{className:"contactInfo",children:[Object(t.jsx)(pe,{icon:Object(t.jsx)("i",{className:"fa fa-map-marker","aria-hidden":"true"}),contact:"Address",contactdetail:"20 B Peterson Drive, 405 Wuse Abuja Nigeria."}),Object(t.jsx)(pe,{icon:Object(t.jsx)("i",{className:"fa fa-phone","aria-hidden":"true"}),contact:"Phone",contactdetail:"(+234) 813-539-8131"}),Object(t.jsx)(pe,{icon:Object(t.jsx)("i",{className:"fa fa-envelope-o","aria-hidden":"true"}),contact:"Email",contactdetail:"info@martreach.com"})]}),Object(t.jsx)("div",{className:"contactForm",children:Object(t.jsx)(b.a,{initialValues:{name:"",email:"",tel:"",message:""},onSubmit:function(s,a){a.setSubmitting,a.resetForm;alert(JSON.stringify(s,null,2)),e(v.a.post("https://martreach.herokuapp.com/api/contactUs",s))},validationSchema:m.a().shape({email:m.b().email("Invalid email address").required("Required")}),children:function(e){var s=e.values,a=e.errors,c=e.touched,n=e.handleChange,r=e.handleSubmit;e.isSubmitting;return Object(t.jsxs)("form",{onSubmit:r,children:[Object(t.jsx)("h2",{children:"Send Message"}),Object(t.jsx)("div",{className:"inputBox",children:Object(t.jsx)(x,{type:"text",onChange:n,name:"name",value:s.name,placeholder:"Full Name"})}),Object(t.jsx)("div",{className:"inputBox",children:Object(t.jsx)(x,{type:"email",onChange:n,name:"email",value:s.email,placeholder:"Email"})}),Object(t.jsx)(g,{touched:c.password,message:a.password}),Object(t.jsx)("div",{className:"inputBox",children:Object(t.jsx)(x,{type:"text",onChange:n,name:"tel",value:s.tel,placeholder:"phone"})}),Object(t.jsx)("div",{className:"inputBox",children:Object(t.jsx)(x,{type:"text",name:"message",onChange:n,value:s.message,placeholder:"Type your Message..."})}),Object(t.jsx)("div",{className:"inputBox",children:Object(t.jsx)(x,{type:"submit",name:"name",value:"Send"})})]})}})})]})]})},ve=a(22),Ae=a(105),Ne=a(10),we={registered_users:[{Test:"test"}]},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case A:return Object(u.a)(Object(u.a)({},e),{},{registered_users:[s.payload].concat(Object(Ne.a)(e.registered_users))});default:return e}},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=arguments.length>1?arguments[1]:void 0;switch(s.type){case N:return!e;default:return e}},Le=Object(ve.c)({contact:We,islogged:ye}),Ce=[Ae.a],Ye=Object(ve.e)(Le,Object(ve.d)(ve.a.apply(void 0,Ce),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));var Be=function(){return Object(t.jsx)(O.a,{store:Ye,children:Object(t.jsxs)(j.a,{children:[Object(t.jsx)(W,{}),Object(t.jsxs)(p.d,{children:[Object(t.jsx)(p.b,{exact:!0,path:"/",component:Z}),Object(t.jsx)(p.b,{exact:!0,path:"/about",component:$}),Object(t.jsx)(p.b,{exact:!0,path:"/pricing",component:F}),Object(t.jsx)(p.b,{exact:!0,path:"/contact",component:fe}),Object(t.jsx)(p.b,{exact:!0,path:"/signup",component:me}),Object(t.jsx)(p.b,{exact:!0,path:"/services",component:Oe})]}),Object(t.jsx)(L,{})]})})},Fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,260)).then((function(s){var a=s.getCLS,t=s.getFID,c=s.getFCP,n=s.getLCP,r=s.getTTFB;a(e),t(e),c(e),n(e),r(e)}))};i.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(Be,{})}),document.getElementById("root")),Fe()},95:function(e,s,a){}},[[259,1,2]]]);
//# sourceMappingURL=main.8ed8c5ca.chunk.js.map