(this["webpackJsonpcounter-task"]=this["webpackJsonpcounter-task"]||[]).push([[0],{12:function(e,t,a){e.exports=a(24)},17:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),i=a.n(r),l=(a(17),a(5),a(6),a(1)),u=c.a.memo((function(){var e=Object(l.c)((function(e){return e.counterSettings})),t=["Vvedite korrektnoe znachenie","Nazhmite 'set' chto bi primenit nastroiki"],a=e.value>=e.max?"active":"",n=e.editMode?c.a.createElement("div",{className:"blockCounterScreen + ".concat(a)}," ",e.value," "):e.max===e.min||e.min<0?c.a.createElement("div",{className:"blockCounterScreen + active"}," ",t[0]," "):c.a.createElement("div",{className:"blockCounterScreen"},t[1]);return c.a.createElement("div",null,n)}));function o(e){return c.a.createElement("button",{className:e.className,onClick:e.onClick,disabled:e.disabled},e.title)}function s(e){var t=Object(l.c)((function(e){return e.counterSettings})),a=t.max===t.min||t.min<0?"activeStyle":"defaultStyle";return c.a.createElement("div",null,c.a.createElement("div",{className:a},c.a.createElement("span",null,e.title),c.a.createElement("input",{type:"number",value:e.value,onChange:e.onChange,min:e.min,max:e.max})))}var m=c.a.memo((function(e){var t=Object(l.c)((function(e){return e.counterSettings})),a=t.editMode||t.max===t.min||t.min<0?"buttonLowOpacity":"buttonNormal",n=t.min===t.max||t.min<0||0===t.max?!t.set:t.set;return c.a.createElement("div",{className:"settingCounter"},c.a.createElement(s,{onChange:function(t){var a=Number(t.currentTarget.value);e.stateValueMax(a)},min:t.min,value:t.max,title:"max value: "}),c.a.createElement(s,{onChange:function(t){var a=Number(t.currentTarget.value);e.stateValueMin(a)},value:t.min,max:t.max,title:"min value: ",min:-1}),c.a.createElement("div",null,c.a.createElement(o,{className:a,size:"small",onClick:function(){e.setChangedValue(t.min)},disabled:n,title:"set"})))})),v=a(2),d={max:1,min:0,value:0,inc:!0,reset:!0,set:!1,editMode:!1},E=c.a.memo((function(e){var t=Object(l.c)((function(e){return e.counterSettings})),a=t.reset?"buttonLowOpacity":"buttonNormal",n=t.inc?"buttonLowOpacity":"buttonNormal";return c.a.createElement("div",{className:"blockCLickButton"},c.a.createElement(o,{onClick:function(){var a=t.value;e.changeValue(a)},disabled:t.inc,title:"inc",className:n}),c.a.createElement(o,{onClick:function(){e.resetValue()},disabled:t.reset,title:"reset",className:a}))}));var b=function(){var e=Object(l.b)(),t=Object(n.useCallback)((function(){e({type:"CHANGE-VALUE"})}),[e]),a=Object(n.useCallback)((function(){e({type:"RESET-VALUE"})}),[e]),r=Object(n.useCallback)((function(t){e(function(e){return{type:"SET-VALUE-MIN",valueMin:e}}(t))}),[e]),i=Object(n.useCallback)((function(t){e(function(e){return{type:"SET-VALUE-MAX",valueMax:e}}(t))}),[e]),o=Object(n.useCallback)((function(t){e(function(e){return{type:"SET-CHANGED-VALUE",valueVs:e}}(t))}),[e]);return c.a.createElement("div",{className:"appWrapper"},c.a.createElement("div",{className:"wrapperBlock"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},c.a.createElement(u,null),c.a.createElement(E,{changeValue:t,resetValue:a})),c.a.createElement("div",null,c.a.createElement(m,{setChangedValue:o,stateValueMax:i,stateValueMin:r})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=a(3),p=Object(f.b)({counterSettings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-VALUE":var a=Object(v.a)({},e),n=a.value+1;return n>=a.max?a.inc=!0:a.inc=!1,Object(v.a)({},a,{reset:!1,set:!0,value:n});case"RESET-VALUE":var c=Object(v.a)({},e);return c.value>0&&(c.value=c.min),c=Object(v.a)({},c,{reset:!0,inc:!1});case"SET-VALUE-MIN":var r=Object(v.a)({},e);return Object(v.a)({},r,{min:t.valueMin,reset:!0,inc:!0,editMode:!1,value:t.valueMin,set:!1});case"SET-VALUE-MAX":var i=Object(v.a)({},e);return Object(v.a)({},i,{max:t.valueMax,reset:!0,inc:!0,editMode:!1,set:!1});case"SET-CHANGED-VALUE":var l=Object(v.a)({},e);return Object(v.a)({},l,{value:t.valueVs,inc:!1,editMode:!0,reset:!0,set:!0});default:return e}}}),N=Object(f.c)(p);window.store=N,i.a.render(c.a.createElement(l.a,{store:N},c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){},6:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.c5597ec2.chunk.js.map