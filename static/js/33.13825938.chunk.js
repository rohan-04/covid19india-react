(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[33],{247:function(e,t,a){"use strict";a.r(t);var i=a(81),l=a(7),n=a(31),s=a(82),d=a.n(s),c=a(85),o=a.n(c),r=a(0),m=a.n(r),u=a(84),v=m.a.memo((function(e){var t=e.statistic,a=e.data,i=e.isPerMillion,s=e.lastUpdatedTT,c=Object(n.i)(a,t,i,s),o=c.total,r=c.delta,v=Object(u.c)({total:o,delta:r,config:l.p}),g=l.t[t];return m.a.createElement("div",{className:"cell statistic"},!g.hideDelta&&m.a.createElement(u.a.div,{className:d()("delta","is-".concat(t)),title:r},v.delta.interpolate((function(e){return e>0?"\u2191"+Object(n.e)(e,g.format):e<0?"\u2193"+Object(n.e)(Math.abs(e),g.format):""}))),m.a.createElement(u.a.div,{className:"total",title:o},v.total.interpolate((function(e){return Object(n.e)(e,g.format,t)}))))}),(function(e,t){var a,i,l,n;return!!o()(null===(a=e.data)||void 0===a?void 0:a.total,null===(i=t.data)||void 0===i?void 0:i.total)&&(!!o()(null===(l=e.data)||void 0===l?void 0:l.delta,null===(n=t.data)||void 0===n?void 0:n.delta)&&!!o()(e.isPerMillion,t.isPerMillion))})),g=a(103),b=a(88),h=a(92),N=a(251);var C=m.a.memo((function(e){var t,a=e.stateCode,i=e.districtName,n=e.data,s=e.isPerMillion,c=e.regionHighlighted,o=e.setRegionHighlighted,u=e.expandTable,C=e.lastUpdatedTT,E=Object(N.a)().t,p=Object(r.useCallback)((function(){c.districtName!==i&&o(Object(h.a)(c,(function(e){e.stateCode=a,e.districtName=i})))}),[c,i,o,a]),f=u?l.w:l.v;return m.a.createElement("div",{className:d()("row","district",{"is-highlighted":(null===c||void 0===c?void 0:c.districtName)===i}),onMouseEnter:p},m.a.createElement("div",{className:"cell"},m.a.createElement("div",{className:"state-name"},E(i)),(null===n||void 0===n||null===(t=n.meta)||void 0===t?void 0:t.notes)&&m.a.createElement(g.a,{data:n.meta.notes},m.a.createElement(b.j,{size:16}))),f.map((function(e){return m.a.createElement(v,Object.assign({key:e},{statistic:e,data:n,isPerMillion:s,lastUpdatedTT:C}))})))}),(function(e,t){var a,i,l,n,s,d;return!!o()(null===(a=e.data)||void 0===a?void 0:a.total,null===(i=t.data)||void 0===i?void 0:i.total)&&(!!o()(null===(l=e.data)||void 0===l?void 0:l.delta,null===(n=t.data)||void 0===n?void 0:n.delta)&&(!!o()(null===(s=e.data)||void 0===s?void 0:s.last_updated,null===(d=t.data)||void 0===d?void 0:d.last_updated)&&(!!o()(e.isPerMillion,t.isPerMillion)&&(!(!o()(e.regionHighlighted.districtName,t.regionHighlighted.districtName)&&(o()(e.regionHighlighted.districtName,e.districtName)||o()(t.regionHighlighted.districtName,t.districtName)))&&!!o()(e.expandTable,t.expandTable)))))})),E=a(147),p=a(5),f=a(213);t.default=m.a.memo((function(e){var t,a,s=this,c=e.data,o=e.stateCode,u=e.districtName,j=e.isPerMillion,O=e.regionHighlighted,T=e.setRegionHighlighted,k=e.expandTable,H=e.lastUpdatedTT,M=Object(r.useState)(!1),P=Object(i.a)(M,2),w=P[0],x=P[1],D=Object(f.a)("districtSortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),U=Object(i.a)(D,2),A=U[0],y=U[1],S=Object(p.g)(),R=Object(N.a)().t,_=Object(r.useRef)(),z=Object(r.useCallback)((function(e){y(Object(h.a)(A,(function(t){t.isAscending=!A.isAscending,t.sortColumn=e})))}),[A,y]),F=Object(r.useCallback)((function(e,t){if("districtName"!==A.sortColumn){var a=l.t[A.sortColumn],i=A.delta&&!a.hideDelta?"delta":"total",s=Object(n.i)(c.districts[e],A.sortColumn,j,H)[i],d=Object(n.i)(c.districts[t],A.sortColumn,j,H)[i];return A.isAscending?s-d:d-s}return A.isAscending?e.localeCompare(t):t.localeCompare(e)}),[A,c,j,H]),I=Object(r.useCallback)((function(){o?O.stateCode!==o&&T(Object(h.a)(O,(function(e){e.stateCode=o,e.districtName=null}))):u&&(O.districtName===u&&O.stateCode===c.stateCode||T(Object(h.a)(O,(function(e){e.stateCode=c.stateCode,e.districtName=u}))))}),[c.stateCode,u,O,T,o]),J=Object(r.useCallback)((function(){c.districts&&x(!w)}),[w,c]),V=R(u);u===l.C&&(V="".concat(R(l.C)," [").concat(R(l.s[c.stateCode]),"]"));var q=Object(r.useCallback)((function(e){S.push("state/".concat(e))}),[S]),B=Object(r.useCallback)((function(){x(!1),_.current.scrollIntoView({block:"start"})}),[o]),G=k?l.w:l.v;return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:d()("row",{"is-total":"TT"===o},{"is-highlighted":o&&(null===O||void 0===O?void 0:O.stateCode)===o||u&&(null===O||void 0===O?void 0:O.districtName)===u&&(null===O||void 0===O?void 0:O.stateCode)===c.stateCode}),onMouseEnter:I,onClick:J,ref:_},m.a.createElement("div",{className:"cell"},m.a.createElement("div",{className:"state-name fadeInUp"},R(l.s[o])||V),(null===c||void 0===c||null===(t=c.meta)||void 0===t?void 0:t.notes)&&m.a.createElement(g.a,{data:c.meta.notes},m.a.createElement(b.j,{size:16}))),G.map((function(e){return m.a.createElement(v,Object.assign({key:e},{data:c,statistic:e,isPerMillion:j,lastUpdatedTT:H}))}))),w&&m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"state-meta"},m.a.createElement("div",{className:"state-meta-top"},(null===c||void 0===c||null===(a=c.meta)||void 0===a?void 0:a.last_updated)&&m.a.createElement("p",{className:"last-updated"},m.a.createElement(b.c,null),Object(n.a)("".concat(Object(n.d)(c.meta.last_updated)," ").concat(R("ago")))),m.a.createElement("div",{className:"state-page",onClick:q.bind(this,o)},m.a.createElement(b.h,null),m.a.createElement("span",null,R("See more details on {{state}}",{state:o})))),l.C in c.districts&&m.a.createElement("div",{className:"state-meta-bottom"},m.a.createElement("div",{className:d()("disclaimer")},m.a.createElement(b.a,null),m.a.createElement("span",null,R("District-wise data not available in state bulletin"))))),m.a.createElement("div",{className:d()("row","heading")},m.a.createElement("div",{className:"cell heading",onClick:z.bind(this,"districtName")},m.a.createElement("div",{className:"district-name"},R("District")),"districtName"===A.sortColumn&&m.a.createElement("div",{className:d()("sort-icon",{invert:!A.isAscending})},m.a.createElement(b.e,{size:10}))),G.map((function(e){return m.a.createElement(E.a,Object.assign({key:e},{statistic:e,sortData:A,setSortData:y},{handleSort:z.bind(s,e)}))})))),w&&Object.keys(c.districts).sort((function(e,t){return F(e,t)})).map((function(e){return m.a.createElement(C,Object.assign({data:c.districts[e],key:e},{districtName:e,regionHighlighted:O,setRegionHighlighted:T,stateCode:o,isPerMillion:j,expandTable:k,lastUpdatedTT:H}))})),w&&m.a.createElement("div",{className:"spacer-row"},m.a.createElement("div",{className:"spacer"},m.a.createElement("p",null,"End of ".concat(R(l.s[o]),"'s districts")),m.a.createElement("div",{className:"fold",onClick:B},m.a.createElement(b.g,null)))))}),(function(e,t){var a,i,l,n;return!!o()(null===(a=e.data)||void 0===a?void 0:a.total,null===(i=t.data)||void 0===i?void 0:i.total)&&(!!o()(null===(l=e.data)||void 0===l?void 0:l.delta,null===(n=t.data)||void 0===n?void 0:n.delta)&&(!!o()(e.isPerMillion,t.isPerMillion)&&(!(!o()(e.regionHighlighted.stateCode,t.regionHighlighted.stateCode)&&o()(e.regionHighlighted.stateCode,e.stateCode)||o()(t.regionHighlighted.stateCode,t.stateCode))&&(!(!o()(e.regionHighlighted.districtName,t.regionHighlighted.districtName)&&o()(e.regionHighlighted.districtName,e.districtName)||o()(t.regionHighlighted.districtName,t.districtName))&&!!o()(e.expandTable,t.expandTable)))))}))}}]);
//# sourceMappingURL=33.13825938.chunk.js.map