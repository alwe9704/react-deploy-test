(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),s=n(4),a=n.n(s),i=(n(14),n(3)),o=n.n(i),u=n(5),h=n(6),d=n(7),j=n(9),l=n(8),f=(n(16),n(17),n(0));var m=function(t){var e=t.name;return Object(f.jsxs)("div",{className:"monster",children:[Object(f.jsx)("img",{src:"http://robohash.org/".concat(e,"?set=set2"),alt:""}),Object(f.jsx)("h2",{children:e})]})};n(19);var p=function(t){var e=t.handleChange;return Object(f.jsx)("input",{className:"searchField",type:"text",onChange:function(t){e(t.target.value)}})};function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(t,e).then((function(t){return t.json()})).then((function(t){return t}))}var b=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(h.a)(this,n),(t=e.call(this,{})).updateString=function(e){t.setState({searchString:e})},t.state={monsters:[],searchString:""},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v("https://jsonplaceholder.typicode.com/users");case 2:e=t.sent,n=[],e.map((function(t){n.push({name:t.username})})),this.setState({monsters:n});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Monsterdeck"}),Object(f.jsx)("div",{children:Object(f.jsx)(p,{handleChange:function(e){return t.setState({searchString:e})}})}),Object(f.jsx)("div",{className:"monster-grid",children:null!=this.state.monsters?this.state.monsters.filter((function(e){return e.name.toLowerCase().includes(t.state.searchString.toLowerCase())})).map((function(t){return Object(f.jsx)(m,{name:t.name},t.name)})):Object(f.jsx)("div",{children:"Empty"})})]})}}]),n}(r.Component),g=b,x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),s(t),a(t)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),x()}},[[20,1,2]]]);
//# sourceMappingURL=main.fd9599b3.chunk.js.map