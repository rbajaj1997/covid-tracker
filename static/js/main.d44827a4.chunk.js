(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{28:function(e,a,t){e.exports=t.p+"static/media/virus.8145c6ff.svg"},31:function(e,a,t){e.exports=t.p+"static/media/home.b03d9b1a.svg"},32:function(e,a,t){e.exports=t.p+"static/media/hands.b8374ff5.svg"},33:function(e,a,t){e.exports=t.p+"static/media/distance.510bf4af.svg"},34:function(e,a,t){e.exports=t.p+"static/media/mask.49a9b544.svg"},35:function(e,a,t){e.exports=t.p+"static/media/medical.b417ee3d.svg"},36:function(e,a,t){e.exports=t.p+"static/media/sneeze.52b31552.svg"},37:function(e,a,t){e.exports=t.p+"static/media/fever.a33924c7.svg"},38:function(e,a,t){e.exports=t.p+"static/media/cough.7f3c45a2.svg"},39:function(e,a,t){e.exports=t.p+"static/media/fatigue.d2869c45.svg"},40:function(e,a,t){e.exports=t.p+"static/media/ache.0d18e232.svg"},41:function(e,a,t){e.exports=t.p+"static/media/sorethroat.fb22c814.svg"},42:function(e,a,t){e.exports=t.p+"static/media/Diarrhea.6b4bcf81.svg"},43:function(e,a,t){e.exports=t.p+"static/media/Conjunctivitis.21f702d9.svg"},44:function(e,a,t){e.exports=t.p+"static/media/headache.017cd718.svg"},45:function(e,a,t){e.exports=t.p+"static/media/rash.1efa8b1d.svg"},46:function(e,a,t){e.exports=t(79)},52:function(e,a,t){},78:function(e,a){var t=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));"serviceWorker"in navigator?window.addEventListener("load",(function(){t?navigator.serviceWorker.register("./custom-sw.js"):navigator.serviceWorker.register("".concat("/covid-tracker","/custom-sw.js"))})):console.log("Service Worker Not Present!")},79:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(13),s=t.n(r),o=t(6),l=(t(51),t(52),t(18)),i=t.n(l);function m(e){return c.a.createElement("div",{className:"loader ".concat(e.loading?"":"fadeOut-animation")})}var u=t(28),d=t.n(u);function E(e){var a=e.countryData,t=e.selectedCountry,n=e.handleCountryChange;return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__text"},c.a.createElement("img",{src:d.a,alt:"Virus Logo",className:"header__logo"}),c.a.createElement("span",{className:"header__text--title"},"COVID-19 Tracker")),c.a.createElement("div",{className:"header__select"},c.a.createElement("select",{name:"country-list",className:"header__select--input",value:t,onChange:n},c.a.createElement("option",{key:"-1",value:-1},"Worldwide"),a.map((function(e){return!!e.countryInfo._id&&c.a.createElement("option",{key:e.countryInfo._id,value:e.countryInfo._id},e.country)})))))}var f=t(10),v=t.n(f);function p(e){var a=e.countryData,t=e.selectedCountry,r=e.globalData,s=e.type,l=e.handleTypeChange,i=Object(n.useState)({}),m=Object(o.a)(i,2),u=m[0],d=m[1],E=function(e){return v()(e).format("0.0a")};return Object(n.useEffect)((function(){if(-1===Number(t))d(r);else for(var e=0;e<a.length;e++)if(a[e].countryInfo._id===Number(t)){d(a[e]);break}}),[a,t,r]),c.a.createElement("div",{className:"stats-boxes"},c.a.createElement("div",{className:"stats-boxes--boxes"},c.a.createElement("div",{tabIndex:"1",className:"box box--1 ".concat("NEW"===s?"selected":""),onClick:function(){l("NEW")}},c.a.createElement("div",{className:"box__title"},"New Cases"),c.a.createElement("div",{className:"box__new"},E(u.todayCases)),c.a.createElement("div",{className:"box__total"},E(u.cases))),c.a.createElement("div",{tabIndex:"-1",className:"box box--2 ".concat("RECOV"===s?"selected":""),onClick:function(){l("RECOV")}},c.a.createElement("div",{className:"box__title"},"Recovered"),c.a.createElement("div",{className:"box__new"},E(u.todayRecovered)),c.a.createElement("div",{className:"box__total"},E(u.recovered))),c.a.createElement("div",{tabIndex:"-1",className:"box box--3 ".concat("DEATH"===s?"selected":""),onClick:function(){l("DEATH")}},c.a.createElement("div",{className:"box__title"},"Deaths"),c.a.createElement("div",{className:"box__new"},E(u.todayDeaths)),c.a.createElement("div",{className:"box__total"},E(u.deaths)))),c.a.createElement("div",{className:"stats-boxes--time"},c.a.createElement("i",null,"Last Updated: ",c.a.createElement("strong",null,function(e){var a=new Date,t=new Date(e);return isNaN(t.getTime())?"-":parseInt(Math.abs(t.getTime()-a.getTime())/6e4%60)}(u.updated)," mins")," ago")))}var h=t(12);function b(e){var a=e.globalFilter,t=e.setGlobalFilter,r=Object(n.useState)(a),s=Object(o.a)(r,2),l=s[0],i=s[1],m=Object(h.useAsyncDebounce)((function(e){t(e||void 0)}),200);return c.a.createElement("input",{value:l||"",onChange:function(e){i(e.target.value),m(e.target.value)},placeholder:"Search for a country.."})}function g(e){var a=e.countryData,t=Object(n.useMemo)((function(){return[{Header:"Country",accessor:"country"},{Header:"Active Cases",accessor:"active"}]}),[]),r=Object(n.useMemo)((function(){return a.map((function(e){return{country:e.country,active:e.cases-e.recovered-e.deaths}}))}),[a]),s=Object(h.useTable)({columns:t,data:r,initialState:{pageSize:15}},h.useGlobalFilter,h.usePagination),o=s.getTableProps,l=s.getTableBodyProps,i=s.prepareRow,m=s.visibleColumns,u=s.state,d=s.setGlobalFilter,E=s.page,f=s.canPreviousPage,v=s.canNextPage,p=s.pageCount,g=s.gotoPage,N=s.nextPage,_=s.previousPage;return c.a.createElement("div",{className:"stats-table"},c.a.createElement("h2",{className:"stats-table--header"},"Live Cases by Country"),c.a.createElement("table",Object.assign({},o(),{className:"table"}),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{colSpan:m.length},c.a.createElement(b,{globalFilter:u.globalFilter,setGlobalFilter:d})))),c.a.createElement("tbody",l(),E.map((function(e,a){return i(e),c.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return c.a.createElement("td",e.getCellProps(),e.render("Cell"))})))})))),c.a.createElement("div",{className:"stats-table--pagination"},c.a.createElement("button",{onClick:function(){return g(0)},disabled:!f},"<<")," ",c.a.createElement("button",{onClick:function(){return _()},disabled:!f},"<")," ",c.a.createElement("button",{onClick:function(){return N()},disabled:!v},">")," ",c.a.createElement("button",{onClick:function(){return g(p-1)},disabled:!v},">>")," "))}var N=t(81),_=t(83),y=t(82),x=t(84);t(73);function C(e){var a,t,r,s=e.countryData,l=e.selectedCountry,i=e.type,m=Object(n.useState)([20,77]),u=Object(o.a)(m,2),d=u[0],E=u[1];switch(i){case"NEW":a="#F1A139",t=.05,r="cases";break;case"RECOV":a="#7dd71d",t=.06,r="recovered";break;case"DEATH":a="#F23A3A",t=.2,r="deaths"}return Object(n.useEffect)((function(){if(-1===Number(l))E([20,77]);else for(var e=0;e<s.length;e++)if(s[e].countryInfo._id===Number(l)){E([s[e].countryInfo.lat,s[e].countryInfo.long]);break}}),[s,l]),c.a.createElement("div",{className:"map"},c.a.createElement(N.a,{center:d,zoom:2.5,style:{height:"100%",width:"100%"}},c.a.createElement(_.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",target:"_blank",attribution:"\xa9 <a target='_blank' href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"}),s.map((function(e){return!!e.countryInfo._id&&c.a.createElement(y.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:a,radius:Math.sqrt(e[r])*t,key:e.countryInfo._id,fillOpacity:.4,onMouseOver:function(e){e.target.openPopup()},onMouseOut:function(e){e.target.closePopup()}},c.a.createElement(x.a,null,c.a.createElement("h2",{style:{textAlign:"center"}},e.country),c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement("strong",null,"Cases: "),v()(e.cases).format()),c.a.createElement("div",null,c.a.createElement("strong",null,"Recovered: ")," ",v()(e.recovered).format()),c.a.createElement("div",null,c.a.createElement("strong",null,"Deaths: ")," ",v()(e.deaths).format())))}))))}var j=t(9),k=t(31),O=t.n(k),w=t(32),D=t.n(w),S=t(33),I=t.n(S),P=t(34),T=t.n(P),F=t(35),A=t.n(F),W=t(36),R=t.n(W),H=t(37),L=t.n(H),M=t(38),z=t.n(M),V=t(39),B=t.n(V),G=t(40),J=t.n(G),U=t(41),q=t.n(U),Y=t(42),$=t.n(Y),K=t(43),Q=t.n(K),X=t(44),Z=t.n(X),ee=t(45),ae=t.n(ee);function te(){return c.a.createElement("div",{className:"info"},c.a.createElement(j.d,null,c.a.createElement(j.b,null,c.a.createElement(j.a,null,"Prevention"),c.a.createElement(j.a,null,"Symptoms")),c.a.createElement(j.c,{className:"prevention"},c.a.createElement("div",{className:"prevention-icons"},c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:O.a,alt:"stay-home"}),c.a.createElement("span",{className:"icon__head"},"Stay at home"),c.a.createElement("span",{className:"icon__text"},"as much as you can.")),c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:I.a,alt:"social-distance"}),c.a.createElement("span",{className:"icon__head"},"Observe social distancing"),c.a.createElement("span",{className:"icon__text"},"from others around you.")),c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:D.a,alt:"wash-hands"}),c.a.createElement("span",{className:"icon__head"},"Wash your hands often"),c.a.createElement("span",{className:"icon__text"},"Use soap and water, or an alcohol-based hand rub.")),c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:T.a,alt:"wear-mask"}),c.a.createElement("span",{className:"icon__head"},"Wear a mask"),c.a.createElement("span",{className:"icon__text"},"when physical distancing is not possible.")),c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:R.a,alt:"cover-sneeze"}),c.a.createElement("span",{className:"icon__head"},"Cover your cough / sneezee"),c.a.createElement("span",{className:"icon__text"},"with your bent elbow or a tissue.")),c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:A.a,alt:"medical"}),c.a.createElement("span",{className:"icon__head"},"Seek medical attention"),c.a.createElement("span",{className:"icon__text"},"if you have a fever, cough and difficulty breathing.")))),c.a.createElement(j.c,{className:"symptoms"},c.a.createElement("div",{className:"symtoms-icons"},c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:L.a,alt:"fever"}),c.a.createElement("span",{className:"icon__head"},"Fever")),c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:z.a,alt:"cough"}),c.a.createElement("span",{className:"icon__head"},"Dry Cough")),c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:B.a,alt:"fatigue"}),c.a.createElement("span",{className:"icon__head"},"Fatigue")),c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:J.a,alt:"ache"}),c.a.createElement("span",{className:"icon__head"},"Aches and Pains")),c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:q.a,alt:"sore-throat"}),c.a.createElement("span",{className:"icon__head"},"Sore Throat")),c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:$.a,alt:"Diarrhea"}),c.a.createElement("span",{className:"icon__head"},"Diarrhea")),c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:Q.a,alt:"Conjunctivitis"}),c.a.createElement("span",{className:"icon__head"},"Conjunctivitis")),c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:Z.a,alt:"headache"}),c.a.createElement("span",{className:"icon__head"},"Headache")),c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:ae.a,alt:"rash"}),c.a.createElement("span",{className:"icon__head"},"Rash on Skin / Discoloration of Fingers or Toes"))))))}function ne(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("a",{href:"https://rohitbajaj.in/",target:"_blank",rel:"noopener noreferrer",className:"footer--link"},"rohit bajaj"),c.a.createElement("a",{href:"https://www.linkedin.com/in/rbajaj1997/",target:"_blank",rel:"noopener noreferrer",className:"footer--link"},"LinkedIn"),c.a.createElement("a",{href:"https://github.com/rbajaj1997/covid-tracker",target:"_blank",rel:"noopener noreferrer",className:"footer--link"},"github"))}function ce(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),r=t[0],s=t[1],l=e.message,i=e.time;return console.log(r),Object(n.useEffect)((function(){setTimeout((function(){s(!0),console.log("Timeout Done")}),i)}),[i]),c.a.createElement("div",{className:"snackbar leftToRight-animation ".concat(r?"hidden":"")},l)}function re(e){var a=Object(n.useState)({}),t=Object(o.a)(a,2),r=t[0],s=t[1],l=Object(n.useState)([]),u=Object(o.a)(l,2),d=u[0],f=u[1],v=Object(n.useState)(-1),h=Object(o.a)(v,2),b=h[0],N=h[1],_=Object(n.useState)("NEW"),y=Object(o.a)(_,2),x=y[0],j=y[1],k=Object(n.useState)(!0),O=Object(o.a)(k,2),w=O[0],D=O[1],S=Object(n.useState)(null),I=Object(o.a)(S,2),P=I[0],T=I[1];window.addEventListener("beforeinstallprompt",(function(e){return e.preventDefault(),console.log("Before Install Prompt fired!"),T(e),!1})),console.log(P);return Object(n.useEffect)((function(){var e={"Cache-Control":"no-cache","Content-Type":"application/json"},a=i.a.get("https://disease.sh/v3/covid-19/all",{headers:e}),t=i.a.get("https://disease.sh/v3/covid-19/countries?sort=cases&allowNull=true",{headers:e});Promise.all([a,t]).then((function(e){s(e[0].data),f(e[1].data),D(!1)})).catch((function(e){D(!1),alert("Error while fetching data!")}))}),[]),c.a.createElement("div",{className:"app ".concat(w?"":"fadeIn-animation")},w?c.a.createElement(m,{loading:w}):c.a.createElement(n.Fragment,null,c.a.createElement(E,{countryData:d,selectedCountry:b,handleCountryChange:function(e){N(e.target.value)}}),c.a.createElement(p,{globalData:r,countryData:d,selectedCountry:b,type:x,handleTypeChange:function(e){j(e)}}),c.a.createElement(g,{countryData:d}),P?c.a.createElement("button",{onClick:function(){console.log("Yes!!"),P.prompt()}}," Holla"):null,c.a.createElement(C,{countryData:d,selectedCountry:b,type:x}),c.a.createElement(te,null),navigator.onLine?null:c.a.createElement(ce,{message:"Application offline!",time:1e4}),c.a.createElement(ne,null)))}t(78);s.a.render(c.a.createElement(re,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.d44827a4.chunk.js.map