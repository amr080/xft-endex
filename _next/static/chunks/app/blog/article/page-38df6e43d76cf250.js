(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{1410:function(e,t,n){Promise.resolve().then(n.t.bind(n,6584,23)),Promise.resolve().then(n.t.bind(n,9815,23)),Promise.resolve().then(n.bind(n,5174)),Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.bind(n,5990))},5174:function(e,t,n){"use strict";n.d(t,{default:function(){return u}});var r=n(7437),a=n(2265),i=n(6360),s=n(2835),o=n.n(s),l=n(8472);function u(){let e={newsletter_email:""},[t,n]=(0,a.useState)(e),[s,u]=(0,a.useState)(!1),[d,m]=(0,a.useState)(!1),b=async r=>{r.preventDefault(),m(!0);try{await l.Z.post("/api/newsletter",t),u(!0),setTimeout(()=>{u(!1)},3e3),m(!1),n(e)}catch(e){alert("There was an error when submitting the email. Please try again."),console.error("There was an error when submitting the email. Please try again.",e),setTimeout(()=>{u(!1),m(!1)},500)}};return(0,r.jsxs)("form",{onSubmit:b,className:"".concat(o()["newsletter-container"]),children:[(0,r.jsx)(c,{placeholder:"Get Our Newsletter",name:"newsletter_email",type:"email",handleChange:e=>{n({...t,[e.target.name]:e.target.value})},required:!0,ariaRequired:!0,disabled:s||d}),(0,r.jsx)(i.z,{variant:"primary",disabled:s||d,type:"submit",children:d?"Subscribing...":s?"Subscribed!":"Subscribe"}),(0,r.jsx)("div",{"aria-live":"polite",className:"visually-hidden",children:d?"The form is currently being submitted.":s?"The form has been successfully submitted.":""})]})}let c=e=>{let{placeholder:t,name:n,type:a,required:i,ariaRequired:s,handleChange:l}=e;return(0,r.jsx)("input",{id:n,className:"".concat(o()["newsletter-input"]," text-mono-1 text-color-primary"),style:{backgroundColor:"var(--primitive-color-endex-100-alpha-40)"},type:a,placeholder:t,name:n,required:i,"aria-required":s,maxLength:"70",onChange:l})}},6360:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var r=n(7437);n(2265);var a=n(3525),i=n(9066),s=n.n(i);let o=(0,a.j)("relative flex flex-row items-center justify-center text-mono-1 text-color-primary",{variants:{variant:{primary:"".concat(s()["button-primary"]),form:"".concat(s()["button-form"]),secondary:"".concat(s()["button-secondary"])},state:{disabled:"disabled",default:""}},defaultVariants:{variant:"primary",state:"default"}}),l=e=>{let{className:t,variant:n,children:a,disabled:i,...s}=e;return(0,r.jsx)("button",{className:o({className:t,variant:n,state:i?"disabled":"default"}),disabled:i,...s,children:a})};l.displayName="Button"},9815:function(e){e.exports={"article-details":"article_article-details__0QpRm","section-divider":"article_section-divider__b8CDm",emphasis:"article_emphasis__IJRNz","article-img":"article_article-img__rE7QM"}},6584:function(e){e.exports={"text-container":"text_text-container__36qUX",text:"text_text__2O7e3","no-padding-top":"text_no-padding-top__Qw9XG","no-padding-bottom":"text_no-padding-bottom__FqluY"}},2835:function(e){e.exports={"newsletter-container":"newsletter_newsletter-container__pzVfr","newsletter-input":"newsletter_newsletter-input__Zpidv"}},9066:function(e){e.exports={"button-primary":"button_button-primary__nK0Ln","button-form":"button_button-form__S4Rj6","button-secondary":"button_button-secondary__Ma_cn","buttom-form":"button_buttom-form__40TDF"}},5990:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/1.63ad5298.png",height:683,width:1024,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAFVBMVEUDAgMPCQoYBgY+EAscHiEjJSg9QkbN7Lr2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nGNgQAKMTCCSlZGVhRHEYGNhYWRgYmaGSTIDAANhADEtQwywAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}}},function(e){e.O(0,[715,346,173,761,971,23,744],function(){return e(e.s=1410)}),_N_E=e.O()}]);