(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{327:function(e,n,t){"use strict";t.r(n);var o=t(3),l=t(2),s=t(1),r=t(6),g=t(5),f=t(116),a=t(12),c=t(93),d=t(66),p=new o.a({layers:[new r.a({source:new a.b})],target:"map",view:new l.a({projection:"EPSG:3857",center:[0,0],zoom:1})}),i=document.getElementById("epsg-query"),u=document.getElementById("epsg-search"),h=document.getElementById("epsg-result"),v=document.getElementById("render-edges");function w(e,n,t,o){if(null===e||null===n||null===t||null===o)return h.innerHTML="Nothing usable found, using EPSG:3857...",void p.setView(new l.a({projection:"EPSG:3857",center:[0,0],zoom:1}));h.innerHTML="("+e+") "+n;var r="EPSG:"+e;d.a.defs(r,t),Object(f.a)(d.a);var a=Object(g.g)(r),c=Object(g.i)("EPSG:4326",a),i=Object(s.a)([o[1],o[2],o[3],o[0]],c);a.setExtent(i);var u=new l.a({projection:a});p.setView(u),u.fit(i)}u.onclick=function(e){var n;n=i.value,h.innerHTML="Searching ...",fetch("https://epsg.io/?format=json&q="+n).then(function(e){return e.json()}).then(function(e){var n=e.results;if(n&&0<n.length)for(var t=0,o=n.length;t<o;t++){var r=n[t];if(r){var a=r.code,c=r.name,i=r.proj4,u=r.bbox;if(a&&0<a.length&&i&&0<i.length&&u&&4==u.length)return void w(a,c,i,u)}}w(null,null,null,null)}),e.preventDefault()},v.onchange=function(){p.getLayers().forEach(function(e){if(e instanceof r.a){var n=e.getSource();n instanceof c.a&&n.setRenderReprojectionEdges(v.checked)}})}}},[[327,0]]]);
//# sourceMappingURL=reprojection-by-code.js.map