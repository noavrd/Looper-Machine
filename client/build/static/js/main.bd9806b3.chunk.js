(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(4),s=a.n(i),r=(a(9),a(2)),o=(a(10),a(1));function l(e){var t=e.sample,a=e.active,n=e.startPlaySample,i=e.setNumSamples,s=e.numSamples,l=e.setStartPlaySample,u=Object(c.useState)(!1),m=Object(r.a)(u,2),f=m[0],p=m[1],d=Object(c.useRef)(new Audio(t.url));Object(c.useEffect)((function(){n&&f&&(d.current.currentTime=0,d.current.play(),d.current.loop=!0)}),[n]);var b=function(){p(!1),d.current.pause(),d.current.remove(),0!==s&&i(s-1)};console.log(s);var j=function(){f?b():(0===s&&l(!0),p(!0),i(s+1))};return Object(c.useEffect)((function(){!a&&b()}),[a]),Object(o.jsx)("div",{onClick:function(){return a&&j()},className:f?"play sample":"notPlay sample",children:Object(o.jsx)("i",{className:"".concat(t.icon," icon")})})}var u=[{url:a.p+"static/media/breakbeats.37c82282.mp3",name:"Break Beats",icon:"fas fa-record-vinyl"},{url:a.p+"static/media/electricGuitar.230fcab8.mp3",name:"Electric Guitar",icon:"fas fa-guitar"},{url:a.p+"static/media/future_func.5eb417fc.mp3",name:"Future Func",icon:"fab fa-itch-io"},{url:a.p+"static/media/grooveA.f77c6da4.mp3",name:"Groove A",icon:"fas fa-headphones"},{url:a.p+"static/media/grooveB.3e1411b4.mp3",name:"Groove B",icon:"fas fa-music"},{url:a.p+"static/media/heavyFunc.52c24c81.mp3",name:"Heavy Func",icon:"fas fa-compact-disc"},{url:a.p+"static/media/MazePolitics.2d08c654.mp3",name:"Maze Politics",icon:"fab fa-reddit-alien"},{url:a.p+"static/media/SilentStar.f2d668af.mp3",name:"Silent Star",icon:"fas fa-star"},{url:a.p+"static/media/stompySlosh.27bdc145.mp3",name:"Stompy Slosh",icon:"fas fa-drum"}],m=function(){var e,t=Object(c.useState)(!1),a=Object(r.a)(t,2),n=a[0],i=a[1],s=Object(c.useState)(!1),m=Object(r.a)(s,2),f=m[0],p=m[1],d=Object(c.useState)(0),b=Object(r.a)(d,2),j=b[0],v=b[1];return Object(c.useEffect)((function(){console.log("useeee"),1===j?e=setInterval((function(){f&&(i(!0),console.log("noww"))}),8e3):0===j&&(clearInterval(e),e=null),j>0&&i(!1)}),[j]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Looper"}),Object(o.jsx)("div",{className:"container",children:u.map((function(e,t){return Object(o.jsx)(l,{sample:e,active:f,startPlaySample:n,setNumSamples:v,numSamples:j,setStartPlaySample:i},t)}))}),Object(o.jsx)("button",{className:f?"fa fa-pause-circle-o active":"fa fa-play-circle-o active","aria-hidden":"true",onClick:function(){p(!f),v(0),i(!1)}}),!f&&Object(o.jsx)("div",{className:"note",children:"To start the loop hit play"})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),f()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.bd9806b3.chunk.js.map