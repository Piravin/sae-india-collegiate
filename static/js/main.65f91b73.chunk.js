(this["webpackJsonpsae-india-collegiate"]=this["webpackJsonpsae-india-collegiate"]||[]).push([[0],{79:function(e,t,a){},80:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),i=a.n(s),r=a(11),c=a.n(r),o=(a(79),a(80),a(41)),l=a(7),d=a(137),j=a(135),m=a(126),b=a(122),h=a(124),g=a(65),x=a.n(g),p=a(53),u=a(43),f=a(44),O=a(31),v=a(48),w=a(47),S=Object(s.createContext)(null),A=function(e){Object(v.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={chosen:"main",main:0,about:null,events:null,teams:null,members:null},n.setChosen=n.setChosen.bind(Object(O.a)(n)),n.setValues=n.setValues.bind(Object(O.a)(n)),n}return Object(f.a)(a,[{key:"setChosen",value:function(e){this.setState({chosen:e})}},{key:"setValues",value:function(e,t){switch(t){case"main":this.setState({main:e});break;case"about":this.setState({about:e});break;case"events":this.setState({events:e});break;case"teams":this.setState({teams:e});break;case"members":this.setState({members:e})}}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){window.scrollY>=e.state.main&&(window.scrollY>(e.state.about?e.state.about:0)?window.scrollY>(e.state.events?e.state.events:0)?window.scrollY>(e.state.teams?e.state.teams:0)?window.scrollY>(e.state.members?e.state.members:0)?e.setChosen("members"):"teams"!==e.state.chosen&&e.setChosen("teams"):"events"!==e.state.chosen&&e.setChosen("events"):"about"!==e.state.chosen&&e.setChosen("about"):"main"!==e.state.chosen&&e.setChosen("main"))}))}},{key:"render",value:function(){return Object(n.jsx)(S.Provider,{value:Object(p.a)(Object(p.a)({},this.state),{},{setChosen:this.setChosen,setValues:this.setValues}),children:this.props.children})}}]),a}(s.Component),y=Object(b.a)((function(e){return Object(h.a)({nav:Object(l.a)({display:"flex",justifyContent:"space-between",alignItems:"center"},e.breakpoints.down("sm"),{height:"100vh",width:"100vw",right:"0",top:"0",flexDirection:"column",justifyContent:"center",alignItems:"space-around"}),navLink:{padding:"0 30px","&:hover h5":{color:"#553bff!important"}}})})),C=function(e){var t=e.label,a=e.onClose,s=y(),r=i.a.useContext(S),c=r.chosen,o=r.setChosen,l={about:r.about,events:r.events,teams:r.teams,members:r.members},d=c===String(t).toLowerCase(),j={color:d?"#553bff":"#444444",cursor:"pointer",fontFamily:"Roboto medium, Sans sheruf, Helvetica",fontSize:"1.2rem"};return Object(n.jsx)("div",{className:s.navLink,onClick:function(e){return n=String(t).toLowerCase(),window.scrollTo(0,l[n]),console.log(l[n]+"    "+n),o(n),void(null==a&&void 0===a||a());var n},children:Object(n.jsxs)("h5",{style:j,children:[" ",t," "]})})},k=function(e){e.chosen;var t=e.onClose,a=y();return Object(n.jsxs)("div",{className:a.nav,children:[Object(n.jsx)(C,{label:"About",onClose:t}),Object(n.jsx)(C,{label:"Events",onClose:t}),Object(n.jsx)(C,{label:"Teams",onClose:t}),Object(n.jsx)(C,{label:"Members",onClose:t})]})},T=a.p+"static/media/sae-logo.962267c4.png",N=a.p+"static/media/ham.103cf75d.svg",R=Object(b.a)((function(e){return Object(h.a)({appBar:Object(l.a)({position:"fixed",top:"0",zIndex:10,maxWidth:"100%",width:"100vw",height:"80px",boxShadow:"none",padding:"20px",backdropFilter:"blur(1px)",display:"flex",justifyContent:"space-between",alignItems:"center",transition:"0.3s ease"},e.breakpoints.down("sm"),{background:"rgba(0,0,0,0.05)",backdropFilter:"blur(1px)",width:"auto",height:"60px",borderRadius:"10px",right:"0"}),appBarScroll:{height:"60px",background:"rgba(256,256,256,0.7)",boxShadow:"0px 5px 10px rgba(40,40,40,0.05)",backdropFilter:"blur(10px)",justifyContent:"space-around",transition:"0.3s ease, justify-content 1s ease"},toolbar:{display:"flex!important",height:"100%",justifyContent:"space-between!important",alignItems:"center",width:"100%"},logoDiv:{alignItems:"start",height:"60px",justifyContent:"space-around"},logo:Object(l.a)({height:"60px",width:"auto"},e.breakpoints.down("sm"),{display:"none"}),close:{position:"absolute",top:"10px",right:"10px"}})})),I=function(){var e=R(),t=Object(s.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1],l=Object(s.useContext)(S),b=function(){return c(!r)};return i.a.useEffect((function(){window.addEventListener("scroll",(function(){document.querySelector("#navBar").classList.add(e.appBarScroll),0===window.scrollY&&document.querySelector("#navBar").classList.remove(e.appBarScroll)}))}),[]),Object(n.jsxs)("div",{className:e.appBar,id:"navBar",children:[Object(n.jsxs)(j.a,{fullScreen:!0,open:r,onClose:b,children:[Object(n.jsx)(m.a,{className:e.close,onClick:b,children:Object(n.jsx)(x.a,{})}),Object(n.jsx)(k,{chosen:(null===l||void 0===l?void 0:l.chosen)?null===l||void 0===l?void 0:l.chosen:"main",onClose:b})]}),Object(n.jsx)("div",{className:e.logoDiv,children:Object(n.jsx)("img",{src:T,alt:"SAE India Colegiate SASTRA",className:e.logo})}),Object(n.jsx)(d.a,{smDown:!0,children:Object(n.jsx)(k,{chosen:(null===l||void 0===l?void 0:l.chosen)?null===l||void 0===l?void 0:l.chosen:"main"})}),Object(n.jsx)(d.a,{mdUp:!0,children:Object(n.jsx)("img",{src:N,alt:"",onClick:function(){return c(!r)}})})]})},E=a(128),B=a(138),W=a(127),D=a.p+"static/media/sae-title.d280f2f1.svg",M="./images/members.svg",F="./images/map.svg",z=["./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/aero_team.jpg","./images/srt_team.jpg"],U=Object(b.a)((function(e){var t;return Object(h.a)({main:(t={height:"100vh",width:"100vw",paddingTop:"80px"},Object(l.a)(t,e.breakpoints.down("sm"),{paddingTop:"20px"}),Object(l.a)(t,"& div img",Object(l.a)({width:"80%",height:"auto"},e.breakpoints.down("sm"),{width:"50%"})),t),left:{"& h1":Object(l.a)({color:"#003471",fontWeight:400,fontFamily:"Roboto",fontSize:"36px",padding:"0",margin:"0"},e.breakpoints.down("sm"),{fontSize:"24px"})},center:Object(l.a)({display:"flex",alignItems:"center",justifyContent:"center"},e.breakpoints.down("sm"),{minHeight:"380px",minWidth:"100vw","& > img":{width:"90%!important",height:"auto"}}),right:{"& > div h1":Object(l.a)({color:"#003471",fontWeight:400,fontFamily:"Roboto",fontSize:"36px",padding:"0",margin:"0"},e.breakpoints.down("sm"),{color:"#fff",fontSize:"24px"})},slideShow:{width:"100%!important",height:"0"},slideContainer:Object(l.a)({borderRadius:"10px",overflow:"hidden",width:"90%",height:"auto",boxShadow:"5px 5px 15px rgba(0,0,0,0.1), 0px 0px 25px rgba(0,0,0,0.13), -5px -10px 15px rgba(140, 180, 255, 0.2)"},e.breakpoints.down("sm"),{height:"auto",width:"100vw",borderRadius:"0","& > img":{width:"100vw!important"}}),mobile:{color:"#333","& h1":{fontWeight:400}},insideCenter:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"},title:Object(l.a)({width:"40vw",paddingBottom:"30px"},e.breakpoints.down("sm"),{width:"90vw!important"})})})),Q=function(){var e=U(),t=i.a.useState(0),a=Object(o.a)(t,2),s=a[0],r=a[1],c=i.a.useState(0),l=Object(o.a)(c,2),j=l[0],m=l[1],b=function(){return m(window.pageYOffset)};return i.a.useEffect((function(){var e=setInterval((function(){return r((s+1)%5)}),5e3);return function(){return clearInterval(e)}})),i.a.useEffect((function(){return window.addEventListener("scroll",b),function(){return window.removeEventListener("scroll",b)}}),[]),Object(n.jsxs)(W.a,{container:!0,className:e.main,children:[Object(n.jsx)(d.a,{smDown:!0,children:Object(n.jsx)(W.a,{item:!0,xs:12,md:3,className:e.left,children:Object(n.jsxs)("div",{style:{transform:"translateY(".concat(.6*j,"px)")},children:[Object(n.jsx)("img",{src:F,alt:"Over 480 Collegiates World Wide"}),Object(n.jsx)("h1",{children:"Over 480 Collegiates World Wide"})]})})}),Object(n.jsx)(W.a,{item:!0,xs:12,md:6,className:e.center,children:Object(n.jsxs)("div",{className:e.insideCenter,children:[Object(n.jsx)("div",{className:e.title,children:Object(n.jsx)("img",{className:e.title,src:D,alt:"SAE India Collegiate at SASTRA"})}),Object(n.jsx)(E.a,{children:Object(n.jsx)(B.a,{timeout:500,classNames:"slide",children:Object(n.jsx)("div",{className:e.slideContainer,children:Object(n.jsx)("img",{className:e.slideShow,src:z[s],alt:"Slide images"})})},s)})]})}),Object(n.jsx)(d.a,{smDown:!0,children:Object(n.jsx)(W.a,{item:!0,xs:12,md:3,className:e.right,children:Object(n.jsxs)("div",{style:{transform:"translateY(".concat(.6*j,"px)"),zIndex:-1},children:[Object(n.jsx)("img",{src:M,alt:"Over 50000 Members"}),Object(n.jsx)("h1",{children:"Over 50000 Members"})]})})}),Object(n.jsx)(d.a,{mdUp:!0,children:Object(n.jsxs)(W.a,{item:!0,container:!0,children:[Object(n.jsx)(W.a,{item:!0,xs:6,children:Object(n.jsxs)("div",{className:e.mobile,children:[Object(n.jsx)("img",{src:F,alt:"Over 480 Collegiates World Wide"}),Object(n.jsx)("h1",{children:"Over 480 Collegiates World Wide"})]})}),Object(n.jsx)(W.a,{item:!0,xs:6,children:Object(n.jsxs)("div",{className:e.mobile,children:[Object(n.jsx)("img",{src:M,alt:"Over 50000 Members"}),Object(n.jsx)("h1",{children:"Over 50000 Members"})]})})]})})]})},Y=a(129),G=a(130),H=a(131),X=a(132),Z=a.p+"static/media/Events.69e1f37f.svg",P=Object(b.a)((function(e){return Object(h.a)({events:{backgroundColor:"rgb(243, 245, 249)",padding:"20px 0",alignItems:"center"},eventFrame:Object(l.a)({display:"flex",padding:"40px"},e.breakpoints.down("md"),{overflowX:"scroll",flexWrap:"nowrap",padding:"20px"}),title:{fontSize:"1rem",fontFamily:"Roboto, Sans Sherif",display:"flex",justifyContent:"center","& div":{display:"flex",justifyContent:"center",alignItems:"center",width:"150px",padding:"10px",borderRadius:"25px",background:"#137fce",boxShadow:"5px 5px 10px rgba(0,0,0,0.12)",fontSize:"1.2rem",fontWeight:500,color:"#f0f0f0","& img":{marginLeft:"5px",width:"50px",height:"auto"}}},card:{backgroundColor:"#fff",minWidth:"300px",maxWidth:"300px",boxShadow:"5px 5px 15px rgba(0,0,0,0.1), -5px -5px 15px rgba(191, 216, 255,0.3)",marginLeft:"40px",marginRight:"40px"},media:{width:"100%",height:"auto"},more:{justifyContent:"flex-end"},eventAbt:Object(l.a)({display:"flex",margin:"20px 10vw",textAlign:"justify",width:"80vw",padding:"2vw",fontFamily:"Roboto, Helvetica",color:"#505050",fontSize:"1.6rem",lineHeight:"2.8rem",fontWeight:500},e.breakpoints.down("sm"),Object(l.a)({},e.breakpoints.down("sm"),{width:"100vw",fontSize:"1.2rem",padding:"2rem",lineHeight:"2rem",maxWidth:"100%",margin:"0px"}))})})),J=i.a.forwardRef((function(e,t){var a=P(),s=i.a.useRef(null),r=i.a.useContext(S);return i.a.useEffect((function(){r.setValues(s.current.offsetTop,"events"),r.setValues(s.current.offsetTop+s.current.offsetHeight,"teams")}),[]),Object(n.jsxs)("div",{className:a.events,ref:s,children:[Object(n.jsx)("div",{className:a.title,children:Object(n.jsxs)("div",{children:["Events",Object(n.jsx)("img",{src:Z,alt:""})]})}),Object(n.jsx)("div",{className:a.eventAbt,children:"SAE SASTRA hosts a variety of events for the benefit of it\u2019s student community. From lectures delivered by Industry experts to collegiate events that promote the spirit of engineering, SAE SASTRA and it\u2019s members have constantly proved their hunger to learn."}),Object(n.jsxs)("div",{className:a.eventFrame,children:[Object(n.jsxs)(Y.a,{className:a.card,children:[Object(n.jsx)(G.a,{className:a.media,src:"./images/srtx.png",component:"img",title:"News1"}),Object(n.jsxs)(H.a,{children:[Object(n.jsx)(X.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"SRT X"}),Object(n.jsx)(X.a,{variant:"body2",color:"textSecondary",component:"p",children:"The Dream Bike || The Crew || SAEISS Bicycle Designing Competition 2k19"})]})]}),Object(n.jsxs)(Y.a,{className:a.card,children:[Object(n.jsx)(G.a,{className:a.media,src:"./images/join_sae.jpg",component:"img",title:"News1"}),Object(n.jsxs)(H.a,{children:[Object(n.jsx)(X.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Join Us"}),Object(n.jsx)(X.a,{variant:"body2",color:"textSecondary",component:"p",children:"We invite everyone for the lecture on 'Engineering Design' by Mr. S. Shanmugam, Chairman of SAEISS"})]})]}),Object(n.jsxs)(Y.a,{className:a.card,children:[Object(n.jsx)(G.a,{className:a.media,src:"./images/host_sae.jpg",component:"img",title:"News1"}),Object(n.jsxs)(H.a,{children:[Object(n.jsx)(X.a,{gutterBottom:!0,variant:"h5",component:"h2"}),Object(n.jsx)(X.a,{variant:"body2",color:"textSecondary",component:"p",children:"SASTRA Deemed to be University will be Hosting the Thanjavur Division of SAEINDIA Southern Section."})]})]})]})]})})),K=a(136),V=a(133),L=a(139),q=a(6),_=a(66),$=a.n(_),ee=a(54),te=a.n(ee),ae=a(55),ne=a.n(ae),se=a(56),ie=a.n(se),re=a(57),ce=a.n(re),oe=a.p+"static/media/srt.1dd5006d.svg",le=a.p+"static/media/teams.fe55d1ec.svg",de=a.p+"static/media/srt-bicycle.75e06755.svg",je=Object(b.a)((function(e){var t;return Object(h.a)({"@global":{},"@keyframes jump":{"0%":{transform:"translate(0,-3px) scale(1.05)"},"50%":{transform:"translate(-6px,-18px) scale(1.3)"},"75%":{transform:"translate(-2px,-12px) scale(1.1)"},"100%":{transform:"translate(-4px, -15px) scale(1.3)"}},logo:{width:"100px",height:"auto"},photo:{width:"100%",height:"auto",borderRadius:"5px"},gridT:(t={padding:"20px",fontFamily:"Roboto",textAlign:"left"},Object(l.a)(t,e.breakpoints.down("sm"),{padding:"10px",order:2}),Object(l.a)(t,"& h1::before",{content:"-fasdf",position:"absolute",height:"2px",width:"200px",backgroundColor:"#555555"}),Object(l.a)(t,"& p",Object(l.a)({padding:"10px 40px",fontWeight:500,fontSize:"1.2rem",textIndent:"2rem",textAlign:"justify"},e.breakpoints.down("sm"),{padding:"5px",textIndent:"0"})),t),gridB:Object(l.a)({},e.breakpoints.down("sm"),{order:1}),social:{float:"right","& a":{color:"#444",margin:"10px","&:hover":{color:"#3659f5","& svg":{animation:"$jump 300ms ease forwards"}}}},insta:{"&:hover":{"& svg":{color:"#C13584"}}},yt:{"&:hover":{"& svg":{color:"#de0909"}}},web:{"&:hover":{"& svg":{color:"#008a02"}}}})})),me=function(e){e.teamId;var t=je();return Object(n.jsxs)(W.a,{container:!0,children:[Object(n.jsxs)(W.a,{item:!0,xs:12,md:8,className:t.gridT,children:[Object(n.jsx)("h1",{children:"SASTRA Racing Team - Baja"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:'SASTRA Racing team, having been established in 2009, is your typical "passion for life" kind team with a skilled , well filtered out set of people inspired by excellence. The team has appeared in leagues including SAE Baja and SUPRA with a best of its kind, in house machined car. With aspiring engineers on the constant run for the best drive, SRT is one of the university\u2019s prominent clubs, formed by engineers, for engineers.'}),Object(n.jsx)("p",{children:"We take pride in our close knit team along with the strong bonds of friendship, we also learn to form a good network of people. This networking is also a very important quality which is a boon in disguise. We also take pride in our ability to further the excitement of science, technology, engineering, and mathematics to both fellow students as well as the community through our outreach programs and events we take part in."})]}),Object(n.jsxs)("div",{className:t.social,children:[Object(n.jsx)("a",{href:"https://www.linkedin.com/company/sastra-racing-team/",rel:"noreferrer",target:"_blank",children:Object(n.jsx)($.a,{fontSize:"large"})}),Object(n.jsx)("a",{href:"https://www.facebook.com/SASTRARacingOfficial",rel:"noreferrer",target:"_blank",children:Object(n.jsx)(te.a,{fontSize:"large"})}),Object(n.jsx)("a",{href:"https://www.instagram.com/sastra_racing_team_baja/",rel:"noreferrer",target:"_blank",className:t.insta,children:Object(n.jsx)(ne.a,{fontSize:"large"})}),Object(n.jsx)("a",{href:"https://www.youtube.com/channel/UC6Tuvr4QA-T3ggvIZeJZP9Q",rel:"noreferrer",target:"_blank",className:t.yt,children:Object(n.jsx)(ie.a,{fontSize:"large"})}),Object(n.jsx)("a",{href:"http://www.srtbaja.in",rel:"noreferrer",target:"_blank",className:t.web,children:Object(n.jsx)(ce.a,{fontSize:"large"})})]})]}),Object(n.jsx)(W.a,{item:!0,xs:12,md:4,className:t.gridB,children:Object(n.jsx)("img",{className:t.photo,src:"./images/srt_team.jpg",alt:"Team SRT"})})]})},be=function(e){e.teamId;var t=je();return Object(n.jsxs)(W.a,{container:!0,children:[Object(n.jsxs)(W.a,{item:!0,xs:12,md:8,className:t.gridT,children:[Object(n.jsx)("h1",{children:"SASTRA Racing Team - Bicycle"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"SASTRA Racing Team - Bicycle started in 2018, is a team of enthusiastic and passionated undergraduate students who conceptualize, design and build bicycles for SAEINDIA competitions. The team consists of students from all the years of study across all branches to maintain the best knowledge transfer to build bicycles every year."}),Object(n.jsx)("p",{children:"SRT Bicycle is one of the club's in SASTRA that helps and supports students to apply their theorical knowledge in designing and manufacturing to gain practical exposure."})]})]}),Object(n.jsx)(W.a,{item:!0,xs:12,md:4,className:t.gridB,children:Object(n.jsx)("img",{className:t.photo,src:"./images/srt_team.jpg",alt:"Team SRT"})})]})},he=function(e){e.teamId;var t=je();return Object(n.jsx)(W.a,{container:!0,children:Object(n.jsxs)(W.a,{item:!0,xs:12,md:8,className:t.gridT,children:[Object(n.jsx)("h1",{children:"Electric Two Wheeler Design Competition"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"ETWDC Prepares the students to be effective professional engineers. Provides a Platform for enhancing Skill Set, competency, Technical Know How in electrification of Two Wheelers"}),Object(n.jsx)("p",{children:"Electric Two Wheeler Design Competition tasks the students to think, analyse, design, develop, build, test and present in series of event."})]})]})})},ge=function(e){e.teamId;var t=je();return Object(n.jsxs)(W.a,{container:!0,children:[Object(n.jsxs)(W.a,{item:!0,xs:12,md:8,className:t.gridT,children:[Object(n.jsx)("h1",{children:"Aero-modelling club @ sastra"}),Object(n.jsx)("div",{children:Object(n.jsx)("p",{children:"Aero-modelling is an interesting art of designing and making small powered or unpowered aerodynamic models. We are the students of Shanmugha Arts, Science, Technology & Research Academy (SASTRA Deemed to be University) Thanjavur, actively involved in making such working models. The objective of the club is to promote the students\u2019 interest in aeromodelling by providing a platform to practically apply what they learn and to create an opportunity for them to interact and work with the people of same interest. We conduct events and workshops frequently on various aero-models such as hovercraft, glider, etc., We also participate in various competitions that happen throughout the year in several institutions."})}),Object(n.jsxs)("div",{className:t.social,children:[Object(n.jsx)("a",{href:"https://www.facebook.com/Aeromodelling-club-at-Sastra-547771182249359/",rel:"noreferrer",target:"_blank",children:Object(n.jsx)(te.a,{fontSize:"large"})}),Object(n.jsx)("a",{href:"https://www.instagram.com/aeromodelling_club_sastra/",rel:"noreferrer",target:"_blank",className:t.insta,children:Object(n.jsx)(ne.a,{fontSize:"large"})}),Object(n.jsx)("a",{href:"https://www.youtube.com/channel/UC6W4_FBa4tB_pMbV_urkKsw",rel:"noreferrer",target:"_blank",className:t.yt,children:Object(n.jsx)(ie.a,{fontSize:"large"})}),Object(n.jsx)("a",{href:"https://acssastra.wordpress.com/",rel:"noreferrer",target:"_blank",className:t.web,children:Object(n.jsx)(ce.a,{fontSize:"large"})})]})]}),Object(n.jsx)(W.a,{item:!0,xs:12,md:4,className:t.gridB,children:Object(n.jsx)("img",{className:t.photo,src:"./images/aero_team.jpg",alt:"Team Aero Modeling"})})]})},xe=function(){var e=je();return Object(n.jsx)("img",{className:e.logo,src:oe,alt:"SRT"})},pe=function(){var e=je();return Object(n.jsx)("img",{className:e.logo,src:"data:image/png;base64,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",alt:"SRT"})},ue=function(){var e=je();return Object(n.jsx)("img",{className:e.logo,src:de,alt:"SRT"})},fe=function(e){Object(v.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={selectedTeam:0},n.teamChanger=n.teamChanger.bind(Object(O.a)(n)),n}return Object(f.a)(a,[{key:"teamChanger",value:function(e,t){this.setState({selectedTeam:t})}},{key:"render",value:function(){var e=this.props.classes,t=function(){return Object(n.jsx)("img",{style:{height:"50px",borderRadius:"10px"},src:"./images/aero_logo.jpg",alt:"Aero team"})};return Object(n.jsxs)("div",{className:e.teams,children:[Object(n.jsx)("div",{className:e.title,children:Object(n.jsxs)("div",{children:["Teams ",Object(n.jsx)("img",{src:le,alt:""})]})}),Object(n.jsxs)(K.a,{orientation:"horizontal",variant:"scrollable",indicatorColor:"primary",value:this.state.selectedTeam,className:e.tabs,onChange:this.teamChanger,children:[Object(n.jsx)(V.a,{icon:Object(n.jsx)(xe,{}),id:"Team 1"}),Object(n.jsx)(V.a,{icon:Object(n.jsx)(t,{}),id:"Team 2"}),Object(n.jsx)(V.a,{icon:Object(n.jsx)(ue,{}),id:"Team 3"}),Object(n.jsx)(V.a,{icon:Object(n.jsx)(pe,{}),id:"Team 4"})]}),0===this.state.selectedTeam&&Object(n.jsx)(me,{teamId:0}),1===this.state.selectedTeam&&Object(n.jsx)(ge,{teamId:1}),2===this.state.selectedTeam&&Object(n.jsx)(be,{teamId:2}),3===this.state.selectedTeam&&Object(n.jsx)(he,{teamId:3})]})}}]),a}(s.Component),Oe=Object(L.a)(Object(q.a)((function(e){return{tabs:{height:"auto","& button":{padding:"15px 20px"}},teams:Object(l.a)({padding:"40px 0",background:"rgba(256,256,256,0.95)",backdropFilter:"blur(20px)"},e.breakpoints.down("sm"),{padding:"0"}),title:{width:"100vw",padding:"20px",display:"flex",justifyContent:"center",alignItems:"center","& > div":{width:"150px",height:"50px",borderRadius:"25px",backgroundColor:"#137fce",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"5px 5px 10px rgba(0,0,0,0.12)",fontSize:"1.2rem",fontWeight:500,color:"#f0f0f0"}}}}))(fe)),ve=Object(b.a)((function(e){return Object(h.a)({members:{display:"flex",justifyContent:"space-around",alignItems:"center",padding:"20px",flexWrap:"wrap",background:"#e8f2ff"},member:Object(l.a)({width:"350px",height:"auto",padding:"20px",margin:"20px"},e.breakpoints.down("sm"),{width:"100vw",padding:"0",margin:"20px 0px"}),profile:{width:"100%",height:"auto",borderRadius:"50%"},detail:{fontFamily:"Roboto, Helvetica",textAlign:"left",padding:"0 10px",fontWeight:400,alignItems:"start",justifyContent:"flex-start","& h1, h3":{margin:"5px",fontWeight:400,color:"#222"}}})})),we=i.a.forwardRef((function(e,t){var a=ve(),s=i.a.useRef(null),r=i.a.useContext(S);return i.a.useEffect((function(){r.setValues(s.current.offsetTop,"members")}),[]),Object(n.jsxs)("div",{className:a.members,ref:s,children:[Object(n.jsx)("div",{className:a.member,children:Object(n.jsxs)(W.a,{container:!0,children:[Object(n.jsx)(W.a,{item:!0,xs:4,children:Object(n.jsx)("img",{className:a.profile,src:"./images/kadiresh.jpg",alt:""})}),Object(n.jsxs)(W.a,{item:!0,xs:8,className:a.detail,children:[Object(n.jsx)("h1",{children:"Kadiresh"}),Object(n.jsx)("h3",{children:"Chair Person"})]})]})}),Object(n.jsx)("div",{className:a.member,children:Object(n.jsxs)(W.a,{container:!0,children:[Object(n.jsx)(W.a,{item:!0,xs:4,children:Object(n.jsx)("img",{className:a.profile,src:"./images/inba.jpg",alt:""})}),Object(n.jsxs)(W.a,{item:!0,xs:8,className:a.detail,children:[Object(n.jsx)("h1",{children:"Inba Murugesan"}),Object(n.jsx)("h3",{children:"Vice Chair Person"})]})]})}),Object(n.jsx)("div",{className:a.member,children:Object(n.jsxs)(W.a,{container:!0,children:[Object(n.jsx)(W.a,{item:!0,xs:4,children:Object(n.jsx)("img",{className:a.profile,src:"./images/me.jpg",alt:""})}),Object(n.jsxs)(W.a,{item:!0,xs:8,className:a.detail,children:[Object(n.jsx)("h1",{children:"Piravin K C M"}),Object(n.jsx)("h3",{children:"Student Secratery"})]})]})}),Object(n.jsx)("div",{className:a.member,children:Object(n.jsxs)(W.a,{container:!0,children:[Object(n.jsx)(W.a,{item:!0,xs:4,children:Object(n.jsx)("img",{className:a.profile,src:"./images/kanagaraj.jpg",alt:""})}),Object(n.jsxs)(W.a,{item:!0,xs:8,className:a.detail,children:[Object(n.jsx)("h1",{children:"Kanagaraj"}),Object(n.jsx)("h3",{children:"Treasurer"})]})]})}),Object(n.jsx)("div",{className:a.member,children:Object(n.jsxs)(W.a,{container:!0,children:[Object(n.jsx)(W.a,{item:!0,xs:4,children:Object(n.jsx)("img",{className:a.profile,src:"./images/kuralarasan.jpg",alt:""})}),Object(n.jsxs)(W.a,{item:!0,xs:8,className:a.detail,children:[Object(n.jsx)("h1",{children:"Kural Arasan"}),Object(n.jsx)("h3",{children:"Program Chair Person"})]})]})}),Object(n.jsx)("div",{className:a.member,children:Object(n.jsxs)(W.a,{container:!0,children:[Object(n.jsx)(W.a,{item:!0,xs:4,children:Object(n.jsx)("img",{className:a.profile,src:"./images/hemanth.jpg",alt:""})}),Object(n.jsxs)(W.a,{item:!0,xs:8,className:a.detail,children:[Object(n.jsx)("h1",{children:"Hemanth"}),Object(n.jsx)("h3",{children:"Publicity Chair Person"})]})]})})]})})),Se=a(93),Ae=a(91),ye=Object(Se.a)((function(e){return Object(Ae.a)({footer:{position:"relative",padding:"3vh 3vw",color:"#fff",backgroundColor:"rgb(1, 0, 60)",textAlign:"left",fontFamily:"Roboto mono, Helvetica","& h1":{fontWeight:400},"& h1::after":{content:"",position:"absolute",width:"200px",height:"10px",backgroundColor:"#c5c5c5"},"& p":{fontWeight:300,fontSize:"1rem",lineHeight:"24px"}}})})),Ce=function(){var e=ye();return Object(n.jsxs)("div",{className:e.footer,children:[Object(n.jsx)("h1",{id:"footerTitle",children:"SAE India Collegiate SASTRA"}),Object(n.jsxs)("p",{children:["Vishwa Karma Joth,",Object(n.jsx)("br",{}),"SASTRA Deemed University,",Object(n.jsx)("br",{}),"Tirumalaisamudram,",Object(n.jsx)("br",{}),"Thanjavur - 613401,",Object(n.jsx)("br",{}),"Tamilnadu, India."]})]})},ke=Object(b.a)((function(e){return Object(h.a)({about:Object(l.a)({margin:"0 10vw",marginBottom:"30px",padding:"2vw",width:"80vw",backgroundColor:"rgba(256,256,256,0.8)",backdropFilter:"blur(10px)",alignItems:"center",borderRadius:"20px"},e.breakpoints.down("sm"),{margin:"1vh 1vw",padding:"1vw",width:"98vw"}),aboutContent:Object(l.a)({display:"flex",textAlign:"justify",fontFamily:"Roboto, Helvetica",color:"#555555",fontSize:"1.3rem",lineHeight:"2.2rem",fontWeight:500},e.breakpoints.down("sm"),{width:"100vw",fontSize:"1.2rem",padding:"0 2rem",lineHeight:"2rem",maxWidth:"100%",margin:"0px"}),title:Object(l.a)({fontFamily:"Rubik",fontWeight:500,display:"flex",marginBottom:"0px",justifyContent:"center",padding:"0px",color:"#444",fontSize:"36px"},e.breakpoints.down("sm"),{fontSize:"1.5rem",lineHeight:"1rem"})})})),Te=function(){var e=ke(),t=i.a.useRef(null),a=i.a.useContext(S);return i.a.useEffect((function(){a.setValues(t.current.offsetTop,"about")}),[]),Object(n.jsxs)("div",{className:e.about,ref:t,children:[Object(n.jsx)("h1",{className:e.title,id:"about-title",children:"ABOUT SAE SASTRA"}),Object(n.jsx)("div",{className:e.aboutContent,children:Object(n.jsx)("p",{children:"With more than 50,000 members in more than 480 collegiate clubs all across the country, SAEINDIA has been one of the leading student clubs in India. The collegiate club initiative provided a path for SAE to promote practical learning and provide sound engineering principles at the grassroots level. Collegiate clubs provide practical exposure to a professional engineering society as well as a focal point for campus engineering programs and projects. The SAE collegiate club of SASTRA Deemed University was formed during the academic year 2009-2010. During the course of these 11 years, the SAE SASTRA collegiate club has grown in number while showing true mettle."})})]})},Ne=a(67),Re=a.n(Ne),Ie=Object(b.a)((function(e){return Object(h.a)({toTop:{position:"fixed",display:"none",bottom:"20px",right:"20px",cursor:"pointer",color:"#fff",backgroundColor:"rgba(1, 0, 60,0.5)",backdropFilter:"blur(10px)",dicplay:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px",width:"50px",height:"50px",borderRadius:"50%",boxShadow:"5px 5px 15px rgba(1, 0, 60,0.3)",transition:"color 0.3s ease","&:hover":{color:"#15de02",trnasformOrigin:"bottom",transition:"color 0.3s ease"}}})})),Ee=function(){var e=Ie(),t=i.a.useRef(null),a=function(){window.pageYOffset>window.innerHeight?t.current.style.display="block":t.current.style.display="none"};return i.a.useEffect((function(){window.addEventListener("scroll",a)}),[]),Object(n.jsx)("div",{id:"scroller",className:e.toTop,ref:t,onClick:function(){return window.scrollTo(0,0)},children:Object(n.jsx)(Re.a,{})})},Be=a(134);var We=function(){var e=Object(s.useRef)(null),t=Object(s.useRef)(null),a=Object(s.useRef)(null);return Object(n.jsxs)("div",{className:"App",style:{backgroundImage:"url(".concat("./images/main-bg.svg",")"),backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},children:[Object(n.jsx)(Be.a,{}),Object(n.jsxs)(A,{children:[Object(n.jsx)(I,{}),Object(n.jsx)(Q,{}),Object(n.jsx)(Te,{}),Object(n.jsx)(J,{ref:e}),Object(n.jsx)(Oe,{ref:t}),Object(n.jsx)(we,{ref:a}),Object(n.jsx)(Ce,{}),Object(n.jsx)(Ee,{})]})]})},De=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,140)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};a(88);c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(We,{})}),document.getElementById("root")),De()}},[[89,1,2]]]);
//# sourceMappingURL=main.65f91b73.chunk.js.map