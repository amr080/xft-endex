(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{2450:function(e,t,n){Promise.resolve().then(n.t.bind(n,6749,23)),Promise.resolve().then(n.bind(n,2048)),Promise.resolve().then(n.bind(n,5174)),Promise.resolve().then(n.t.bind(n,9066,23)),Promise.resolve().then(n.t.bind(n,6842,23)),Promise.resolve().then(n.t.bind(n,4078,23)),Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,5990))},2048:function(e,t,n){"use strict";var r=n(7437),a=n(2265),i=n(7776),o=n(8938),l=n(5898),s=n(4605),d=n(3466);t.default=()=>{let e=(0,a.useRef)(null),[t,n]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let e=window.matchMedia("(prefers-color-scheme: dark)"),t=e=>{n(e.matches?"dark":"light")};return n(e.matches?"dark":"light"),e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}},[]),(0,a.useEffect)(()=>{if(!t)return;let n=e.current,r=n.offsetWidth,a=Math.min(r,n.offsetHeight),c=(()=>{let e,c,u,m,f,h;let _=new i.Ilk("dark"===t?0:16448250),p=new i.Ilk("dark"===t?8421504:0),b=new i.Ilk("dark"===t?0:4079681),g="dark"!==t,v="dark"===t?1:.06,w=new i.Ilk("dark"===t?16777215:4079681),A="dark"===t?new i.Ilk(.28,.28,.28):new i.Ilk(.5,.5,.5),x="dark"===t?2:0,P="dark"===t?.125:.065,y="dark"===t,S="dark"!==t,k=i.bdR,M="dark"===t?5e3:9500,C="".concat(A.r,", ").concat(A.g,", ").concat(A.b);function z(){let e=n.offsetWidth,t=Math.min(e,n.offsetHeight);c.aspect=e/t,c.updateProjectionMatrix(),f.setSize(e,t),m.setSize(e,t)}return function(){h=new i.ZAu,function(){(e=new i.xsS).background=_,(c=new i.cPb(45,r/a,1,1e3)).position.set(31,0,0),(f=new i.CP7({powerPreference:"high-performance"})).setPixelRatio(window.devicePixelRatio),f.setSize(r,a),n.appendChild(f.domElement),(u=new o.z(c,f.domElement)).enableDamping=!0,u.dampingFactor=.03,u.enablePan=!1,u.enableZoom=!1,u.maxPolarAngle=Math.PI/2,u.minPolarAngle=Math.PI/2,u.autoRotate=!0,u.autoRotateSpeed=.3;let t=new i.dd2(r,a,{samples:10}),h=new s.C(e,c),p=new d.m(new i.FM8(r,a),x,.8,.65);(m=new l.x(f,t)).addPass(h),m.addPass(p),m.setSize(r,a),m.setPixelRatio(window.devicePixelRatio)}();let t=function(){let e=new i.DvJ(8,8,8),t=new i.vBJ({color:b,transparent:g,opacity:v}),n=new i.TOt(e),r=new i.FT0({color:p,dashSize:.2,gapSize:.3}),a=new i.DvJ(.4,.4,.4),o=new i.vBJ({color:w}),l=new i.Kj0(e,t),s=new i.ejS(n,r);s.computeLineDistances();let d=new i.ZAu;d.add(l),d.add(s);let c=[[-4,-4,4],[-4,4,4],[-4,4,-4],[-4,-4,-4],[4,4,4],[4,4,-4],[4,-4,4],[4,-4,-4]],u=new i.SPe(a,o,c.length),m=new i.Tme;c.forEach((e,t)=>{m.position.set(e[0],e[1],e[2]),m.updateMatrix(),u.setMatrixAt(t,m.matrix)}),d.add(u);let f={time:{value:0},color:{value:A}},h=function(e){let t=[],n=[],r=()=>{n.push(Math.random()*Math.PI,Math.random()*Math.PI*2,(.9*Math.random()+.1)*Math.PI*.1,.9*Math.random()+.1)},a=Array(M).fill().map(e=>(t.push(2*Math.random()+.5),r(),new i.Pa4((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8)));for(let e=0;e<M;e++)t.push(1*Math.random()+1),r();let o=new i.u9r().setFromPoints(a);o.setAttribute("sizes",new i.a$l(t,1)),o.setAttribute("shift",new i.a$l(n,4));let l=new i.UY4({size:P,transparent:y,depthTest:S,blending:k,onBeforeCompile:t=>{t.uniforms.time=e.time,t.uniforms.color=e.color,t.vertexShader="\n          uniform float time;\n          attribute float sizes;\n          attribute vec4 shift;\n          varying vec3 vColor;\n          ".concat(t.vertexShader,"\n        ").replace("gl_PointSize = size;","gl_PointSize = size * sizes;").replace("#include <color_vertex>","#include <color_vertex>\n            float d = length(abs(position) / vec3(40., 10., 40));\n            d = clamp(d, 0., 1.);\n            vColor = vec3(".concat(C,");\n          ")).replace("#include <begin_vertex>","#include <begin_vertex>\n            float t = time;\n            float moveT = mod(shift.x + shift.z * t, PI2);\n            float moveS = mod(shift.y + shift.z * t, PI2);\n            transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.w;\n\n            // Keep particles within the cube boundaries\n            transformed = clamp(transformed, vec3(-".concat(4,"), vec3(").concat(4,"));\n          ")),t.fragmentShader="\n          uniform vec3 color;\n          varying vec3 vColor;\n          ".concat(t.fragmentShader,"\n        ").replace("#include <clipping_planes_fragment>","#include <clipping_planes_fragment>\n            float d = length(gl_PointCoord.xy - 0.5);\n          ").replace("vec4 diffuseColor = vec4( diffuse, opacity );","vec4 diffuseColor = vec4( color, smoothstep(0.5, 0.1, d) );")}});return new i.woe(o,l)}(f);return d.add(h),d.userData.particleCube=h,d.userData.gu=f,d}();h.add(t),e.add(h),h.rotation.x=i.M8C.degToRad(-110),h.rotation.y=i.M8C.degToRad(-31),h.rotation.z=i.M8C.degToRad(-30),f.setAnimationLoop(()=>{u.update(),m.render()})}(),window.addEventListener("resize",z,!1),()=>{window.removeEventListener("resize",z,!1),null==n||n.removeChild(f.domElement)}})();return()=>{c()}},[t]),(0,r.jsx)("div",{ref:e})}},5174:function(e,t,n){"use strict";n.d(t,{default:function(){return d}});var r=n(7437),a=n(2265),i=n(6360),o=n(2835),l=n.n(o),s=n(8472);function d(){let e={newsletter_email:""},[t,n]=(0,a.useState)(e),[o,d]=(0,a.useState)(!1),[u,m]=(0,a.useState)(!1),f=async r=>{r.preventDefault(),m(!0);try{await s.Z.post("/api/newsletter",t),d(!0),setTimeout(()=>{d(!1)},3e3),m(!1),n(e)}catch(e){alert("There was an error when submitting the email. Please try again."),console.error("There was an error when submitting the email. Please try again.",e),setTimeout(()=>{d(!1),m(!1)},500)}};return(0,r.jsxs)("form",{onSubmit:f,className:"".concat(l()["newsletter-container"]),children:[(0,r.jsx)(c,{placeholder:"Get Our Newsletter",name:"newsletter_email",type:"email",handleChange:e=>{n({...t,[e.target.name]:e.target.value})},required:!0,ariaRequired:!0,disabled:o||u}),(0,r.jsx)(i.z,{variant:"primary",disabled:o||u,type:"submit",children:u?"Subscribing...":o?"Subscribed!":"Subscribe"}),(0,r.jsx)("div",{"aria-live":"polite",className:"visually-hidden",children:u?"The form is currently being submitted.":o?"The form has been successfully submitted.":""})]})}let c=e=>{let{placeholder:t,name:n,type:a,required:i,ariaRequired:o,handleChange:s}=e;return(0,r.jsx)("input",{id:n,className:"".concat(l()["newsletter-input"]," text-mono-1 text-color-primary"),style:{backgroundColor:"var(--primitive-color-endex-100-alpha-40)"},type:a,placeholder:t,name:n,required:i,"aria-required":o,maxLength:"70",onChange:s})}},6360:function(e,t,n){"use strict";n.d(t,{z:function(){return s}});var r=n(7437);n(2265);var a=n(3525),i=n(9066),o=n.n(i);let l=(0,a.j)("relative flex flex-row items-center justify-center text-mono-1 text-color-primary",{variants:{variant:{primary:"".concat(o()["button-primary"]),form:"".concat(o()["button-form"]),secondary:"".concat(o()["button-secondary"])},state:{disabled:"disabled",default:""}},defaultVariants:{variant:"primary",state:"default"}}),s=e=>{let{className:t,variant:n,children:a,disabled:i,...o}=e;return(0,r.jsx)("button",{className:l({className:t,variant:n,state:i?"disabled":"default"}),disabled:i,...o,children:a})};s.displayName="Button"},6749:function(e){e.exports={"hero-container":"blog_hero-container__q95IU","hero-left":"blog_hero-left__UHclo","hero-title":"blog_hero-title__vebCB","section-divider":"blog_section-divider__uwXh_","featured-container":"blog_featured-container__8nZq0","latest-container":"blog_latest-container__8H4_6","hero-right":"blog_hero-right__sS3yo"}},6842:function(e){e.exports={"featured-article":"featured-article_featured-article__76VJJ","featured-article__text":"featured-article_featured-article__text__lEl2K","featured-article__img":"featured-article_featured-article__img__dvwuN"}},4078:function(e){e.exports={"latest-grid":"latest-grid_latest-grid__vkzhQ",article:"latest-grid_article__OHFv4",article__img:"latest-grid_article__img__FP38f",article__text:"latest-grid_article__text__ytL8S"}},2835:function(e){e.exports={"newsletter-container":"newsletter_newsletter-container__pzVfr","newsletter-input":"newsletter_newsletter-input__Zpidv"}},9066:function(e){e.exports={"button-primary":"button_button-primary__nK0Ln","button-form":"button_button-form__S4Rj6","button-secondary":"button_button-secondary__Ma_cn","buttom-form":"button_buttom-form__40TDF"}},5990:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/1.63ad5298.png",height:683,width:1024,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAFVBMVEUDAgMPCQoYBgY+EAscHiEjJSg9QkbN7Lr2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nGNgQAKMTCCSlZGVhRHEYGNhYWRgYmaGSTIDAANhADEtQwywAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}}},function(e){e.O(0,[20,346,689,173,231,761,578,971,23,744],function(){return e(e.s=2450)}),_N_E=e.O()}]);