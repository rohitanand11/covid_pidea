(this.webpackJsonpcorona_pidea=this.webpackJsonpcorona_pidea||[]).push([[0],[,function(e,a,t){e.exports={container:"Maintab_container__9gloX",CardContainer:"Maintab_CardContainer__1VSyP",Heading:"Maintab_Heading__ZxSkS",MiddleLables:"Maintab_MiddleLables__30JSI",labelStyling:"Maintab_labelStyling__1VdDn"}},function(e,a,t){e.exports={container:"CountriesStats_container__8OyPG",CardContainer:"CountriesStats_CardContainer__24EKq",IndividualCard:"CountriesStats_IndividualCard__3lzv7",CountryName:"CountriesStats_CountryName__2d9It"}},function(e,a,t){e.exports={container:"CovidPedia_container__1W8k8",Maintab:"CovidPedia_Maintab__1SPUj",CountriesStats:"CovidPedia_CountriesStats__2J7t5"}},function(e,a,t){e.exports={Navbar:"Navbar_Navbar__3z-ht",brandName:"Navbar_brandName__1p98M"}},,,,,function(e,a,t){e.exports={container:"Card_container__1kHud"}},,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),o=t.n(r),i=(t(18),t(4)),c=t.n(i),s=function(){return l.a.createElement("div",{className:c.a.Navbar},l.a.createElement("div",{className:c.a.brandName},"Covid-Pidea"))},d=t(11),m=t(7),u=t(8),C=t(12),v=t(10),p=t(9),_=t.n(p),f=function(e){return l.a.createElement("div",{className:_.a.container},e.children)},N=t(1),E=t.n(N),b=function(e){return l.a.createElement("div",{className:E.a.container},l.a.createElement("div",{className:E.a.CardContainer},l.a.createElement(f,null,l.a.createElement("p",{className:E.a.Heading},"global"),l.a.createElement("p",null,"NewConfirmed : ",e.globalData.NewConfirmed),l.a.createElement("p",null,"NewDeaths : ",e.globalData.NewDeaths),l.a.createElement("p",null,"NewRecovered   : ",e.globalData.NewRecovered),l.a.createElement("p",null,"TotalConfirmed : ",e.globalData.TotalConfirmed),l.a.createElement("p",null,"TotalRecovered : ",e.globalData.TotalRecovered)),l.a.createElement("div",{className:E.a.MiddleLables},l.a.createElement("div",{className:E.a.labelStyling},"\u2190  Cases globally"),l.a.createElement("div",{className:E.a.labelStyling}," Cases in India \u2192")),l.a.createElement(f,null,l.a.createElement("p",{className:E.a.Heading},"India"),l.a.createElement("p",null,"NewConfirmed : ",e.IndiaData.NewConfirmed),l.a.createElement("p",null,"NewDeaths : ",e.IndiaData.NewDeaths),l.a.createElement("p",null,"NewRecovered   : ",e.IndiaData.NewRecovered),l.a.createElement("p",null,"TotalConfirmed : ",e.IndiaData.TotalConfirmed),l.a.createElement("p",null,"TotalRecovered : ",e.IndiaData.TotalRecovered))))},D=t(2),h=t.n(D),g=function(e){return l.a.createElement("div",{className:h.a.container},l.a.createElement("div",{className:h.a.CardContainer},e.countryData?e.countryData.map((function(e,a){return l.a.createElement("div",{key:e.CountryCode,className:h.a.IndividualCard},l.a.createElement(f,null,l.a.createElement("p",{className:h.a.CountryName},e.Country),l.a.createElement("p",null,"NewConfirmed : ",e.NewConfirmed),l.a.createElement("p",null,"NewDeaths : ",e.NewDeaths),l.a.createElement("p",null,"NewRecovered   : ",e.NewRecovered),l.a.createElement("p",null,"TotalConfirmed : ",e.TotalConfirmed),l.a.createElement("p",null,"TotalRecovered : ",e.TotalRecovered)))})):null))},w=t(3),y=t.n(w),S=function(e){Object(C.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={CompleteData:null,fetchingDataComplete:!1},e.componentDidMount=function(){e.fetchData()},e.fetchData=function(){fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(a){console.log(a);var t=Object(d.a)({},a);e.setState({CompleteData:t,fetchingDataComplete:!0})}))},e.findIndia=function(){for(var a=0;a<e.state.CompleteData.Countries.length;a++)if("India"===e.state.CompleteData.Countries[a].Country)return e.state.CompleteData.Countries[a]},e}return Object(u.a)(t,[{key:"render",value:function(){return console.log("rendering covid screen"),l.a.createElement("div",{className:y.a.container},l.a.createElement("div",{className:y.a.Maintab},this.state.CompleteData?l.a.createElement(b,{globalData:this.state.CompleteData.Global,IndiaData:this.findIndia()}):null),l.a.createElement("div",{className:y.a.CountriesStats},this.state.CompleteData?l.a.createElement(g,{countryData:this.state.CompleteData.Countries}):null))}}]),t}(n.Component),I=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.3819958a.chunk.js.map