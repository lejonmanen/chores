(this.webpackJsonpchores=this.webpackJsonpchores||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var s=a(0),o=a.n(s),r=a(3),n=a.n(r),i=(a(9),a(1));var l=e=>t=>o.a.createElement(e,Object.assign({loadFromStorage:e=>localStorage.getItem(e),saveToStorage:(e,t)=>localStorage.setItem(e,t),removeFromStorage:e=>localStorage.removeItem(e)},t));class c extends o.a.Component{constructor(...e){super(...e),this.state={title:"",lastDone:"",disableRemove:!1,dueDays:0,nextDue:null},this.setNow=e=>{this.setState({lastDone:this.getNowString()})},this.getNowString=()=>(new Date).toISOString(),this.getNextDue=e=>{if(isNaN(+e))return null;return new Date((new Date).getTime()+864e5*e).toISOString()}}render(){const e=this.state.title,t=this.state.lastDone,a=this.state.dueDays,s=this.state.nextDue,r=o=>this.props.addChore(e,t,a,s);return o.a.createElement("div",{className:"add-chore"},"Add a new task",o.a.createElement("div",{className:"grid"},o.a.createElement("input",{type:"text",placeholder:"Title",onChange:e=>this.setState({title:e.target.value}),value:this.state.title}),o.a.createElement("div",{className:"row"},o.a.createElement("input",{type:"text",placeholder:"Last done",onChange:e=>this.setState({lastDone:e.target.value}),value:this.state.lastDone,onKeyDown:e=>13===e.keyCode?r():""}),o.a.createElement("button",{onClick:this.setNow},"Now")),o.a.createElement("input",{type:"number",placeholder:"Days",title:"Expected number of days between events",onChange:e=>{this.setState({dueDays:e.target.value,nextDue:this.getNextDue(e.target.value)})},value:this.state.dueDays}),o.a.createElement("button",{onClick:r},"Add task")))}}var h=l(c);function d(e,t){if(!e||!t)return"";let a=(s=e,(new Date(t).getTime()+864e5*s-(new Date).getTime())/864e5);var s;return a<0?" overdue":a<1?" soon":""}function m(e){if(e<0)return"-"+m(-e);let t=Math.ceil(e/1e3);if(t<60)return"".concat(t,"s");let a=Math.floor(t/60),s=t%60;if(a<60)return"".concat(a,"min, ").concat(s,"s");let o=Math.floor(a/60),r=a%60;if(o<24)return"".concat(o,"h, ").concat(r,"min");let n=Math.floor(o/24),i=o%24;return n<14?"".concat(n,"d, ").concat(i,"h"):"More than ".concat(n,"d")}var u=({c:e,remove:t,didIt:a})=>{return o.a.createElement("div",{className:"chore"+d(e.dueDays,e.lastDone)},o.a.createElement("div",{className:"borderText"},o.a.createElement("div",null,e.title),o.a.createElement("div",{title:"Last done"},(r=e.lastDone,m((new Date).getTime()-new Date(r).getTime())))),o.a.createElement("div",{className:"discreet borderText"},o.a.createElement("div",{title:"How often"},(s=e.dueDays)?s<1?"More than once a day":s<2?"Every day":"Every ".concat(s," days"):""),o.a.createElement("div",{title:"Time to next"},function({lastDone:e,dueDays:t}){if(!e||!t)return"No due date";let a=new Date(e).getTime()+864e5*t,s=(new Date).getTime();return m(a-s)}(e))),o.a.createElement("button",{onClick:()=>a(e)},"Did it!"),o.a.createElement("button",{onClick:a=>t(e.title,e.lastDone),className:"ghost"},"Remove"));var s,r};var v=({chores:e,remove:t,didIt:a})=>o.a.createElement("div",{className:"chore-list"},e.map(e=>o.a.createElement(u,{c:e,didIt:a,remove:t,key:e.title+e.lastDone,dueDays:e.dueDays,nextDue:e.nextDue})));class D extends s.Component{constructor(e){super(e),this.refresh=()=>{this.setState({refreshCounter:this.refreshCounter+1})},this.didIt=e=>{this.saveList(this.state.chores.map(t=>this.sameChore(t,e)?Object(i.a)(Object(i.a)({},t),{},{lastDone:(new Date).toISOString()}):t))},this.sameChore=(e,t)=>e.title===t.title&&e.lastDone===t.lastDone,this.addNewChore=(e,t,a,s)=>{if(console.log("Add new",a,s),!this.state.chores.find(a=>this.sameChore(a,{title:e,lastDone:t}))){const o=[...this.state.chores,{title:e,lastDone:t,dueDays:a,nextDue:s}];this.saveList(o)}},this.removeChore=(e,t)=>{const a=this.state.chores.filter(a=>a.title!==e||a.lastDone!==t);this.saveList(a)},this.saveList=e=>{this.setState({chores:e}),this.props.saveToStorage("chores",JSON.stringify(e))};let t=e.loadFromStorage("chores");t||localStorage.setItem("chores",JSON.stringify([]));let a=[];if(t)try{a=JSON.parse(t)}catch(s){a=[]}this.state={chores:a,refreshCounter:0}}render(){return o.a.createElement("div",{className:"App"},o.a.createElement("button",{onClick:this.refresh,style:{position:"absolute",right:"0px",top:"0px",margin:"0px"}},"Refresh"),o.a.createElement(h,{addChore:this.addNewChore}),o.a.createElement(v,{chores:this.state.chores,remove:this.removeChore,didIt:this.didIt}))}}var g=l(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.a379ffba.chunk.js.map