import{W as p,j as a,F as u,s as r,R as h,a as f}from"./vendor.3bd5c8f4.js";const x=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function c(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=c(t);fetch(t.href,n)}};x();const m=p`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Red Hat Display', sans-serif;
  }

  p {
      font-size: 16px;
  }
`,o=a.exports.jsx,i=a.exports.jsxs,g={colors:{paleBlue:"hsl(225, 100%, 94%)",brightBlue:"hsl(245, 75%, 52%)",veryPaleBlue:"hsl(225, 100%, 98%)",desaturatedBlue:"hsl(224, 23%, 55%)",darkBlue:"hsl(223, 47%, 23%)"}},y=({children:e})=>o(u,{theme:g,children:e}),b=()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",children:i("g",{fill:"none",fillRule:"evenodd",children:[o("circle",{cx:"24",cy:"24",r:"24",fill:"#DFE6FB"}),o("path",{fill:"#717FA6",fillRule:"nonzero",d:"M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"})]})}),w=r.div`
  width: 90vw;
  max-width: 375px;
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 22px;
`,v=r.div`
  background-image: url('/assets/illustration-hero.svg');
  height: 200px;
  width: 100%;
  border-radius: 20px 20px 0 0;
`,k=r.h2`
  font-size: 22px;
  color: ${e=>e.theme.colors.darkBlue};
  margin: 30px 0 22px 0;

  @media (min-width: 1440px) {
    font-size: 28px;
  }
`,B=r.p`
  font-size: 15px;
  color: ${e=>e.theme.colors.desaturatedBlue};
  text-align: center;
  width: 80%;

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`,z=r.div`
  display: flex;
  align-items: center;
  background-color: ${e=>e.theme.colors.veryPaleBlue};
  width: 85%;
  margin: 22px 0;
  padding: 0 16px;
  border-radius: 5px;
`,S=r.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 16px;
  padding: 20px 0;
`,P=r.h3`
  font-size: 14px;
  color: ${e=>e.theme.colors.darkBlue};

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`,$=r.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.desaturatedBlue};

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`,C=r.a`
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${e=>e.theme.colors.brightBlue};
    text-decoration: none;
  }

  @media (min-width: 1440px) {
    font-size: 15px;
  }
`,j=r.button`
  background-color: ${e=>e.theme.colors.brightBlue};
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  padding: 15px 20px;
  width: 85%;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  &:hover {
    background-color: ${e=>e.theme.colors.darkBlue};
  }
`,L=r.a`
  font-size: 15px;
  font-weight: bold;
  color: ${e=>e.theme.colors.desaturatedBlue};
  margin-top: 22px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${e=>e.theme.colors.darkBlue};
  }

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`,O=r.div`
  padding: 80px 0;
  background-color: ${e=>e.theme.colors.paleBlue};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1440px) {
    background-image: url('/assets/pattern-background-desktop.svg');
  }
  background-repeat: no-repeat;
  background-color: ${e=>e.theme.colors.paleBlue};
`,R=()=>o(O,{children:i(w,{children:[o(v,{}),o(k,{children:"Order Summary"}),o(B,{children:"You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"}),i(z,{children:[o(b,{}),i(S,{children:[o(P,{children:"Annual Plan"}),o($,{children:"$59.99/year"})]}),o(C,{href:"url",children:"Change"})]}),o(j,{children:"Proceed to Payment"}),o(L,{href:"url",children:"Cancel Order"})]})});function F(){return i(y,{children:[o(m,{}),o(R,{})]})}h.render(o(f.StrictMode,{children:o(F,{})}),document.getElementById("root"));
