"use strict";(self.webpackChunkreact_the_movie_db=self.webpackChunkreact_the_movie_db||[]).push([[600],{639:(e,t,r)=>{r.d(t,{a:()=>c});var a=r(748);const s="Loader_threeCircles__HPJ-9";var o=r(184);const c=()=>(0,o.jsx)(a.Z1,{height:"100",width:"100",color:"#4fa94d",wrapperStyle:{},wrapperClass:s,visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})},645:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(689),s=r(87);const o="MovieListItem_moviesList__link__lE3c6";var c=r(184);const n=e=>{let{id:t,title:r}=e;const n=(0,a.TH)(),i="/"===n.pathname?"movies/":"";return(0,c.jsx)(s.rU,{className:o,to:"".concat(i).concat(t),state:{from:n},children:r})},i="MovieList_moviesList__oxGXM",l="MovieList_moviesList__item__wbg7G",h=e=>{let{movies:t}=e;return(0,c.jsx)("ul",{className:i,children:t.map((e=>{let{id:t,title:r}=e;return(0,c.jsx)("li",{className:l,children:(0,c.jsx)(n,{title:r,id:t})},t)}))})}},142:(e,t,r)=>{r.d(t,{$h:()=>a,CT:()=>s,Pn:()=>o,Q_:()=>c,c9:()=>n});const a="27e6a4b0dfd958ac8df16fcfde47f8a2",s="https://api.themoviedb.org/3",o={TRENDING_MOVIES:"/trending/movie/day",MOVIE_DETAILS:"/movie/",SEARCH_MOVIE:"/search/movie"},c={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"},n="Oops! Sorry, something went wrong. \ud83d\ude22"},600:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var a=r(791),s=r(87),o=r(639),c=r(714),n=r(142),i=r(645);const l="SearchForm_searchForm__NsJpF",h="SearchForm_searchInput__h6REp",u="SearchForm_searchButton__AQHxA";var _=r(184);const d=e=>{let{onSearch:t}=e;const[r,s]=(0,a.useState)("");return(0,_.jsxs)("form",{className:l,onSubmit:e=>{e.preventDefault(),r&&(t(r),s(""))},children:[(0,_.jsx)("input",{className:h,type:"text",placeholder:"Enter for search movies",name:"query",value:r,onChange:e=>{s(e.target.value.toLowerCase())}}),(0,_.jsx)("button",{className:u,type:"submit",children:"Search Movie"})]})},E=()=>{var e;const[t,r]=(0,s.lr)(),l=null!==(e=t.get("query"))&&void 0!==e?e:"",[h,u]=(0,a.useState)(),[E,m]=(0,a.useState)(n.Q_.IDLE),[v,f]=(0,a.useState)(),[p,S]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{if(!l)return;console.log(l);(async()=>{m(n.Q_.PENDING),S(!0);try{const e=await(0,c.Jx)(l);console.log(e),u(e),m(n.Q_.RESOLVED)}catch(e){f(e.message),m(n.Q_.REJECTED),console.log(e.message)}finally{S(!1)}})()}),[l]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(d,{value:l,onSearch:e=>{r(""!==e?{query:e}:{})}}),E===n.Q_.PENDING&&p&&(0,_.jsx)(o.a,{}),E===n.Q_.REJECTED&&(0,_.jsx)("p",{children:v}),E===n.Q_.RESOLVED&&(null===h||void 0===h?void 0:h.length)>0&&(0,_.jsx)(i.Z,{movies:h})]})}},714:(e,t,r)=>{r.d(t,{Jx:()=>l,Sg:()=>i,wr:()=>n});var a=r(294),s=r(686),o=r.n(s),c=r(142);a.Z.defaults.baseURL=c.CT,a.Z.defaults.params={api_key:c.$h};const n=async()=>{try{return(await(0,a.Z)(c.Pn.TRENDING_MOVIES)).data.results}catch{throw new Error(o().Notify.failure(c.c9))}},i=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const r=t?"/".concat(t):"";try{return(await(0,a.Z)("".concat(c.Pn.MOVIE_DETAILS).concat(e).concat(r))).data}catch{throw new Error(o().Notify.failure(c.c9))}},l=async e=>{const t="?query=".concat(e);try{return(await(0,a.Z)("".concat(c.Pn.SEARCH_MOVIE).concat(t))).data.results}catch{throw new Error(o().Notify.failure(c.c9))}}}}]);
//# sourceMappingURL=600.c0841d3e.chunk.js.map